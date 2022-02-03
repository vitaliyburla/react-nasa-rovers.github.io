import axios, { AxiosResponse } from 'axios';
import { IRover } from '../models/IRover';

const API = axios.create({
    baseURL: 'https://api.nasa.gov/mars-photos/api/v1',
});

interface IGetRoversResponseData {
    rovers: IRover[];
}

export const getRovers = async (): Promise<
    AxiosResponse<IGetRoversResponseData>
> => {
    const resp = await API.get('/rovers', {
        params: {
            api_key: process.env.REACT_APP_NASA_API_KEY,
        },
    });
    return resp;
};
