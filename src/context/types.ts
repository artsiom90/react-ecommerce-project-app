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
    cartItemsId: number[],
    filteredMenuData: DataType[]
}

export enum MainActionEnum {
    SET_MENU_DATA = 'SET_MENU_DATA',
    SET_FILTERED_MENU_DATA = 'SET_FILTERED_MENU_DATA',
    SET_CATEGORY = 'SET_CATEGORY',
    ADD_ITEM_TO_CARD = 'ADD_ITEM_TO_CARD',
    REMOVE_ITEM_FROM_CARD = 'REMOVE_ITEM_FROM_CARD',
    SET_ITEMS_QUANTITY = 'SET_ITEMS_QUANTITY',
    ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
    REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
    CLEAR_CARD_ITEMS = 'CLEAR_CARD_ITEMS',
}

export interface SetMenuDataActionType {
    type: MainActionEnum.SET_MENU_DATA
    payload: DataType[]
}

export interface SetFilteredMenuDataActionType {
    type: MainActionEnum.SET_FILTERED_MENU_DATA
    payload: DataType[]
}

export interface SetCategoryActionType {
    type: MainActionEnum.SET_CATEGORY
    payload: number
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

export type MainActionType =
    SetMenuDataActionType
    | SetFilteredMenuDataActionType
    | SetCategoryActionType
    | AddCardItemsActionType
    | RemoveCardItemsActionType
    | SetCartItemsQuantityActionType
    | AddItemToCartActionType
    | RemoveItemTFromCartActionType
    | ClearCardItemsActionType
