import { IRover } from '../../../models/IRover';

export interface IRoverState {
    rovers: IRover[];
    isLoading: boolean;
    error: string;
}

export enum RoverActionEnum {
    SET_ROVERS = 'SET_ROVERS',
    SET_IS_LOADING = 'SET_IS_LOADING',
    SET_ERROR = 'SET_ERROR',
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

export type IRoverAction =
    | ISetRoversAction
    | ISetErrorAction
    | ISetIsLoadingAction;
