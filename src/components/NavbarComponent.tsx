import { Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import logo from '../assets/img/logo.png'

export const NavbarComponent = () => {
    return (
        <Navbar bg='dark' variant='dark' className='text-light'>
            <Navbar.Brand>
                <img src={logo} alt='logo' />
            </Navbar.Brand>
            <Nav.Link to='/' as={NavLink}>Home</Nav.Link>
            <Nav.Link to='/about' as={NavLink}>About</Nav.Link>
            <Nav.Link to='/contact' as={NavLink}>Contact</Nav.Link>
        </Navbar>
    )
}
