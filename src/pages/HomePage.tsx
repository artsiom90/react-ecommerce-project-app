import { useEffect, useState } from "react"
import { Container, Row } from "react-bootstrap"
import { ButtonComponent } from "../components/ButtonComponent"
import { CardComponent } from "../components/CardComponent"
import { HeroComponent } from "../components/HeroComponent"
import { SpinnerComponent } from "../components/SpinnerComponent"
import { TitleComponent } from "../components/TitleComponent"

interface Data {
    id: number
    title: string
    img: string
    price: number
    description: string
    category: number
    rating: number
}

export const HomePage = () => {
    const [data, setData] = useState<Data[]>([])
    const [filteredData, setFiltedData] = useState<Data[]>([])
    const [category, setCategory] = useState<number>(0)

    const btnMenuList = ['First menu', 'Second menu', 'Third menu']
    const btnMenuClasses = ['btn-menu']

    useEffect(() => {
        try {
            fetch('http://localhost:3001/meals')
                .then(response => response.json()
                    .then(data => setData(data)))
        } catch (error) {
            console.error(error)
        }
    }, [])

    useEffect(() => {
        const newData = data.filter(item => category === item.category)
        setFiltedData(newData)
    }, [category, data])

    return (
        <>
            <HeroComponent />
            <Container fluid>
                <TitleComponent
                    title={'Welcome To Simple House'}
                    description={'Enjoy Your Meal'}
                />
                <div className='d-flex justify-content-center flex-wrap pt-3 gap-4 pb-5'>
                    {btnMenuList.map((item, index) => {
                        return (
                            <ButtonComponent
                                key={index}
                                title={item}
                                isChecked={category === index ? true : false}
                                classes={btnMenuClasses}
                                btnClick={() => setCategory(index)}
                            />
                        )
                    })}
                </div>
                {filteredData.length === 0
                    ? <SpinnerComponent
                        spinnerAnimation={'grow'}
                        spinnerVariant={'success'}
                    />
                    : <Row className="d-flex justify-content-center gap-5 pb-5">
                        {filteredData.map(item => {
                            return (
                                <CardComponent
                                    key={item.id}
                                    {...item}
                                />
                            )
                        })}
                    </Row>}
            </Container>
        </>
    )
}
