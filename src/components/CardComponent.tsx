import { useState } from "react"
import { Badge, Card } from "react-bootstrap"
import { ButtonComponent } from "./ButtonComponent"
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
                className='p-0 card position-relative'
                style={{ width: '18rem' }}
            >
                <Badge
                    bg='danger'
                    className='position-absolute end-0 mt-1 me-1 fs-6 card-badge'
                >
                    0
                </Badge>
                <Card.Img
                    variant="top"
                    src={img}
                    className='card-img'
                    onClick={toogleModal}
                />
                <Card.Body className='lh-sm'>
                    <Card.Title>
                        {title}
                    </Card.Title>
                    <Card.Text className='fs-6 d-flex gap-2'>
                        <ButtonComponent
                            title={'+ Add'}
                            classes={['card-add-btn']}
                            btnClick={() => console.log}
                        />
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
