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

export interface AppReducerStateType {
    category: number
    quantity: number
    menuData: DataType[]
    searchData: string
    cartItems: DataType[] | undefined
    isLoading: boolean
}

export enum AppActionEnum {
    SET_MENU_DATA = 'SET_MENU_DATA',
    SET_SEARCH_DATA = 'SET_SEARCH_DATA',
    ADD_ITEM_TO_CARD = 'ADD_ITEM_TO_CARD',
    REMOVE_ITEM_FROM_CARD = 'REMOVE_ITEM_FROM_CARD',
    SET_ITEMS_QUANTITY = 'SET_ITEMS_QUANTITY',
    ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
    INCREASE_CART_ITEM_QUANTITY = 'INCREASE_CART_ITEM_QUANTITY',
    DECREASE_CART_ITEM_QUANTITY = 'DECREASE_CART_ITEM_QUANTITY',
    REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
    CLEAR_CARD_ITEMS = 'CLEAR_CARD_ITEMS',
    CLEAR_CART_ITEMS = 'CLEAR_CART_ITEMS',
    SET_IS_LOADING = 'SET_IS_LOADING',
}

export interface SetMenuDataActionType {
    type: AppActionEnum.SET_MENU_DATA
    payload: DataType[]
}

export interface SetSearchDataActionType {
    type: AppActionEnum.SET_SEARCH_DATA
    payload: string
}

export interface AddCardItemsActionType {
    type: AppActionEnum.ADD_ITEM_TO_CARD
    payload: number
}

export interface RemoveCardItemsActionType {
    type: AppActionEnum.REMOVE_ITEM_FROM_CARD
    payload: number
}

export interface IncreaseCartItemQuantityActionType {
    type: AppActionEnum.INCREASE_CART_ITEM_QUANTITY
    payload: number
}

export interface DecreaseCartItemQuantityActionType {
    type: AppActionEnum.DECREASE_CART_ITEM_QUANTITY
    payload: number
}

export interface SetCartItemsQuantityActionType {
    type: AppActionEnum.SET_ITEMS_QUANTITY
}

export interface AddItemToCartActionType {
    type: AppActionEnum.ADD_ITEM_TO_CART
    payload: number
}

export interface RemoveItemFromCartActionType {
    type: AppActionEnum.REMOVE_ITEM_FROM_CART
    payload: number
}

export interface ClearCardItemsActionType {
    type: AppActionEnum.CLEAR_CARD_ITEMS
    payload: number
}

export interface ClearCartItemsActionType {
    type: AppActionEnum.CLEAR_CART_ITEMS
}

export interface SetIsLoadingActionType {
    type: AppActionEnum.SET_IS_LOADING
    payload: boolean
}

export type AppActionType =
    SetMenuDataActionType
    | SetSearchDataActionType
    | AddCardItemsActionType
    | RemoveCardItemsActionType
    | SetCartItemsQuantityActionType
    | AddItemToCartActionType
    | RemoveItemFromCartActionType
    | IncreaseCartItemQuantityActionType
    | DecreaseCartItemQuantityActionType
    | ClearCardItemsActionType
    | ClearCartItemsActionType
    | SetIsLoadingActionType
