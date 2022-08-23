import { createContext, ReactNode, useCallback, useReducer } from "react"
import { API } from "../api/API"
import { initialState, appReducer } from "./appReducer"
import { appReducerActions } from "./appReducerActions"
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
    const [state, dispatch] = useReducer(appReducer, initialState)

    const { quantity, menuData, cartItemsId, isLoading } = state

    const getMenuData = useCallback(async (category: number, sortedBy: string) => {
        try {
            dispatch(appReducerActions.setIsLoading(true))
            const data = await API.fetchData(category, sortedBy)
            dispatch(appReducerActions.setMenuData(data))
        } catch (error) {
            console.error(error)
        } finally {
            dispatch(appReducerActions.setIsLoading(false))
        }
    }, [])

    const addCardItem = (payload: number) => {
        dispatch(appReducerActions.addCardItems(payload))
        dispatch(appReducerActions.setCartItemsQuantity())
    }

    const removeCardItem = (payload: number) => {
        dispatch(appReducerActions.removeCardItems(payload))
        dispatch(appReducerActions.setCartItemsQuantity())
    }

    const addItemToCart = (payload: number) => {
        dispatch(appReducerActions.addItemToCart(payload))
        dispatch(appReducerActions.setCartItemsQuantity())
    }

    const removeItemFromCart = (payload: number) => {
        dispatch(appReducerActions.removeItemFromCart(payload))
        dispatch(appReducerActions.setCartItemsQuantity())
    }

    const clearCardItems = (payload: number) => {
        dispatch(appReducerActions.clearCardItems(payload))
        dispatch(appReducerActions.setCartItemsQuantity())
    }

    const clearCartItems = () => {
        dispatch(appReducerActions.clearCartItems())
        dispatch(appReducerActions.setCartItemsQuantity())
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
