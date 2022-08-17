import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import logo from '../assets/img/logo.png'
import { CartComponent } from './CartComponent'

export const NavbarComponent = () => {
    return (
        <Navbar
            collapseOnSelect
            expand='lg'
            bg='dark'
            variant='dark'
            className='d-flex justify-content-between text-center text-light navbar'
        >
            <Container fluid>
                <Navbar.Brand className='py-0'>
                    <Nav.Link
                        to='/'
                        as={NavLink}
                    >
                        <img
                            width={40}
                            height={40}
                            src={logo}
                            alt='logo'
                            className='mt-2'
                        />
                        <Navbar.Text className='ms-2 d-inline-flex align-items-start flex-column lh-1'>
                            <span className='text-light fs-5 navbar-brand-responsive'>Simple House</span>
                            <span className='navbar-brand-responsive fs-5'>new online restaurant</span>
                        </Navbar.Text>
                    </Nav.Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='fs-5 ms-auto d-flex navbar-links-list'>
                        <Nav.Link
                            to='/'
                            as={NavLink}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            to='/about'
                            as={NavLink}
                        >
                            About
                        </Nav.Link>
                        <Nav.Link
                            to='/contact'
                            as={NavLink}
                        >
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <CartComponent />
            </Container>
        </Navbar>
    )
}
