import { IRover, IRoverPhoto } from '../../../models/IRover';

export interface IRoverState {
    rovers: IRover[];
    isLoading: boolean;
    error: string;
    currentRover: IRover;
    currentRoverPhotos: IRoverPhoto[];
}

export enum RoverActionEnum {
    SET_ROVERS = 'SET_ROVERS',
    SET_IS_LOADING = 'SET_IS_LOADING',
    SET_ERROR = 'SET_ERROR',
    SET_CURRENT_ROVER = 'SET_CURRENT_ROVER',
    SET_CURRENT_ROVER_PHOTOS = 'SET_CURRENT_ROVER_PHOTOS',
}

export interface ISetRoversAction {
    type: RoverActionEnum.SET_ROVERS;
    payload: IRover[];
}

export interface ISetIsLoadingAction {
    type: RoverActionEnum.SET_IS_LOADING;
    payload: boolean;
}

export interface ISetErrorAction {
    type: RoverActionEnum.SET_ERROR;
    payload: string;
}

export interface ISetCurrentRoverAction {
    type: RoverActionEnum.SET_CURRENT_ROVER;
    payload: IRover;
}

export interface ISetCurrentRoverPhotosAction {
    type: RoverActionEnum.SET_CURRENT_ROVER_PHOTOS;
    payload: IRoverPhoto[];
}

export type IRoverAction =
    | ISetRoversAction
    | ISetErrorAction
    | ISetIsLoadingAction
    | ISetCurrentRoverAction
    | ISetCurrentRoverPhotosAction;
