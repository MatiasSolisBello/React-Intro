import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import useAuth from '../auth/useAuth';
import routes from '../helpers/routes';

export default function Navigation() {

    //declaracion
    const { logout } = useAuth();
    const { user } = useAuth();
    let menu;
    let menuRol;

    //verificar login
    console.log(user)

    //si no existe login => vemos login y registro
    if (user == null) {
        menu = (
            <>
                <Nav.Link as={NavLink} to={routes.login}>Login</Nav.Link>
                <Nav.Link as={NavLink} to={routes.register}>Registro</Nav.Link>
            </>
        )
    } else {
        //si existe login => vemos la cuenta y logout
        menu = (
            <>
                <Nav.Link as={NavLink} to={routes.account}>Cuenta</Nav.Link>
                <Nav.Link to={routes.account} onClick={logout}>Cerrar Sesion</Nav.Link>
            </>
        )

        //verificamos por rol
        if (user.rol === 'admin') {
            menuRol = (
                <>
                    <Nav.Link as={NavLink} to={routes.usuario}>Usuarios</Nav.Link>
                    <Nav.Link as={NavLink} to={routes.bodega}>Bodega</Nav.Link>
                    <Nav.Link>{user.rol}</Nav.Link>
                </>
            )
        } else if (user.rol === 'regular') {
            menuRol = (
                <>
                    <Nav.Link as={NavLink} to={routes.bodega}>Bodega</Nav.Link>
                    <Nav.Link>{user.rol}</Nav.Link>
                </>
            )
        } else {
            menuRol = (
                <>

                </>
            )
        }
    }





    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={NavLink} to={routes.home}>
                    <img
                        alt=""
                        src="/favicon.ico"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                    ContableDemo
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link as={NavLink} to={routes.producto}>Producto</Nav.Link>
                        {menuRol}
                        {menu}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
