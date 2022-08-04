import { Card } from "react-bootstrap"

interface CardComponentProps {
    title: string
    img: string
    price: number
    description: string
    category: number
    rating: number
}

export const CardComponent = ({ img, title, description }: CardComponentProps) => {
    return (
        <Card
            className='p-0'
            style={{ width: '18rem' }}
        >
            <Card.Img
                variant="top"
                src={img}
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
    )
}
