import { DataType, MainActionEnum } from "./types"

export const mainReducerActions = {
    setMenuData: (payload: DataType[]) => ({ type: MainActionEnum.SET_MENU_DATA, payload }),
    setFilteredMenuData: (payload: DataType[]) => ({ type: MainActionEnum.SET_FILTERED_MENU_DATA, payload }),
    addCardItems: (payload: number) => ({ type: MainActionEnum.ADD_ITEM_TO_CARD, payload }),
    removeCardItems: (payload: number) => ({ type: MainActionEnum.REMOVE_ITEM_FROM_CARD, payload }),
    setCartItemsQuantity: () => ({ type: MainActionEnum.SET_ITEMS_QUANTITY }),
    addItemToCart: (payload: number) => ({ type: MainActionEnum.ADD_ITEM_TO_CART, payload }),
    removeItemFromCart: (payload: number) => ({ type: MainActionEnum.REMOVE_ITEM_FROM_CART, payload }),
    clearCardItems: (payload: number) => ({ type: MainActionEnum.CLEAR_CARD_ITEMS, payload }),
    clearCartItems: () => ({ type: MainActionEnum.CLEAR_CART_ITEMS }),
    setIsLoading: (payload: boolean) => ({ type: MainActionEnum.SET_IS_LOADING, payload }),
}
