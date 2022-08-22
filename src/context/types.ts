export interface DataType {
    id: number
    title: string
    img: string
    price: number
    description: string
    category: number
    rating: number
    quantity: number
}

export interface MainReducerStateType {
    category: number
    quantity: number
    menuData: DataType[]
    cartItemsId: number[]
    isLoading: boolean
}

export enum MainActionEnum {
    SET_MENU_DATA = 'SET_MENU_DATA',
    SET_FILTERED_MENU_DATA = 'SET_FILTERED_MENU_DATA',
    ADD_ITEM_TO_CARD = 'ADD_ITEM_TO_CARD',
    REMOVE_ITEM_FROM_CARD = 'REMOVE_ITEM_FROM_CARD',
    SET_ITEMS_QUANTITY = 'SET_ITEMS_QUANTITY',
    ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
    REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
    CLEAR_CARD_ITEMS = 'CLEAR_CARD_ITEMS',
    CLEAR_CART_ITEMS = 'CLEAR_CART_ITEMS',
    SET_IS_LOADING = 'SET_IS_LOADING',
}

export interface SetMenuDataActionType {
    type: MainActionEnum.SET_MENU_DATA
    payload: DataType[]
}

export interface SetFilteredMenuDataActionType {
    type: MainActionEnum.SET_FILTERED_MENU_DATA
    payload: DataType[]
}

export interface AddCardItemsActionType {
    type: MainActionEnum.ADD_ITEM_TO_CARD
    payload: number
}

export interface RemoveCardItemsActionType {
    type: MainActionEnum.REMOVE_ITEM_FROM_CARD
    payload: number
}

export interface SetCartItemsQuantityActionType {
    type: MainActionEnum.SET_ITEMS_QUANTITY
}

export interface AddItemToCartActionType {
    type: MainActionEnum.ADD_ITEM_TO_CART
    payload: number
}

export interface RemoveItemTFromCartActionType {
    type: MainActionEnum.REMOVE_ITEM_FROM_CART
    payload: number
}

export interface ClearCardItemsActionType {
    type: MainActionEnum.CLEAR_CARD_ITEMS
    payload: number
}

export interface ClearCartItemsActionType {
    type: MainActionEnum.CLEAR_CART_ITEMS
}

export interface SetIsLoadingActionType {
    type: MainActionEnum.SET_IS_LOADING
    payload: boolean
}

export type MainActionType =
    SetMenuDataActionType
    | SetFilteredMenuDataActionType
    | AddCardItemsActionType
    | RemoveCardItemsActionType
    | SetCartItemsQuantityActionType
    | AddItemToCartActionType
    | RemoveItemTFromCartActionType
    | ClearCardItemsActionType
    | ClearCartItemsActionType
    | SetIsLoadingActionType
