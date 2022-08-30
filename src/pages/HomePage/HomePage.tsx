import { ChangeEvent, useContext, useEffect, useRef, useState } from "react"
import { Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { ButtonComponent } from "../../components/ButtonComponent/ButtonComponent"
import { CardComponent } from "../../components/CardComponent/CardComponent"
import { CartComponent } from "../../components/CartComponent/CartComponent"
import { SpinnerComponent } from "../../components/SpinnerComponent/SpinnerComponent"
import { TitleComponent } from "../../components/TitleComponent/TitleComponent"
import { AppContext } from "../../context/AppContextProvider"
import { useInnerWidth } from "../../hooks/useInnerWidth"
import styles from './HomePage.module.css'
var qs = require('qs')

export const HomePage = () => {
    const [sortedBy, setSortedBy] = useState<string>('default')
    const [menuCategory, setMenuCategory] = useState<number>(0)
    const isMounted = useRef<boolean>(false)

    const navigate = useNavigate()

    const innerWidth = useInnerWidth()

    const {
        menuData,
        searchData,
        isLoading,
        getMenuData,
        addCardItem,
        removeCardItem,
        addItemToCart,
    } = useContext(AppContext)

    useEffect(() => {
        getMenuData(menuCategory, sortedBy, searchData)
    }, [menuCategory, searchData, sortedBy, getMenuData])

    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1))
            setSortedBy(params.sorted_by)
            setMenuCategory(Number(params.menu_category))
        }
    }, [])

    useEffect(() => {
        if (isMounted.current) {
            const queryString = qs.stringify({
                menu_category: menuCategory,
                sorted_by: sortedBy,
            })
            navigate(`?${queryString}`)
        }
        isMounted.current = true
    }, [menuCategory, sortedBy, navigate])

    const btnMenuList = ['First menu', 'Second menu', 'Third menu']
    const sortList = ['default', 'price', 'rating']

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
                : searchData && menuData.length === 0
                    ? <div className='text-center text-muted fs-4'>Nothing was found</div>
                    : <div className={`pb-5 ${styles.grid}`}>
                        {menuData.map(item => {
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
