import { ChangeEvent, useContext, useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { ButtonComponent } from "../../components/ButtonComponent/ButtonComponent"
import { CardComponent } from "../../components/CardComponent/CardComponent"
import { CartComponent } from "../../components/CartComponent/CartComponent"
import { SpinnerComponent } from "../../components/SpinnerComponent/SpinnerComponent"
import { TitleComponent } from "../../components/TitleComponent/TitleComponent"
import { MainContext } from "../../context/MainContextProvider"
import { useInnerWidth } from "../../hooks/useInnerWidth"
import styles from './HomePage.module.css'

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

    const innerWidth = useInnerWidth()

    const btnMenuList = ['First menu', 'Second menu', 'Third menu']

    useEffect(() => {
        fetchMenuData()
    }, [fetchMenuData])

    return (
        <Container fluid>
            <CartComponent />
            <TitleComponent
                title={'Welcome To Simple House'}
                description={'Enjoy Your Meal'}
            />
            <div className='d-flex justify-content-center flex-wrap pt-2 gap-4 pb-4'>
                {innerWidth < 768 ?
                    <div className='d-flex flex-column'>
                        <label
                            htmlFor='menu'
                            className='fs-6 text-muted text-center'
                        >
                            Tap to choose
                        </label>
                        <select
                            name='menu'
                            id='menu'
                            className={styles.select}
                            onChange={(e: ChangeEvent<HTMLSelectElement>) => setMenuCategory(+e.target.value)}
                        >
                            {btnMenuList.map((item, index) => {
                                return (
                                    <option
                                        value={index}
                                        key={index}
                                        className={styles.option}
                                    >
                                        {item}
                                    </option>
                                )
                            })}
                        </select>
                    </div>
                    : btnMenuList.map((item, index) => {
                        return (
                            <ButtonComponent
                                key={index}
                                title={item}
                                isChecked={category === index ? true : false}
                                classes={[styles['menu-btn']]}
                                btnClick={() => setMenuCategory(index)}
                            />
                        )
                    })}
            </div>
            {menuData.length === 0
                ? <div className='mb-5'>
                    <SpinnerComponent
                        spinnerAnimation={'grow'}
                        spinnerVariant={'success'}
                    />
                </div>
                : <div className={`pb-5 ${styles.grid}`}>
                    {menuData.filter(item => item.category === category).map(item => {
                        return (
                            <section
                                key={item.id}
                                className='d-flex justify-content-center'
                            >
                                <CardComponent
                                    addCardItem={() => addCardItem(item.id)}
                                    removeCardItem={() => removeCardItem(item.id)}
                                    addItemToCart={() => addItemToCart(item.id)}
                                    {...item}
                                />
                            </section>
                        )
                    })}
                </div>}
        </Container>
    )
}
