import React from 'react'
import { Navigate, Route, Outlet } from 'react-router-dom'

export default function PrivateRoute() {
    const user = null;
    //const user = { id: 1, role: 'Regular' };

    return user ? <Outlet />  : <Navigate to="/login" />;
}
