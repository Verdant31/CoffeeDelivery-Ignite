export type CartItem = {
  name: string
  price: number
  desc: string
  image: string
  tags: string[]
  id: number
  quantity: number
}

export type CartState = {
  cart: CartItem[]
}
