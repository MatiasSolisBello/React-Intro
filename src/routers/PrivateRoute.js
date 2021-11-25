import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import useAuth from '../auth/useAuth';
import routes from '../helpers/routes';

export default function PrivateRoute({ hasRole: role, ...rest }) {
    const { hasRole, isLogged } = useAuth();

    if(!isLogged()){
        console.log('RUTA PRIVADA: ', isLogged)
        return <Redirect to={routes.login} />
    }
    
    if(role && !hasRole(role)){
        //console.log('No puedes, tu rol es: ', role)
        return <Redirect to={routes.home} />
    }

    
    
    return (
        <Route {...rest} />
    )
}
