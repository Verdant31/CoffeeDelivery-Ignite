import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from 'react'
import { CartItem } from '../@types/cart'
import { ActionTypes, cartReducer } from '../reducers/cart'

interface CartContextProviderProps {
  children: ReactNode
}

type CartContextProps = {
  cart: CartItem[] | undefined
  addItemToCart: (item: CartItem) => void
  removeItemFromCart: (itemId: CartItem) => void
}
const CartContext = createContext({} as CartContextProps)

const initialState = {
  cart: [] as CartItem[],
}
export function CartContextProvider(props: CartContextProviderProps) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const addItemToCart = (item: CartItem) => {
    dispatch({ type: ActionTypes.ADD_ITEM_TO_CART, payload: item })
  }
  const removeItemFromCart = (item: CartItem) => {
    dispatch({ type: ActionTypes.REMOVE_ITEM_FROM_CART, payload: item })
  }
  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        addItemToCart,
        removeItemFromCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const value = useContext(CartContext)
  return value
}
