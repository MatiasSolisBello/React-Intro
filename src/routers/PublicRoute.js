import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../auth/useAuth';

export default function PublicRoute() {
    const{ user } = useAuth;

    //return user ? <Outlet />  : <Navigate to="/bodega" />;

    if(user) {
        console.log('USER DATA: ',user)
        return <Navigate to="/bodega" />;
    }
}
