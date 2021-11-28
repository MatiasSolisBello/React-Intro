import React from 'react'
import { Redirect, Route } from 'react-router';
import useAuth from '../auth/useAuth';
import routes from '../helpers/routes';

export default function PublicRoute({...rest}) {
    const { isLogged } = useAuth();

    if(isLogged()){
        return <Redirect to={routes.producto} />
    }
    
    return (
        <Route {...rest} />
    )
}
