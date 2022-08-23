import { DataType, AppActionEnum } from "./types"

export const appReducerActions = {
    setMenuData: (payload: DataType[]) => ({ type: AppActionEnum.SET_MENU_DATA, payload }),
    addCardItems: (payload: number) => ({ type: AppActionEnum.ADD_ITEM_TO_CARD, payload }),
    removeCardItems: (payload: number) => ({ type: AppActionEnum.REMOVE_ITEM_FROM_CARD, payload }),
    setCartItemsQuantity: () => ({ type: AppActionEnum.SET_ITEMS_QUANTITY }),
    addItemToCart: (payload: number) => ({ type: AppActionEnum.ADD_ITEM_TO_CART, payload }),
    removeItemFromCart: (payload: number) => ({ type: AppActionEnum.REMOVE_ITEM_FROM_CART, payload }),
    clearCardItems: (payload: number) => ({ type: AppActionEnum.CLEAR_CARD_ITEMS, payload }),
    clearCartItems: () => ({ type: AppActionEnum.CLEAR_CART_ITEMS }),
    setIsLoading: (payload: boolean) => ({ type: AppActionEnum.SET_IS_LOADING, payload }),
}
