import { createContext, ReactNode, useCallback, useReducer } from "react"
import { API } from "../api/API"
import { initialState, mainReducer } from "./mainReducer"
import { mainReducerActions } from "./mainReducerActions"
import { DataType } from "./types"

interface MainContextProviderProps {
    children: ReactNode
}

interface MainContextProviderType {
    menuData: DataType[]
    cartItemsId: number[]
    quantity: number
    isLoading: boolean
    getMenuData: (category: number, sortedBy: string) => Promise<void>
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

    const { quantity, menuData, cartItemsId, isLoading } = state

    const getMenuData = useCallback(async (category: number, sortedBy: string) => {
        try {
            dispatch(mainReducerActions.setIsLoading(true))
            const data = await API.fetchData(category, sortedBy)
            dispatch(mainReducerActions.setMenuData(data))
        } catch (error) {
            console.error(error)
        } finally {
            dispatch(mainReducerActions.setIsLoading(false))
        }
    }, [])

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
            quantity,
            isLoading,
            getMenuData,
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
