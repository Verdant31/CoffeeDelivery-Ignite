import { createContext, ReactNode, useState } from 'react'
import { CartItem } from '../@types/cart'

type Order = {
  address: {
    cep: string
    street: string
    number: string
    complement?: string
    district: string
  }
  paymentType?: 'Cartão de crédito' | 'Cartão de Crédito' | 'Dinheiro'
  items?: CartItem[]
}

interface OrderContextProps {
  order: Order | undefined
}

interface OrderContextProviderProps {
  children: ReactNode
}
const OrderContext = createContext({} as OrderContextProps)

export function OrderContextProvider(props: OrderContextProviderProps) {
  const [order, setOrder] = useState<Order>()

  return (
    <OrderContext.Provider value={{ order }}>
      {props.children}
    </OrderContext.Provider>
  )
}
