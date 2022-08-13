import { useContext, useState } from 'react'
import { Badge, Offcanvas } from 'react-bootstrap'
import { MainContext } from '../context/MainContextProvider'

export const BasketComponent = () => {
    const [showMenu, setShowMenu] = useState(false)

    const toogleBasketMenu = () => {
        setShowMenu(prev => !prev)
    }

    const { quantity } = useContext(MainContext)

    return (
        <>
            <div
                className='position-fixed end-0 me-3 basket-icon'
                onClick={toogleBasketMenu}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    fill="#319966"
                    className="bi bi-basket3"
                    viewBox="0 0 16 16">
                    <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6h-9.21z" />
                </svg>
            </div>
            <Badge
                bg='danger'
                className='position-fixed end-0 mt-4 me-2 basket-badge'
            >
                {quantity > 0 && quantity}
            </Badge>
            <Offcanvas
                show={showMenu}
                onHide={toogleBasketMenu}
                placement={'end'}
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Your Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}
