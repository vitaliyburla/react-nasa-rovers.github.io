import { IAsteroidsData } from '../../../models/IAsteroid';
import { AsteroidActionEnum, IAsteroidAction, IAsteroidState } from './types';

const initialState: IAsteroidState = {
    asteroids: {} as IAsteroidsData,
    isLoading: false,
    error: '',
};

const asteroidsReducer = (
    state = initialState,
    action: IAsteroidAction
): IAsteroidState => {
    switch (action.type) {
        case AsteroidActionEnum.SET_ASTEROIDS:
            return { ...state, asteroids: action.payload };
        case AsteroidActionEnum.SET_IS_LOADING:
            return { ...state, isLoading: action.payload };
        case AsteroidActionEnum.SET_ERROR:
            return { ...state, error: action.payload };
        default:
            return { ...state };
    }
};

export default asteroidsReducer;
