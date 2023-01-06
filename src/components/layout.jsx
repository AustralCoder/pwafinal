import { NavLink } from "react-router-dom";
import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Layout = () => {
    return(
    <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand className="p-3"href="#home">Registro de trabajadores por el futuro</Navbar.Brand>
                <Nav className="me-auto">
                    <NavLink  to={"/"} className="navlinks" href="#home">Home</NavLink>
                    <NavLink  to={"/empleados"} className="navlinks" href="#features">Registro de Empleados</NavLink>
                    <NavLink  to={"/contacto"} className="navlinks" href="#pricing">Contacto</NavLink>
                </Nav>
            </Container>
        </Navbar>
        
    </>
    )
}

export default Layout;