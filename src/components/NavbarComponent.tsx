import { Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import logo from '../assets/img/logo.png'

export const NavbarComponent = () => {
    return (
        <Navbar
            bg='transparent'
            variant='dark'
            className='position-fixed px-3 d-flex justify-content-between text-light'
            style={{ zIndex: 1, width: '100%' }}
        >
            <Navbar.Brand>
                <Nav.Link to='/' as={NavLink}>
                    <img
                        width={60}
                        height={60}
                        src={logo}
                        alt='logo'
                    />
                    <Navbar.Text
                        className='ms-2 d-inline-flex flex-column lh-1'
                        style={{ height: '60px' }}
                    >
                        <span className='text-light fs-2'>Simple House</span>
                        <span>new online restaurant</span>
                    </Navbar.Text>
                </Nav.Link>
            </Navbar.Brand>
            <Nav className='fs-5'>
                <Nav.Link to='/' as={NavLink}>Home</Nav.Link>
                <Nav.Link to='/about' as={NavLink}>About</Nav.Link>
                <Nav.Link to='/contact' as={NavLink}>Contact</Nav.Link>
            </Nav>
        </Navbar>
    )
}
