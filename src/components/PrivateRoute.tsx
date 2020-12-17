import React, { FC } from 'react';
import {Route, Redirect, RouteProps} from 'react-router-dom';

export interface ProtectedRouteProperties extends RouteProps {
    isAuthenticated: boolean;
    redirectTo: string;
}

export const ProtectedRoute: FC<ProtectedRouteProperties> = (props) => {
    const {isAuthenticated, redirectTo, component, render} = props;
    return ( 
        isAuthenticated ? 
            (<Route {...props} component={component} render={render}/>) 
            :
            (<Redirect to={{pathname: redirectTo}}/>)
    )
}