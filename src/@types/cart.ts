export type CartItem = {
  name: string
  price: number
  desc: string
  image: string
  tags: string
}

export type CartState = {
  cart: CartItem[]
}
