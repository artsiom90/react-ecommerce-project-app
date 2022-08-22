import { DataType, MainActionEnum, MainActionType, MainReducerStateType } from "./types"

export const initialState = {
    category: 0,
    quantity: 0,
    menuData: [] as DataType[],
    cartItemsId: [] as number[],
    isLoading: false,
}

export const mainReducer = (state = initialState, action: any): MainReducerStateType => {
    switch (action.type) {
        case MainActionEnum.SET_MENU_DATA:
            return { ...state, menuData: action.payload }
        case MainActionEnum.SET_FILTERED_MENU_DATA:
            return { ...state, menuData: action.payload }
        case MainActionEnum.ADD_ITEM_TO_CARD:
            const newAddedCartItems = state.menuData.map(item => {
                if (item.id === action.payload && !item.quantity) {
                    return { ...item, quantity: 1 }
                }
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity + 1 }
                }
                return item
            })
            return { ...state, menuData: newAddedCartItems }
        case MainActionEnum.REMOVE_ITEM_FROM_CARD:
            const newRemovedCartItems = state.menuData.map(item => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity - 1 }
                }
                return item
            })
            return { ...state, menuData: newRemovedCartItems }
        case MainActionEnum.SET_ITEMS_QUANTITY:
            const itemsQuantity = state.menuData.reduce((acc, item) => {
                if (item.quantity) {
                    return acc + item.quantity
                }
                return acc
            }, 0)
            return { ...state, quantity: itemsQuantity }
        case MainActionEnum.ADD_ITEM_TO_CART:
            if (!state.cartItemsId.includes(action.payload)) {
                return { ...state, cartItemsId: [...state.cartItemsId, action.payload] }
            }
            return state
        case MainActionEnum.REMOVE_ITEM_FROM_CART:
            const newCartItems = state.cartItemsId.filter(item => item !== action.payload)
            return { ...state, cartItemsId: newCartItems }
        case MainActionEnum.CLEAR_CARD_ITEMS: {
            const newCardItems = state.menuData.map(item => {
                if (item.id === action.payload) {
                    item.quantity = 0
                }
                return item
            }, [])
            return { ...state, menuData: newCardItems }
        }
        case MainActionEnum.CLEAR_CART_ITEMS: {
            const newCardItems = state.menuData.map(item => {
                if (item.quantity > 0) {
                    item.quantity = 0
                }
                return item
            })
            return { ...state, menuData: newCardItems, cartItemsId: [] }
        }
        case MainActionEnum.SET_IS_LOADING: {
            return { ...state, isLoading: action.payload }
        }
        default:
            return state
    }
}
