import { Minus, Plus } from 'phosphor-react'
import { CounterContainer } from './styles'

export function Counter() {
  return (
    <CounterContainer>
      <Minus size={14} weight="bold" />
      1
      <Plus size={14} weight="bold" />
    </CounterContainer>
  )
}
