import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import React from 'react'
import HomePage from '../components/HomePage'
import LoginPage from '../components/LoginPage'
import RegisterPage from '../components/RegisterPage'
import NotFoundPage from '../components/NotFoundPage'
import Layout from '../components/layouts/Layout'
import BodegaPage from '../components/admin/BodegaPage'
import PrivateRoute from './PrivateRoute'

export default function AppRouter() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route exact path="/login" element={<LoginPage />} />
                    <Route exact path="/register" element={<RegisterPage />} />

                    <Route exact path='/bodega' element={<PrivateRoute/>} >
                        <Route exact path="/bodega" element={<BodegaPage />} />
                    </Route>

                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Layout>

        </Router>
    )
}
