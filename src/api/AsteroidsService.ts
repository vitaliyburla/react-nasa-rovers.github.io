import axios, { AxiosResponse } from 'axios';

const API = axios.create({
    baseURL: 'http://www.neowsapp.com/rest/v1',
    params: {
        api_key: process.env.REACT_APP_NASA_API_KEY,
    },
});

export const getAsteroids = async (
    page: number,
    size = 20
): Promise<AxiosResponse> => {
    const resp = await API.get('/neo/browse', {
        params: {
            page: page,
            size: size,
        },
    });
    return resp;
};
