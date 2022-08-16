import { useContext, useEffect } from "react"
import { Stack } from "react-bootstrap"
import { MainContext } from "../context/MainContextProvider"

interface CartItemComponentProps {
  cartItemId: number
}

export const CartItemComponent = ({ cartItemId }: CartItemComponentProps) => {
  const {
    filteredMenuData,
    addCardItem,
    removeCardItem,
    removeItemFromCart,
    clearCardItems,
  } = useContext(MainContext)

  const item = filteredMenuData.find(item => item.id === cartItemId)

  const removeItem = () => {
    removeItemFromCart(cartItemId)
    clearCardItems(item?.id as number)
  }

  if (item?.quantity === 0) {
    removeItem()
  }

  const countCartItemPrice = (price: number) => {
    return price * (item?.quantity as number)
  }

  return (
    <Stack
      direction='horizontal'
      gap={2}
      className='d-flex justify-content-between'
    >
      <div className='d-flex align-items-center gap-2'>
        <img
          src={item?.img}
          alt='img'
          className='cart-img'
        />
        <div className='d-flex flex-column justify-content-between gap-1'>
          <div className='fs-5 lh-1'>{item?.title}</div>
          <div className='d-flex gap-4'>
            <div className='d-flex gap-2 align-items-center'>
              <svg
                onClick={() => addCardItem(item?.id as number)}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#319966"
                className="bi bi-plus-circle cart-btns"
                viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
              {item?.quantity && item?.quantity > 0 ? (
                <>
                  <span className='text-muted'>x{item?.quantity}</span>
                  <svg
                    onClick={() => removeCardItem(item?.id as number)}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#993332"
                    className="bi bi-dash-circle cart-btns"
                    viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                  </svg>
                </>
              ) : null}
            </div>
            <span className='cart-price'>{countCartItemPrice(item?.price as number)}$</span>
          </div>
        </div>
      </div>
      <button
        className='cart-remove-btn'
        onClick={removeItem}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="#993332"
          className="bi bi-x-square"
          viewBox="0 0 16 16">
          <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
      </button>
    </Stack>
  )
}
