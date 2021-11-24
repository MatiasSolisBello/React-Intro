import React from 'react'
import { Navigate, Outlet, Route } from 'react-router-dom'
import useAuth from '../auth/useAuth';

export default function PrivateRoute({hasRole: role, ...rest}) {
    const{ user } = useAuth();

    console.log('PESTAÑA PRIVADA')
    console.log('DATA USER', user);
    
    return user ? <Outlet />  : <Navigate to="/login" />

    return (
        <Route {...rest} />
    )
}
