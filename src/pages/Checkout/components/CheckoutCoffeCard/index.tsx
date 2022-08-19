import { Trash } from 'phosphor-react'
import { Counter } from '../../../../components/Counter'
import { ActionsContainer, CheckoutCardContainer, PriceText } from './styles'

export function CheckoutCoffeCard() {
  return (
    <CheckoutCardContainer>
      <img src="/coffees/Expresso.svg" alt="Café Expresso" />
      <div>
        <p>Expresso Tradicional</p>
        <ActionsContainer>
          <Counter />
          <button>
            <Trash size={16} color="#8047F8" />
            <p>REMOVER</p>
          </button>
        </ActionsContainer>
      </div>
      <PriceText>R$9.90</PriceText>
    </CheckoutCardContainer>
  )
}
