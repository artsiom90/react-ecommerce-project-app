import { createContext, ReactNode, useCallback, useReducer } from "react"
import { API } from "../api/API"
import { initialState, appReducer } from "./appReducer"
import { appReducerActions } from "./appReducerActions"
import { DataType } from "./types"

interface AppContextProviderProps {
    children: ReactNode
}

interface AppContextProviderType {
    menuData: DataType[]
    searchData: string
    cartItems: DataType[] | undefined
    quantity: number
    isLoading: boolean
    getMenuData: (category: number, sortedBy: string, searchValue: string) => Promise<void>
    setSearchData: (value: string) => void
    setCardItemQuantity: (id: number) => void
    addCardItem: (item: number) => void
    addItemToCart: (id: number) => void
    removeItemFromCart: (id: number) => void
    increaseCartItemQuantity: (id: number) => void
    decreaseCartItemQuantity: (id: number) => void
    clearCardItems: (id: number) => void
    clearCartItems: () => void
}

export const AppContext = createContext({} as AppContextProviderType)

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
    const [state, dispatch] = useReducer(appReducer, initialState)

    const { menuData, searchData, quantity, cartItems, isLoading } = state

    const getMenuData = useCallback(async (category: number, sortedBy: string, searchValue: string) => {
        try {
            dispatch(appReducerActions.setIsLoading(true))
            const data = await API.fetchData(category, sortedBy, searchValue)
            dispatch(appReducerActions.setMenuData(data))
        } catch (error) {
            console.error(error)
        } finally {
            dispatch(appReducerActions.setIsLoading(false))
        }
    }, [])

    const setSearchData = (value: string) => {
        dispatch(appReducerActions.setSearchData(value))
    }

    const setCardItemQuantity = (payload: number) => {
        dispatch(appReducerActions.setCardItemQuantity(payload))
    }

    const addCardItem = (payload: number) => {
        dispatch(appReducerActions.addCardItems(payload))
        dispatch(appReducerActions.setCartItemsQuantity())
    }

    const addItemToCart = (payload: number) => {
        dispatch(appReducerActions.addItemToCart(payload))
        dispatch(appReducerActions.setCartItemsQuantity())
    }

    const increaseCartItemQuantity = (payload: number) => {
        dispatch(appReducerActions.increaseCartItemQuantity(payload))
        dispatch(appReducerActions.setCartItemsQuantity())
    }

    const decreaseCartItemQuantity = (payload: number) => {
        dispatch(appReducerActions.decreaseCartItemQuantity(payload))
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
        <AppContext.Provider value={{
            menuData,
            searchData,
            cartItems,
            quantity,
            isLoading,
            getMenuData,
            setSearchData,
            setCardItemQuantity,
            addCardItem,
            addItemToCart,
            increaseCartItemQuantity,
            decreaseCartItemQuantity,
            removeItemFromCart,
            clearCardItems,
            clearCartItems,
        }}>
            {children}
        </AppContext.Provider>
    )
}
