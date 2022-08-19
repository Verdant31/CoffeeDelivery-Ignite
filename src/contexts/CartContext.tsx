import { createContext, ReactNode, useReducer } from 'react'
import { CartItem } from '../@types/cart'
import { cartReducer } from '../reducers/cart'

interface CartContextProviderProps {
  children: ReactNode
}

type CartContextProps = {
  cart: CartItem[] | undefined
}
const CartContext = createContext({} as CartContextProps)

const initialState = {
  cart: [],
}

export function CartContextProvider(props: CartContextProviderProps) {
  const [state, dispatch] = useReducer(cartReducer, initialState)
  return (
    <CartContext.Provider value={{ cart: state.cart }}>
      {props.children}
    </CartContext.Provider>
  )
}
