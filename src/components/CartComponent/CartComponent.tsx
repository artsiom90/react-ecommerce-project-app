import { useContext, useState } from 'react'
import { Badge, Offcanvas, Stack } from 'react-bootstrap'
import { AppContext } from '../../context/AppContextProvider'
import { ButtonComponent } from '../ButtonComponent/ButtonComponent'
import { CartItemComponent } from '../CartItemComponent/CartItemComponent'
import styles from './Cart.module.css'

export const CartComponent = () => {
    const [showMenu, setShowMenu] = useState(false)

    const toogleCartMenu = () => {
        setShowMenu(prev => !prev)
    }

    const { menuData, quantity, cartItemsId, clearCartItems } = useContext(AppContext)

    const totalPrice = menuData
        .filter(item => cartItemsId.includes(item.id))
        .reduce((acc, item) => acc + (item.price as number * item.quantity as number), 0)

    return (
        <>
            <div
                className={`position-absolute end-0 ${styles.icon}`}
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
                className={`position-absolute end-0 ${styles.badge}`}
                onClick={toogleCartMenu}
            >
                {quantity > 0 && quantity}
            </Badge>
            <Offcanvas
                show={showMenu}
                onHide={toogleCartMenu}
                placement='end'
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className='fs-3'>Your menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {!cartItemsId.length
                        ? <span className='fs-4 text-muted'>Your cart is empty</span>
                        : <Stack gap={3}>
                            {cartItemsId.map(item => {
                                return <CartItemComponent
                                    key={item}
                                    cartItemId={item}
                                />
                            })}
                        </Stack>}
                </Offcanvas.Body>
                <div className='d-flex justify-content-between align-items-center mb-3 mx-3'>
                    {totalPrice > 0 && (
                        <>
                            < span className={`fs-5 ${styles.price}`}>
                                Total price: {totalPrice}$
                            </span>
                            <ButtonComponent
                                title={'Clear cart'}
                                classes={[styles['remove-btn']]}
                                btnClick={clearCartItems}
                            />
                        </>
                    )}
                </div>
            </Offcanvas>
        </>
    )
}
