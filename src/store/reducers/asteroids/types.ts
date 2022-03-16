import { IAsteroidsData } from '../../../models/IAsteroid';

export interface IAsteroidState {
    asteroids: IAsteroidsData;
    isLoading: boolean;
    error: string;
}

export enum AsteroidActionEnum {
    SET_ASTEROIDS = 'SET_ASTEROIDS',
    SET_IS_LOADING = 'SET_ASTEROID_IS_LOADING',
    SET_ERROR = 'SET_ASTEROID_ERROR',
}

export interface ISetAsteroidsAction {
    type: AsteroidActionEnum.SET_ASTEROIDS;
    payload: IAsteroidsData;
}

export interface ISetIsLoadingAction {
    type: AsteroidActionEnum.SET_IS_LOADING;
    payload: boolean;
}

export interface ISetErrorAction {
    type: AsteroidActionEnum.SET_ERROR;
    payload: string;
}

export type IAsteroidAction =
    | ISetAsteroidsAction
    | ISetIsLoadingAction
    | ISetErrorAction;
