import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link, NavLink } from "react-router-dom";

export default function Navigation() {
    return (
        <Navbar collapseOnSelect bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={NavLink} to="/">ContableDemo</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Link to="/login" className="nav-link">Login</Link>
                        <Link to="/register" className="nav-link">Registro</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
