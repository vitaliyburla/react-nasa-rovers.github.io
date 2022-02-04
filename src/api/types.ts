import { IRover } from '../models/IRover';

export interface IGetRoversResponseData {
    rovers: IRover[];
}

export interface IGetRoverByNameResponseData {
    rover: IRover;
}
