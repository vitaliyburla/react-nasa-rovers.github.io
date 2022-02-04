import { IRover } from '../../../models/IRover';
import { IRoverAction, IRoverState, RoverActionEnum } from './types';

const initialState: IRoverState = {
    rovers: [],
    error: '',
    isLoading: false,
    currentRover: {} as IRover,
};

const roverReducer = (
    state = initialState,
    action: IRoverAction
): IRoverState => {
    switch (action.type) {
        case RoverActionEnum.SET_ROVERS:
            return { ...state, rovers: action.payload };
        case RoverActionEnum.SET_IS_LOADING:
            return { ...state, isLoading: action.payload };
        case RoverActionEnum.SET_ERROR:
            return { ...state, error: action.payload };
        case RoverActionEnum.SET_CURRENT_ROVER:
            return { ...state, currentRover: action.payload };
        default:
            return state;
    }
};

export default roverReducer;
