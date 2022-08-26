import { CartItem } from '../@types/cart'

export enum ActionTypes {
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
  REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
}

export type CartState = {
  cart: CartItem[]
}

export function cartReducer(state: CartState, action: any): CartState {
  const isAlreadyOnCart = state.cart
    .map((item) => item.id)
    .includes(action.payload.id)
  const currentItem = state.cart.filter(
    (cartItem) => cartItem.id === action.payload.id,
  )
  switch (action.type) {
    case ActionTypes.ADD_ITEM_TO_CART:
      if (isAlreadyOnCart) {
        return {
          ...state,
          cart: state.cart.map((item) => {
            if (item.id === action.payload.id) {
              return {
                ...item,
                quantity: item.quantity + 1,
              }
            } else {
              return item
            }
          }),
        }
      } else {
        action.payload.quantity = 1
        return { ...state, cart: [...state.cart, action.payload] }
      }
    case ActionTypes.REMOVE_ITEM_FROM_CART:
      if (isAlreadyOnCart && currentItem[0].quantity > 1) {
        return {
          ...state,
          cart: state.cart.map((item) => {
            if (item.id === action.payload.id) {
              return {
                ...item,
                quantity: item.quantity - 1,
              }
            }
            return item
          }),
        }
      } else {
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload.id),
        }
      }
    default:
      return state
  }
}
