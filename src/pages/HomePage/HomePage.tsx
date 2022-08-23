import { ChangeEvent, useContext, useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import { ButtonComponent } from "../../components/ButtonComponent/ButtonComponent"
import { CardComponent } from "../../components/CardComponent/CardComponent"
import { CartComponent } from "../../components/CartComponent/CartComponent"
import { SpinnerComponent } from "../../components/SpinnerComponent/SpinnerComponent"
import { TitleComponent } from "../../components/TitleComponent/TitleComponent"
import { MainContext } from "../../context/AppContextProvider"
import { useInnerWidth } from "../../hooks/useInnerWidth"
import styles from './HomePage.module.css'

export const HomePage = () => {
    const [sortedBy, setSortedBy] = useState<string>('id')
    const [menuCategory, setMenuCategory] = useState<number>(0)

    const {
        menuData,
        isLoading,
        getMenuData,
        addCardItem,
        removeCardItem,
        addItemToCart,
    } = useContext(MainContext)

    const innerWidth = useInnerWidth()

    const btnMenuList = ['First menu', 'Second menu', 'Third menu']
    const sortList = ['default', 'price', 'rating']

    useEffect(() => {
        getMenuData(menuCategory, sortedBy)
    }, [menuCategory, sortedBy, getMenuData])

    return (
        <Container fluid>
            <div className={`d-flex position-absolute mt-3 ${innerWidth < 768 && 'flex-column'}`}>
                <label
                    htmlFor='sort'
                    className='fs-6 text-muted text-center'
                >
                    Sort by:
                </label>
                <select
                    name='sort'
                    id='sort'
                    className={styles.sort}
                    onChange={(e: ChangeEvent<HTMLSelectElement>) => setSortedBy(e.target.value)}
                >
                    {sortList.map((item, index) => {
                        return (
                            <option
                                value={item}
                                key={index}
                                className={styles.option}
                            >
                                {item}
                            </option>
                        )
                    })}
                </select>
            </div>
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
                                isChecked={menuCategory === index ? true : false}
                                classes={[styles['menu-btn']]}
                                btnClick={() => setMenuCategory(index)}
                            />
                        )
                    })}
            </div>
            {isLoading
                ? <div className='mb-5'>
                    <SpinnerComponent
                        spinnerAnimation={'grow'}
                        spinnerVariant={'success'}
                    />
                </div>
                : <div className={`pb-5 ${styles.grid}`}>
                    {menuData.filter(item => item.category === menuCategory).map(item => {
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
