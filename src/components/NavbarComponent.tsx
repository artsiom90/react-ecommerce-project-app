import { Badge, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import logo from '../assets/img/logo.png'

export const NavbarComponent = () => {
    return (
        <Navbar
            bg='transparent'
            variant='dark'
            className='position-fixed px-3 d-flex justify-content-between text-light navbar'
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
            <div className='d-flex gap-3'>
                <Nav className='fs-5'>
                    <Nav.Link to='/' as={NavLink}>Home</Nav.Link>
                    <Nav.Link to='/about' as={NavLink}>About</Nav.Link>
                    <Nav.Link to='/contact' as={NavLink}>Contact</Nav.Link>
                </Nav>
                <Badge
                    bg='danger'
                    className='position-absolute end-0 me-2 mt-1 card-badge'
                >
                    0
                </Badge>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    fill="currentColor"
                    className="bi bi-basket3 basket-icon"
                    viewBox="0 0 16 16">
                    <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6h-9.21z" />
                </svg>
            </div>
        </Navbar>
    )
}
