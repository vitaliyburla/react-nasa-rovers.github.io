import { IAsteroid } from '../models/IAsteroid';
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

//asteroids

export interface IGetAsteroidsResponseData {
    links: {
        next: string;
        prev?: string;
        self: string;
    };
    page: {
        size: number;
        total_elements: number;
        total_pages: number;
        number: number;
    };
    near_earth_objects: IAsteroid[];
}
