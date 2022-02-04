import axios, { AxiosResponse } from 'axios';
import { IGetRoverByNameResponseData, IGetRoversResponseData } from './types';

const API = axios.create({
    baseURL: 'https://api.nasa.gov/mars-photos/api/v1',
    params: {
        api_key: process.env.REACT_APP_NASA_API_KEY,
    },
});

export const getRovers = async (): Promise<
    AxiosResponse<IGetRoversResponseData>
> => {
    const resp = await API.get('/rovers');
    return resp;
};

export const getRoverByName = async (
    name: string
): Promise<AxiosResponse<IGetRoverByNameResponseData>> => {
    const resp = await API.get(`/rovers/${name.toLowerCase()}`);
    return resp;
};
