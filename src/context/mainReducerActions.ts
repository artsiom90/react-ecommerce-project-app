import { DataType, MainActionEnum } from "./types"

export const mainReducerActions = {
    setMenuData: (payload: DataType[]) => ({ type: MainActionEnum.SET_MENU_DATA, payload }),
    setFilteredMenuData: (payload: DataType[]) => ({ type: MainActionEnum.SET_FILTERED_MENU_DATA, payload }),
    setCategory: (payload: number) => ({ type: MainActionEnum.SET_CATEGORY, payload }),
    addCartItems: (payload: number) => ({ type: MainActionEnum.ADD_CART_ITEMS, payload }),
    removeCartItems: (payload: number) => ({ type: MainActionEnum.REMOVE_CART_ITEMS, payload }),
    setBasketItemsQuantity: () => ({ type: MainActionEnum.SET_BASKET_ITEMS_QUANTITY }),
}
