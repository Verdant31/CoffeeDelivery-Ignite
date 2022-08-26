import { Minus, Plus } from 'phosphor-react'
import { CounterContainer } from './styles'

interface CounterProps {
  value?: number
  addItemToCart: () => void
  removeItemFromCart: () => void
}

export function Counter({
  value = 0,
  addItemToCart,
  removeItemFromCart,
}: CounterProps) {
  return (
    <CounterContainer>
      <Minus onClick={removeItemFromCart} size={14} weight="bold" />
      {value}
      <Plus onClick={addItemToCart} size={14} weight="bold" />
    </CounterContainer>
  )
}
