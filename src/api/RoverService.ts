import axios, { AxiosResponse } from 'axios';
import {
    IGetRoverByNameResponseData,
    IGetRoverPhotoResponseData,
    IGetRoversResponseData,
} from './types';

const roversAPI = axios.create({
    baseURL: 'https://api.nasa.gov/mars-photos/api/v1',
    params: {
        api_key: process.env.REACT_APP_NASA_API_KEY,
    },
});

const asteroidsAPI = axios.create({
    baseURL: 'http://www.neowsapp.com/rest/v1',
    params: {
        api_key: process.env.REACT_APP_NASA_API_KEY,
    },
});

export const getRovers = async (): Promise<
    AxiosResponse<IGetRoversResponseData>
> => {
    const resp = await roversAPI.get('/rovers');
    return resp;
};

export const getRoverByName = async (
    name: string
): Promise<AxiosResponse<IGetRoverByNameResponseData>> => {
    const resp = await roversAPI.get(`/rovers/${name.toLowerCase()}`);
    return resp;
};

export const getRoverPhotos = async (
    name: string,
    sol: number | string | Array<number | string>,
    camera: string
): Promise<AxiosResponse<IGetRoverPhotoResponseData>> => {
    const resp = await roversAPI.get(
        `/rovers/${name.toLowerCase()}/photos?sol=${sol}&camera=${camera}`
    );
    return resp;
};
