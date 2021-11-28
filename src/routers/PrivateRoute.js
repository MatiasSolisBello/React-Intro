import React from 'react'
import { Route, Redirect, useLocation } from 'react-router-dom'
import useAuth from '../auth/useAuth';
import routes from '../helpers/routes';

export default function PrivateRoute({ hasRole: role, ...rest }) {
    const location = useLocation();
    const { hasRole, isLogged } = useAuth();

    if (!isLogged()) {
        console.log('RUTA PRIVADA')
        return <Redirect to={routes.login} />
    }

    if (role && !hasRole(role)) {
        console.log('No puedes, tu rol es: ', role)
        return <Redirect to={{
            pathname: routes.login,
            state: {
                from: location
            }
        }}
        />
    }



    return (
        <Route {...rest} />
    )
}
