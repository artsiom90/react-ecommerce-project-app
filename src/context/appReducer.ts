import { DataType, AppActionEnum, AppActionType, AppReducerStateType } from "./types"

export const initialState = {
    category: 0,
    quantity: 0,
    menuData: [] as DataType[],
    searchData: '',
    cartItems: [] as any,
    isLoading: false,
}

export const appReducer = (state = initialState, action: any): AppReducerStateType => {
    switch (action.type) {
        case AppActionEnum.SET_MENU_DATA:
            return { ...state, menuData: action.payload }
        case AppActionEnum.SET_SEARCH_DATA:
            return { ...state, searchData: action.payload }
        case AppActionEnum.ADD_ITEM_TO_CARD:
            const newAddedCardItems = state.menuData.map(item => {
                if (item.id === action.payload && !item.quantity) {
                    return { ...item, quantity: 1 }
                }
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity + 1 }
                }
                return item
            })
            return { ...state, menuData: newAddedCardItems }
        case AppActionEnum.REMOVE_ITEM_FROM_CARD:
            const newRemovedCardItems = state.menuData.map(item => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity - 1 }
                }
                return item
            })
            return { ...state, menuData: newRemovedCardItems }
        case AppActionEnum.SET_ITEMS_QUANTITY:
            const itemsQuantity = state.cartItems.reduce((acc: number, item: DataType) => {
                if (item.quantity) {
                    return acc + item.quantity
                }
                return acc
            }, 0)
            return { ...state, quantity: itemsQuantity }
        case AppActionEnum.ADD_ITEM_TO_CART:
            const item = state.menuData.find(item => item.id === action.payload)
            if (!state.cartItems.some((cartItem: DataType) => cartItem.id === item?.id)) {
                return { ...state, cartItems: [...state.cartItems, item] }
            } else {
                const newCartItems = state.cartItems.map((cartItem: DataType) => {
                    if (cartItem.id === item?.id) {
                        const newCartItem = {
                            ...cartItem,
                            quantity: cartItem.quantity + 1,
                        }
                        return newCartItem
                    }
                    return cartItem
                })
                return { ...state, cartItems: newCartItems }
            }
        case AppActionEnum.INCREASE_CART_ITEM_QUANTITY: {
            const newCartItems = state.cartItems.map((cartItem: DataType) => {
                if (cartItem.id === action.payload) {
                    const newCartItem = {
                        ...cartItem,
                        quantity: cartItem.quantity + 1,
                    }
                    return newCartItem
                }
                return cartItem
            })
            return { ...state, cartItems: newCartItems }
        }
        case AppActionEnum.DECREASE_CART_ITEM_QUANTITY: {
            const newCartItems = state.cartItems.map((cartItem: DataType) => {
                if (cartItem.id === action.payload) {
                    const newCartItem = {
                        ...cartItem,
                        quantity: cartItem.quantity - 1,
                    }
                    return newCartItem
                }
                return cartItem
            })
            return { ...state, cartItems: newCartItems }
        }
        case AppActionEnum.REMOVE_ITEM_FROM_CART: {
            const newCartItems = state.cartItems.filter((item: DataType) => item.id !== action.payload)
            return { ...state, cartItems: newCartItems }
        }
        case AppActionEnum.CLEAR_CARD_ITEMS: {
            const newCardItems = state.menuData.map(item => {
                if (item.id === action.payload) {
                    item.quantity = 0
                }
                return item
            }, [])
            return { ...state, menuData: newCardItems }
        }
        case AppActionEnum.CLEAR_CART_ITEMS: {
            const newCardItems = state.menuData.map(item => {
                if (item.quantity > 0) {
                    item.quantity = 0
                }
                return item
            })
            return { ...state, menuData: newCardItems, cartItems: [] }
        }
        case AppActionEnum.SET_IS_LOADING: {
            return { ...state, isLoading: action.payload }
        }
        default:
            return state
    }
}
