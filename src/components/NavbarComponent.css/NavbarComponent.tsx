import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/img/logo.png'
import { CartComponent } from '../CartComponent/CartComponent'
import styles from './Navbar.module.css'

export const NavbarComponent = () => {
    return (
        <Navbar
            collapseOnSelect
            expand='lg'
            bg='dark'
            variant='dark'
            className={`d-flex justify-content-between text-center text-light ${styles.navbar}`}
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
                            <span className={`text-light fs-5 ${styles['navbar-brand']}`}>Simple House</span>
                            <span className={`fs-5 ${styles['navbar-brand']}`}>new online restaurant</span>
                        </Navbar.Text>
                    </Nav.Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className={`fs-5 ms-auto d-flex ${styles.links}`}>
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
