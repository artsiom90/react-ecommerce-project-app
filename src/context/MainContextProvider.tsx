import { createContext, ReactNode, useCallback, useReducer } from "react"
import { initialState, mainReducer } from "./mainReducer"
import { mainReducerActions } from "./mainReducerActions"
import { DataType } from "./types"

interface MainContextProviderProps {
    children: ReactNode
}

interface MainContextProviderType {
    category: number
    filteredMenuData: DataType[]
    cartData: DataType[]
    quantity: number
    fetchMenuData: () => void
    filterMenuData: () => void
    setMenuCategory: (index: number) => void
    addCardItem: (id: number) => void
    removeCardItem: (id: number) => void
    addItemToCart: (id: number) => void
}

export const MainContext = createContext({} as MainContextProviderType)

export const MainContextProvider = ({ children }: MainContextProviderProps) => {
    const [state, dispatch] = useReducer(mainReducer, initialState)

    const { category, quantity, menuData, cartData, filteredMenuData } = state

    const fetchMenuData = useCallback(() => {
        try {
            fetch('http://localhost:3001/meals')
                .then(response => response.json()
                    .then(menuData => dispatch(mainReducerActions.setMenuData(menuData))))
        } catch (error) {
            console.error(error)
        }
    }, [])

    const filterMenuData = useCallback(() => {
        const newData = menuData.filter(item => category === item.category)
        dispatch(mainReducerActions.setFilteredMenuData(newData))
    }, [category, menuData])

    const setMenuCategory = (payload: number) => {
        dispatch(mainReducerActions.setCategory(payload))
    }

    const addCardItem = (payload: number) => {
        dispatch(mainReducerActions.addCardItems(payload))
        dispatch(mainReducerActions.setCartItemsQuantity())
    }

    const removeCardItem = (payload: number) => {
        dispatch(mainReducerActions.removeCartItems(payload))
        dispatch(mainReducerActions.setCartItemsQuantity())
    }

    const addItemToCart = (payload: number) => {
        dispatch(mainReducerActions.addItemToCart(payload))
        dispatch(mainReducerActions.setCartItemsQuantity())
    }


    return (
        <MainContext.Provider value={{
            filteredMenuData,
            cartData,
            category,
            quantity,
            fetchMenuData,
            filterMenuData,
            setMenuCategory,
            addCardItem,
            removeCardItem,
            addItemToCart,
        }}>
            {children}
        </MainContext.Provider>
    )
}
