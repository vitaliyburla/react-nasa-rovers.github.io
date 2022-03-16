import { asteroidActionCreators } from './asteroids/actionCreators';
import { photoActionCreators } from './photos/actionCreators';
import { roversActionCreators } from './rovers/actionCreators';

export const allActionCreators = {
    ...roversActionCreators,
    ...photoActionCreators,
    ...asteroidActionCreators,
};
