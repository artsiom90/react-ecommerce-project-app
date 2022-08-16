import { createContext, ReactNode, useCallback, useReducer } from "react"
import { initialState, mainReducer } from "./mainReducer"
import { mainReducerActions } from "./mainReducerActions"
import { DataType } from "./types"

interface MainContextProviderProps {
    children: ReactNode
}

interface MainContextProviderType {
    category: number
    menuData: DataType[]
    cartItemsId: number[]
    quantity: number
    fetchMenuData: () => void
    setMenuCategory: (index: number) => void
    addCardItem: (id: number) => void
    removeCardItem: (id: number) => void
    addItemToCart: (id: number) => void
    removeItemFromCart: (id: number) => void
    clearCardItems: (id: number) => void
    clearCartItems: () => void
}

export const MainContext = createContext({} as MainContextProviderType)

export const MainContextProvider = ({ children }: MainContextProviderProps) => {
    const [state, dispatch] = useReducer(mainReducer, initialState)

    const { category, quantity, menuData, cartItemsId } = state

    const fetchMenuData = useCallback(() => {
        try {
            fetch('http://localhost:3001/meals')
                .then(response => response.json()
                    .then(menuData => dispatch(mainReducerActions.setMenuData(menuData))))
        } catch (error) {
            console.error(error)
        }
    }, [])

    const setMenuCategory = (payload: number) => {
        dispatch(mainReducerActions.setCategory(payload))
    }

    const addCardItem = (payload: number) => {
        dispatch(mainReducerActions.addCardItems(payload))
        dispatch(mainReducerActions.setCartItemsQuantity())
    }

    const removeCardItem = (payload: number) => {
        dispatch(mainReducerActions.removeCardItems(payload))
        dispatch(mainReducerActions.setCartItemsQuantity())
    }

    const addItemToCart = (payload: number) => {
        dispatch(mainReducerActions.addItemToCart(payload))
        dispatch(mainReducerActions.setCartItemsQuantity())
    }

    const removeItemFromCart = (payload: number) => {
        dispatch(mainReducerActions.removeItemFromCart(payload))
        dispatch(mainReducerActions.setCartItemsQuantity())
    }

    const clearCardItems = (payload: number) => {
        dispatch(mainReducerActions.clearCardItems(payload))
        dispatch(mainReducerActions.setCartItemsQuantity())
    }

    const clearCartItems = () => {
        dispatch(mainReducerActions.clearCartItems())
        dispatch(mainReducerActions.setCartItemsQuantity())
    }

    return (
        <MainContext.Provider value={{
            menuData,
            cartItemsId,
            category,
            quantity,
            fetchMenuData,
            setMenuCategory,
            addCardItem,
            removeCardItem,
            addItemToCart,
            removeItemFromCart,
            clearCardItems,
            clearCartItems,
        }}>
            {children}
        </MainContext.Provider>
    )
}
