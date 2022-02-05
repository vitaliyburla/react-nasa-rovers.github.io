import { AppDispatch } from '../..';
import { getRoverPhotos } from '../../../api/RoverService';
import { IRoverPhoto } from '../../../models/IRover';
import {
    ISetCurrentRoverPhotosAction,
    ISetErrorAction,
    ISetIsLoadingAction,
    PhotoActionEnum,
} from './types';

export const photoActionCreators = {
    setCurrentRoverPhotos: (
        photos: IRoverPhoto[]
    ): ISetCurrentRoverPhotosAction => ({
        type: PhotoActionEnum.SET_CURRENT_ROVER_PHOTOS,
        payload: photos,
    }),
    setIsLoading: (isLoading: boolean): ISetIsLoadingAction => ({
        type: PhotoActionEnum.SET_IS_LOADING,
        payload: isLoading,
    }),
    setError: (error: string): ISetErrorAction => ({
        type: PhotoActionEnum.SET_ERROR,
        payload: error,
    }),
    getRoverPhotos:
        (
            name: string,
            sol: number | string | Array<number | string>,
            camera: string
        ) =>
        async (dispatch: AppDispatch) => {
            try {
                dispatch(photoActionCreators.setIsLoading(true));
                const photos = await getRoverPhotos(name, sol, camera);
                dispatch(
                    photoActionCreators.setCurrentRoverPhotos(
                        photos.data.photos
                    )
                );
            } catch (error) {
                dispatch(
                    photoActionCreators.setError(
                        'Ohh... Something went wrong! Unable to download rover photos.'
                    )
                );
            }
            dispatch(photoActionCreators.setIsLoading(false));
        },
};
