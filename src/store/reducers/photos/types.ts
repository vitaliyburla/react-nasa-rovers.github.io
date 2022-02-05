import { IRoverPhoto } from '../../../models/IRover';

export interface IPhotoState {
    currentRoverPhotos: IRoverPhoto[];
    isLoading: boolean;
    error: string;
}

export enum PhotoActionEnum {
    SET_IS_LOADING = 'SET_PHOTO_IS_LOADING',
    SET_ERROR = 'SET_PHOTO_ERROR',
    SET_CURRENT_ROVER_PHOTOS = 'SET_CURRENT_ROVER_PHOTOS',
}

export interface ISetIsLoadingAction {
    type: PhotoActionEnum.SET_IS_LOADING;
    payload: boolean;
}

export interface ISetErrorAction {
    type: PhotoActionEnum.SET_ERROR;
    payload: string;
}

export interface ISetCurrentRoverPhotosAction {
    type: PhotoActionEnum.SET_CURRENT_ROVER_PHOTOS;
    payload: IRoverPhoto[];
}

export type IPhotoAction =
    | ISetErrorAction
    | ISetCurrentRoverPhotosAction
    | ISetIsLoadingAction;
