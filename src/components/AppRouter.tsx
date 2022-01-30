import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { publicRoutes, RouteNames } from '../routes';

const AppRouter = () => {
    return (
        <Switch>
            {publicRoutes.map((route) => (
                <Route
                    key={route.path}
                    path={route.path}
                    component={route.component}
                    exact={route.exact}
                />
            ))}
            <Redirect to={RouteNames.HOME} />
        </Switch>
    );
};

export default AppRouter;
