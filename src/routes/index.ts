import React from 'react';
import RoverPage from '../pages/Rovers/Rover';
import RoversPage from '../pages/Rovers';
import Home from '../pages/Home';
import AsteroidsPage from '../pages/Asteroids';

export interface IRoute {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
}

export enum RouteNames {
    HOME = '/',
    ROVERS = '/rovers',
    ASTEROIDS = '/asteroids',
    ROVER = '/rovers/:name',
}

export const publicRoutes: IRoute[] = [
    { path: RouteNames.HOME, exact: true, component: Home },
    { path: RouteNames.ROVERS, exact: true, component: RoversPage },
    { path: RouteNames.ASTEROIDS, exact: true, component: AsteroidsPage },
    { path: RouteNames.ROVER, exact: true, component: RoverPage },
];
