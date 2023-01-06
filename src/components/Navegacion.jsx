import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from 'react-router-dom';


function Navegacion() {
    return (
        <>
        <Navbar className='navBg' variant='dark' expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">Base de Obreros asociados</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
                        <Nav.Link as={Link} to="/About">Sobre Nosotros</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


        <section className='section__outlet'>
            <Outlet>

            </Outlet>
        </section>
        </>





    );
}

export default Navegacion;    