import { useState } from "react"
import { Badge, Card } from "react-bootstrap"
import { ButtonComponent } from "../ButtonComponent/ButtonComponent"
import { ModalComponent } from "../ModalComponent/ModalComponent"
import styles from './Card.module.css'

interface CardComponentProps {
    title: string
    img: string
    price: number
    description: string
    category: number
    rating: number
    quantity: number
    addCardItem: () => void
    removeCardItem: () => void
    addItemToCart: () => void
}

export const CardComponent = ({
    img,
    title,
    price,
    description,
    rating,
    quantity,
    addCardItem,
    removeCardItem,
    addItemToCart,
}: CardComponentProps) => {
    const [openModal, setOpenModal] = useState<boolean>(false)

    const toogleModal = () => {
        setOpenModal(prev => !prev)
    }

    const addItem = () => {
        addCardItem()
        addItemToCart()
    }

    return (
        <>
            <Card
                className={`p-0 position-relative ${styles.card}`}
                style={{ width: '17rem' }}
            >
                <Badge
                    bg='danger'
                    className={`position-absolute end-0 mt-1 me-1 fs-6 ${styles.badge}`}
                >
                    {quantity > 0 && quantity}
                </Badge>
                <Card.Img
                    variant="top"
                    src={img}
                    className={styles.img}
                    onClick={toogleModal}
                />
                <Card.Body className='lh-sm'>
                    <Card.Title>
                        {title}
                    </Card.Title>
                    <div className='fs-6 d-flex justify-content-between align-items-center'>
                        <div className='d-flex gap-2'>
                            <ButtonComponent
                                title={'+ Add'}
                                classes={[styles['add-btn']]}
                                btnClick={addItem}
                            />
                            {quantity > 0 && <ButtonComponent
                                title={'Remove'}
                                classes={[styles['remove-btn']]}
                                btnClick={removeCardItem}
                            />}
                        </div>
                        <span className={`fs-5 ${styles.price}`}>{price}$</span>
                    </div>
                </Card.Body>
            </Card>
            <ModalComponent
                title={title}
                img={img}
                description={description}
                open={openModal}
                close={toogleModal}
            />
        </>
    )
}
