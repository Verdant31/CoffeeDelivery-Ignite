import { AddressForm } from './components/AddressForm'
import { CheckoutCoffeCard } from './components/CheckoutCoffeCard'
import { CheckoutInfo } from './components/CheckoutInfo'
import { PaymentType } from './components/PaymentType'
import {
  AddressContainer,
  CartContainer,
  Container,
  SubmitOrderButton,
} from './styles'

export function Checkout() {
  return (
    <Container>
      <section>
        <AddressContainer>
          <h1>Complete seu pedido</h1>
          <AddressForm />
        </AddressContainer>
        <PaymentType />
      </section>
      <section>
        <h1>Cafés selecionados</h1>
        <CartContainer>
          <CheckoutCoffeCard />
          <CheckoutCoffeCard />
          <div>
            <CheckoutInfo title="Total de itens" value={29.7} />
            <CheckoutInfo title="Entrega" value={3.5} />
            <CheckoutInfo isTotal title="Total" value={33.5} />
          </div>
          <SubmitOrderButton>CONFIRMAR PEDIDO</SubmitOrderButton>
        </CartContainer>
      </section>
    </Container>
  )
}
