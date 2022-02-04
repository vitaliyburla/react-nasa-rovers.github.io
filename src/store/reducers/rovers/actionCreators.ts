import { AppDispatch } from '../..';
import {
    getRoverByName,
    getRoverPhotos,
    getRovers,
} from '../../../api/RoverService';
import { IRover, IRoverPhoto } from '../../../models/IRover';
import {
    ISetCurrentRoverAction,
    ISetCurrentRoverPhotosAction,
    ISetErrorAction,
    ISetIsLoadingAction,
    ISetRoversAction,
    RoverActionEnum,
} from './types';

export const roversActionCreators = {
    setRovers: (rovers: IRover[]): ISetRoversAction => ({
        type: RoverActionEnum.SET_ROVERS,
        payload: rovers,
    }),
    setCurrentRover: (rover: IRover): ISetCurrentRoverAction => ({
        type: RoverActionEnum.SET_CURRENT_ROVER,
        payload: rover,
    }),
    setCurrentRoverPhotos: (
        photos: IRoverPhoto[]
    ): ISetCurrentRoverPhotosAction => ({
        type: RoverActionEnum.SET_CURRENT_ROVER_PHOTOS,
        payload: photos,
    }),
    setIsLoading: (isLoading: boolean): ISetIsLoadingAction => ({
        type: RoverActionEnum.SET_IS_LOADING,
        payload: isLoading,
    }),
    setError: (error: string): ISetErrorAction => ({
        type: RoverActionEnum.SET_ERROR,
        payload: error,
    }),
    getAllRovers: () => async (dispatch: AppDispatch) => {
        try {
            dispatch(roversActionCreators.setIsLoading(true));
            const rovers = await getRovers();
            dispatch(roversActionCreators.setRovers(rovers.data.rovers));
        } catch (error) {
            dispatch(
                roversActionCreators.setError(
                    'Ohh... Something went wrong! Unable to download rovers data.'
                )
            );
        }
        dispatch(roversActionCreators.setIsLoading(false));
    },
    getRoverByName: (name: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(roversActionCreators.setIsLoading(true));
            const rover = await getRoverByName(name);
            dispatch(roversActionCreators.setCurrentRover(rover.data.rover));
        } catch (error) {
            dispatch(
                roversActionCreators.setError(
                    'Ohh... Something went wrong! Unable to download rover data.'
                )
            );
        }
        dispatch(roversActionCreators.setIsLoading(false));
    },
    getRoverPhotos:
        (
            name: string,
            sol: number | string | Array<number | string>,
            camera: string
        ) =>
        async (dispatch: AppDispatch) => {
            try {
                const rover = await getRoverPhotos(name, sol, camera);
                dispatch(
                    roversActionCreators.setCurrentRoverPhotos(
                        rover.data.photos
                    )
                );
            } catch (error) {
                dispatch(
                    roversActionCreators.setError(
                        'Ohh... Something went wrong! Unable to download rover photos.'
                    )
                );
            }
        },
};
