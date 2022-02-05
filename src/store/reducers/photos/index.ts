import { IPhotoAction, IPhotoState, PhotoActionEnum } from './types';

const initialState: IPhotoState = {
    currentRoverPhotos: [],
    error: '',
    isLoading: false,
};

const photoReducer = (
    state = initialState,
    action: IPhotoAction
): IPhotoState => {
    switch (action.type) {
        case PhotoActionEnum.SET_CURRENT_ROVER_PHOTOS:
            return { ...state, currentRoverPhotos: action.payload };
        case PhotoActionEnum.SET_IS_LOADING:
            return { ...state, isLoading: action.payload };
        case PhotoActionEnum.SET_ERROR:
            return { ...state, error: action.payload };
        default:
            return { ...state };
    }
};

export default photoReducer;
