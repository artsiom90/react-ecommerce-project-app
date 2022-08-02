import { Navbar } from 'react-bootstrap'
import logo from '../assets/img/logo.png'

export const NavbarComponent = () => {
    return (
        <Navbar bg='dark' variant='dark'>
            <Navbar.Brand>
                <img src={logo} alt='logo' />
            </Navbar.Brand>
        </Navbar>
    )
}
