import { DataType, MainActionEnum, MainActionType, MainReducerStateType } from "./types"

export const initialState = {
    category: 0,
    quantity: 0,
    menuData: [] as DataType[],
    filteredMenuData: [] as DataType[],
}

export const mainReducer = (state = initialState, action: any): MainReducerStateType => {
    switch (action.type) {
        case MainActionEnum.SET_MENU_DATA:
            return { ...state, menuData: action.payload }
        case MainActionEnum.SET_FILTERED_MENU_DATA:
            return { ...state, filteredMenuData: action.payload }
        case MainActionEnum.SET_CATEGORY:
            return { ...state, category: action.payload }
        case MainActionEnum.ADD_ITEM_TO_CART:
            const newAddedCartItems = state.filteredMenuData.map(item => {
                if (item.id === action.payload && !item.quantity) {
                    return { ...item, quantity: 1 }
                }
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity + 1 }
                }
                return item
            })
            return { ...state, filteredMenuData: newAddedCartItems }
        case MainActionEnum.REMOVE_ITEM_FROM_CART:
            const newRemovedCartItems = state.filteredMenuData.map(item => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity - 1 }
                }
                return item
            })
            return { ...state, filteredMenuData: newRemovedCartItems }
        case MainActionEnum.SET_ITEMS_QUANTITY:
            const itemsQuantity = state.filteredMenuData.reduce((acc, item) => {
                if (item.quantity) {
                    return acc + item.quantity
                }
                return acc
            }, 0)
            return { ...state, quantity: itemsQuantity }
        default:
            return state
    }
}
