import { useState } from "react"
import { Card } from "react-bootstrap"
import { ModalComponent } from "./ModalComponent"

interface CardComponentProps {
    title: string
    img: string
    price: number
    description: string
    category: number
    rating: number
}

export const CardComponent = ({ img, title, description }: CardComponentProps) => {
    const [openModal, setOpenModal] = useState<boolean>(false)

    const toogleModal = () => {
        setOpenModal(prev => !prev)
    }

    return (
        <>
            <Card
                className='p-0 card'
                style={{ width: '18rem' }}
            >
                <Card.Img
                    variant="top"
                    src={img}
                    className='card-img'
                    onClick={toogleModal}
                />
                <Card.Body>
                    <Card.Title>
                        {title}
                    </Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
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
