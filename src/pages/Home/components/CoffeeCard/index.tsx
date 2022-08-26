import { ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import { CartItem } from '../../../../@types/cart'
import { Counter } from '../../../../components/Counter'
import { useCart } from '../../../../contexts/CartContext'
import { CardContainer, CardFooter, TagsContainer, TagText } from './styles'

interface CoffeeCardProps {
  coffee: CartItem
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(coffee.quantity)
  const { addItemToCart, removeItemFromCart } = useCart()

  const handleAddItemToCart = () => {
    addItemToCart(coffee)
    setQuantity((oldState) => oldState + 1)
  }
  const handleRemoveItemFromCart = () => {
    if (quantity === 0) return
    removeItemFromCart(coffee)
    setQuantity((oldState) => oldState - 1)
  }
  return (
    <CardContainer>
      <img src={coffee.image} alt={coffee.name} />
      <TagsContainer>
        {coffee.tags.map((tag) => (
          <TagText key={tag}>{coffee.tags[0]}</TagText>
        ))}
      </TagsContainer>
      <h1>{coffee.name}</h1>
      <p>{coffee.desc}</p>
      <CardFooter>
        <span>
          R$ {''}
          <span>{coffee.price.toFixed(2)}</span>
        </span>
        <Counter
          removeItemFromCart={handleRemoveItemFromCart}
          addItemToCart={handleAddItemToCart}
          value={quantity}
        />
        <button onClick={handleAddItemToCart}>
          <ShoppingCart size={22} weight="fill" color="#fff" />
        </button>
      </CardFooter>
    </CardContainer>
  )
}
