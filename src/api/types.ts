import { IRover, IRoverPhoto } from '../models/IRover';

export interface IGetRoversResponseData {
    rovers: IRover[];
}

export interface IGetRoverByNameResponseData {
    rover: IRover;
}

export interface IGetRoverPhotoResponseData {
    photos: IRoverPhoto[];
}
