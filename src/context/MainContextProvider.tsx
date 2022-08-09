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
    quantity: number
    fetchMenuData: () => void
    filterMenuData: () => void
    setMenuCategory: (index: number) => void
    addCartItem: (id: number) => void
    removeCartItem: (id: number) => void
}

export const MainContext = createContext({} as MainContextProviderType)

export const MainContextProvider = ({ children }: MainContextProviderProps) => {
    const [state, dispatch] = useReducer(mainReducer, initialState)

    const { category, quantity, menuData, filteredMenuData } = state

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

    const addCartItem = (payload: number) => {
        dispatch(mainReducerActions.addCartItems(payload))
        dispatch(mainReducerActions.setBasketItemsQuantity())
    }

    const removeCartItem = (payload: number) => {
        dispatch(mainReducerActions.removeCartItems(payload))
        dispatch(mainReducerActions.setBasketItemsQuantity())
    }

    return (
        <MainContext.Provider value={{
            filteredMenuData,
            category,
            quantity,
            fetchMenuData,
            filterMenuData,
            setMenuCategory,
            addCartItem,
            removeCartItem,
        }}>
            {children}
        </MainContext.Provider>
    )
}
