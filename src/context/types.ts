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
    SET_CART_ITEMS_QUANTITY = 'SET_CART_ITEMS_QUANTITY',
    SET_BASKET_ITEMS_QUANTITY = 'SET_BASKET_ITEMS_QUANTITY',
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

export interface SetCartItemsQuantityActionType {
    type: MainActionEnum.SET_CART_ITEMS_QUANTITY
    payload: number
}

export interface SetBasketItemsQuantityActionType {
    type: MainActionEnum.SET_BASKET_ITEMS_QUANTITY
}

export type MainActionType =
    SetMenuDataActionType
    | SetFilteredMenuDataActionType
    | SetCategoryActionType
    | SetCartItemsQuantityActionType
    | SetBasketItemsQuantityActionType
