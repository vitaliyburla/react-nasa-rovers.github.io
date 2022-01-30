import React from 'react';
import Home from '../pages/Home';

export interface IRoute {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
}

export enum RouteNames {
    HOME = '/',
}

export const publicRoutes: IRoute[] = [
    { path: RouteNames.HOME, exact: true, component: Home },
];
