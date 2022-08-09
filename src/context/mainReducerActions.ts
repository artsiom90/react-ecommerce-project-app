import { DataType, MainActionEnum } from "./types"

export const mainReducerActions = {
    setMenuData: (payload: DataType[]) => ({ type: MainActionEnum.SET_MENU_DATA, payload }),
    setFilteredMenuData: (payload: DataType[]) => ({ type: MainActionEnum.SET_FILTERED_MENU_DATA, payload }),
    setCategory: (payload: number) => ({ type: MainActionEnum.SET_CATEGORY, payload }),
    setCartItemsQuantity: (payload: number) => ({ type: MainActionEnum.SET_CART_ITEMS_QUANTITY, payload }),
    setBasketItemsQuantity: () => ({ type: MainActionEnum.SET_BASKET_ITEMS_QUANTITY }),
}
