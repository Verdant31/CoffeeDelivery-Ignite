import { Trash } from 'phosphor-react'
import { CartItem } from '../../../../@types/cart'
import { Counter } from '../../../../components/Counter'
import { useCart } from '../../../../contexts/CartContext'
import { ActionsContainer, CheckoutCardContainer, PriceText } from './styles'

interface CheckoutCoffeeCardProps {
  item: CartItem
}

export function CheckoutCoffeCard({ item }: CheckoutCoffeeCardProps) {
  const { removeItemFromCart, addItemToCart } = useCart()

  const handleAddItemToCart = () => {
    addItemToCart(item)
  }
  const handleRemoveItemFromCart = () => {
    removeItemFromCart(item)
  }

  return (
    <CheckoutCardContainer>
      <img src={item.image} alt="Café Expresso" />
      <div>
        <p>{item.name}</p>
        <ActionsContainer>
          <Counter
            addItemToCart={handleAddItemToCart}
            removeItemFromCart={handleRemoveItemFromCart}
            value={item.quantity}
          />
          <button onClick={handleRemoveItemFromCart}>
            <Trash size={16} color="#8047F8" />
            <p>REMOVER</p>
          </button>
        </ActionsContainer>
      </div>
      <PriceText>R${item.price}</PriceText>
    </CheckoutCardContainer>
  )
}
