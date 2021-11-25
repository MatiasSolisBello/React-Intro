import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import useAuth from '../auth/useAuth';
import routes from '../helpers/routes';

export default function Navigation() {

    const { logout } = useAuth();

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
                        <Nav.Link as={NavLink} to={routes.admin.usuario}>Usuarios</Nav.Link>
                        <Nav.Link as={NavLink} to={routes.producto}>Producto</Nav.Link>
                        <Nav.Link as={NavLink} to={routes.bodega}>Bodega</Nav.Link>
                        <Nav.Link as={NavLink} to={routes.login}>Login</Nav.Link>
                        <Nav.Link as={NavLink} to={routes.register}>Registro</Nav.Link>
                        <Nav.Link to={routes.register} onClick={logout}>Cerrar Sesion</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
