import { IAsteroidsData } from '../models/IAsteroid';
import { IRover, IRoverPhoto } from '../models/IRover';

//rovers

export interface IGetRoversResponseData {
    rovers: IRover[];
}

export interface IGetRoverByNameResponseData {
    rover: IRover;
}

export interface IGetRoverPhotoResponseData {
    photos: IRoverPhoto[];
}
