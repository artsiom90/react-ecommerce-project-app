import { Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import logo from '../assets/img/logo.png'

export const NavbarComponent = () => {
    return (
        <Navbar
            collapseOnSelect
            expand='lg'
            bg='transparent'
            variant='dark'
            className='d-flex justify-content-between text-light navbar'
        >
            <Navbar.Brand>
                <Nav.Link to='/' as={NavLink}>
                    <img
                        width={60}
                        height={60}
                        src={logo}
                        alt='logo'
                    />
                    <Navbar.Text className='ms-2 d-inline-flex align-items-start flex-column lh-1 navbar-logo'>
                        <span className='text-light fs-2  navbar-brand-responsive'>Simple House</span>
                        <span className='navbar-brand-responsive'>new online restaurant</span>
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
        </Navbar>
    )
}
