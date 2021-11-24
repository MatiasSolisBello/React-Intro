import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import React from 'react'
import HomePage from '../components/HomePage'
import LoginPage from '../components/LoginPage'
import RegisterPage from '../components/RegisterPage'
import NotFoundPage from '../components/NotFoundPage'
import Layout from '../components/layouts/Layout'
import BodegaPage from '../components/admin/BodegaPage'
import PrivateRoute from './PrivateRoute'
import ProductoPage from '../components/ProductoPage'
import UsuarioPage from '../components/UsuarioPage'

export default function AppRouter() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route exact path="/login" element={<LoginPage />} />
                    <Route exact path="/register" element={<RegisterPage />} />
                    <Route exact path="/producto" element={<ProductoPage />} />

                    {/* PUBLIC ROUTE
                    <Route exact path='/login' element={<PublicRoute />} >
                        <Route exact path="/login" element={<LoginPage />} />
                    </Route>*/}

                    <Route exact path='/bodega' element={<PrivateRoute/>} >
                        <Route exact path="/bodega" element={<BodegaPage />} />
                    </Route>

                    <Route hasRole="admin" exact path='/usuario' element={<PrivateRoute/>} >
                        <Route exact path="/usuario" element={<UsuarioPage />} />
                    </Route>

                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Layout>

        </Router>
    )
}
