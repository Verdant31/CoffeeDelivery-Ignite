import { useMemo } from 'react'
import { CartItem } from '../@types/cart'

type DeliveryFee = {
  subTotal: number
  total: number
}

export function useDeliveryFee(
  cart: CartItem[] | undefined,
): DeliveryFee | undefined {
  const deliveryFee = 3.5
  const price = useMemo(() => {
    return cart?.reduce(
      (acc, item, index) => {
        acc.subTotal += item.price * item.quantity
        if (index === cart.length - 1) acc.total = acc.subTotal + deliveryFee
        return acc
      },
      { subTotal: 0, total: 0 },
    )
  }, [cart])
  return price
}
