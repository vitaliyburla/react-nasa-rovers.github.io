import axios, { AxiosResponse } from 'axios';
import { IRover } from '../models/IRover';

const API = axios.create({
    baseURL: 'https://api.nasa.gov/mars-photos/api/v1',
});

export const getRovers = (): Promise<AxiosResponse<IRover[]>> => {
    return API.get<IRover[]>('/rovers', {
        params: {
            api_key: process.env.REACT_APP_NASA_API_KEY,
        },
    });
};
