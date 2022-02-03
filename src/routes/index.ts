import React from 'react';
import Home from '../pages/Home';
import RoverPage from '../pages/Rover';

export interface IRoute {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
}

export enum RouteNames {
    HOME = '/',
    ROVER = '/rovers/:name',
}

export const publicRoutes: IRoute[] = [
    { path: RouteNames.HOME, exact: true, component: Home },
    { path: RouteNames.ROVER, exact: true, component: RoverPage },
];
