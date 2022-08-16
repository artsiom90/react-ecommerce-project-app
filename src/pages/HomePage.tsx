import { useContext, useEffect } from "react"
import { Container, Row } from "react-bootstrap"
import { ButtonComponent } from "../components/ButtonComponent"
import { CardComponent } from "../components/CardComponent"
import { SpinnerComponent } from "../components/SpinnerComponent"
import { TitleComponent } from "../components/TitleComponent"
import { MainContext } from "../context/MainContextProvider"
import { DataType } from "../context/types"

export const HomePage = () => {
    const {
        category,
        menuData,
        fetchMenuData,
        setMenuCategory,
        addCardItem,
        removeCardItem,
        addItemToCart,
    } = useContext(MainContext)

    const btnMenuList = ['First menu', 'Second menu', 'Third menu']
    const btnMenuClasses = ['btn-menu']

    useEffect(() => {
        fetchMenuData()
    }, [fetchMenuData])

    return (
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
                            btnClick={() => setMenuCategory(index)}
                        />
                    )
                })}
            </div>
            {menuData.length === 0
                ? <SpinnerComponent
                    spinnerAnimation={'grow'}
                    spinnerVariant={'success'}
                />
                : <Row className="d-flex justify-content-center gap-5 pb-5">
                    {menuData.filter(item => item.category === category).map(item => {
                        return (
                            <CardComponent
                                key={item.id}
                                addCardItem={() => addCardItem(item.id)}
                                removeCardItem={() => removeCardItem(item.id)}
                                addItemToCart={() => addItemToCart(item.id)}
                                {...item}
                            />
                        )
                    })}
                </Row>}
        </Container>
    )
}
