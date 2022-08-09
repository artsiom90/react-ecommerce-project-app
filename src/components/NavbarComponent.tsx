import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import logo from '../assets/img/logo.png'

export const NavbarComponent = () => {
    return (
        <Container fluid>
            <Navbar
                bg='transparent'
                variant='dark'
                className='px-3 d-flex justify-content-between text-light navbar'
            >
                <Navbar.Brand>
                    <Nav.Link to='/' as={NavLink}>
                        <img
                            width={60}
                            height={60}
                            src={logo}
                            alt='logo'
                        />
                        <Navbar.Text className='ms-2 d-inline-flex flex-column lh-1 navbar-logo'>
                            <span className='text-light fs-2'>Simple House</span>
                            <span>new online restaurant</span>
                        </Navbar.Text>
                    </Nav.Link>
                </Navbar.Brand>
                <Nav className='fs-5 me-4'>
                    <Nav.Link to='/' as={NavLink}>Home</Nav.Link>
                    <Nav.Link to='/about' as={NavLink}>About</Nav.Link>
                    <Nav.Link to='/contact' as={NavLink}>Contact</Nav.Link>
                </Nav>
            </Navbar>
        </Container>
    )
}
