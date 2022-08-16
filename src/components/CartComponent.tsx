import { useContext, useState } from 'react'
import { Badge, Offcanvas, Stack } from 'react-bootstrap'
import { MainContext } from '../context/MainContextProvider'

export const CartComponent = () => {
    const [showMenu, setShowMenu] = useState(false)

    const toogleCartMenu = () => {
        setShowMenu(prev => !prev)
    }

    const { quantity, cartData } = useContext(MainContext)
    console.log(cartData)

    return (
        <>
            <div
                className='position-fixed end-0 me-3 basket-icon'
                onClick={toogleCartMenu}
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
                onHide={toogleCartMenu}
                placement={'end'}
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Your Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Stack gap={3}>
                        <div className="bg-light border">First item</div>
                        <div className="bg-light border">Second item</div>
                        <div className="bg-light border">Third item</div>
                    </Stack>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}
