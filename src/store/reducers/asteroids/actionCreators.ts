import { AppDispatch } from '../..';
import { getAsteroids } from '../../../api/AsteroidsService';
import { IAsteroidsData } from '../../../models/IAsteroid';
import {
    AsteroidActionEnum,
    ISetAsteroidsAction,
    ISetErrorAction,
    ISetIsLoadingAction,
} from './types';

export const asteroidActionCreators = {
    setAsteroids: (asteroids: IAsteroidsData): ISetAsteroidsAction => ({
        type: AsteroidActionEnum.SET_ASTEROIDS,
        payload: asteroids,
    }),
    setIsLoading: (isLoading: boolean): ISetIsLoadingAction => ({
        type: AsteroidActionEnum.SET_IS_LOADING,
        payload: isLoading,
    }),
    setError: (error: string): ISetErrorAction => ({
        type: AsteroidActionEnum.SET_ERROR,
        payload: error,
    }),
    getAsteroidsByPage: (page: number) => async (dispatch: AppDispatch) => {
        dispatch(asteroidActionCreators.setIsLoading(true));
        try {
            const asteroids = await getAsteroids(page);
            dispatch(asteroidActionCreators.setAsteroids(asteroids.data));
        } catch (error) {
            dispatch(
                asteroidActionCreators.setError(
                    'Ohh... Something went wrong! Unable to download asteroids data.'
                )
            );
        }
        dispatch(asteroidActionCreators.setIsLoading(false));
    },
};
