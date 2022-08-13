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
    filteredMenuData: DataType[]
}

export enum MainActionEnum {
    SET_MENU_DATA = 'SET_MENU_DATA',
    SET_FILTERED_MENU_DATA = 'SET_FILTERED_MENU_DATA',
    SET_CATEGORY = 'SET_CATEGORY',
    ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
    REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
    SET_ITEMS_QUANTITY = 'SET_ITEMS_QUANTITY',
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

export interface AddCartItemsActionType {
    type: MainActionEnum.ADD_ITEM_TO_CART
    payload: number
}

export interface RemoveCartItemsActionType {
    type: MainActionEnum.REMOVE_ITEM_FROM_CART
    payload: number
}

export interface SetBasketItemsQuantityActionType {
    type: MainActionEnum.SET_ITEMS_QUANTITY
}

export type MainActionType =
    SetMenuDataActionType
    | SetFilteredMenuDataActionType
    | SetCategoryActionType
    | AddCartItemsActionType
    | RemoveCartItemsActionType
    | SetBasketItemsQuantityActionType
