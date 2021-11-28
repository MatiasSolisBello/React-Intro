import { Switch, Route } from 'react-router-dom'

import HomePage from '../components/HomePage'
import LoginPage from '../components/LoginPage'
import RegisterPage from '../components/RegisterPage'
import NotFoundPage from '../components/NotFoundPage'
import BodegaPage from '../components/admin/BodegaPage'
import ProductoPage from '../components/ProductoPage'
import UsuarioPage from '../components/UsuarioPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import roles from '../helpers/roles'
import routes from '../helpers/routes'
import AccountPage from '../components/AccountPage'

export default function AppRouter() {
    return (
        <Switch>
            <Route exact path={routes.home} component={HomePage} />
            <PublicRoute exact path={routes.login} component={LoginPage} />
            <PublicRoute exact path={routes.register} component={RegisterPage} />
            <Route exact path={routes.producto} component={ProductoPage} />

            <PrivateRoute exact path={routes.bodega} component={BodegaPage} />
            <PrivateRoute exact path={routes.account} component={AccountPage} />
            <PrivateRoute hasRole={roles.admin} exact path={routes.usuario} component={UsuarioPage} />


            <Route path="*" component={NotFoundPage} />
        </Switch>

    )
}