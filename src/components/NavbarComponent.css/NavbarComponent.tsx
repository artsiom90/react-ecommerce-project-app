import { ChangeEvent, SyntheticEvent, useContext, useState } from 'react'
import { Container, Form, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { NavLink, useLocation } from 'react-router-dom'
import logo from '../../assets/img/logo.png'
import { AppContext } from '../../context/AppContextProvider'
import styles from './Navbar.module.css'

export const NavbarComponent = () => {
    const [searchValue, setSearchValue] = useState<string>('')
    const [showMenu, setShowMenu] = useState(false)

    const { setSearchData } = useContext(AppContext)

    const location = useLocation()

    const onSubmitHandler = (e: SyntheticEvent) => {
        e.preventDefault()
        setSearchData(searchValue)
    }

    const toogleNavbarMenu = () => {
        setShowMenu(prev => !prev)
    }

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
                <div className='d-flex align-items-center gap-3'>
                    {location.pathname === '/' && (
                        <Form onSubmit={onSubmitHandler}>
                            <Form.Control
                                type='search'
                                placeholder='Search'
                                value={searchValue}
                                className='bg-dark text-white'
                                aria-label='Search'
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
                            />
                        </Form>
                    )}
                    <div>
                        <Navbar.Toggle
                            aria-controls='offcanvasNavbar-expand-lg'
                            onClick={toogleNavbarMenu}
                        />
                        <Navbar.Offcanvas
                            show={showMenu}
                            onHide={toogleNavbarMenu}
                            id='offcanvasNavbar-expand-lg'
                            aria-labelledby='offcanvasNavbar-expand-lg'
                            placement='end'
                        >
                            <Offcanvas.Header
                                closeButton
                                className='ms-auto'
                            />
                            <Offcanvas.Body>
                                <Nav className="fs-5 d-flex">
                                    <Nav.Link
                                        to='/'
                                        as={NavLink}
                                        onClick={toogleNavbarMenu}
                                    >
                                        Home
                                    </Nav.Link>
                                    <Nav.Link
                                        to='/about'
                                        as={NavLink}
                                        onClick={toogleNavbarMenu}
                                    >
                                        About
                                    </Nav.Link>
                                    <Nav.Link
                                        to='/contact'
                                        as={NavLink}
                                        onClick={toogleNavbarMenu}
                                    >
                                        Contact
                                    </Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </div>
                </div>
            </Container>
        </Navbar>
    )
}
