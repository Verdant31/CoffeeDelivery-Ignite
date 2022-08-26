// Contexts
import { useCart } from '../../contexts/CartContext'
// Components
import { AddressForm } from './components/AddressForm'
import { CheckoutCoffeCard } from './components/CheckoutCoffeCard'
import { CheckoutInfo } from './components/CheckoutInfo'
import { PaymentType } from './components/PaymentType'
// Styles
import {
  AddressContainer,
  CartContainer,
  Container,
  SubmitOrderButton,
} from './styles'
// Form
import { FormProvider, useForm } from 'react-hook-form'
// Hooks
import { useDeliveryFee } from '../../hooks/useDeliveryFee'

export function Checkout() {
  const methods = useForm()
  const { cart } = useCart()
  const price = useDeliveryFee(cart)

  function handleSubmitOrder(data: any) {
    console.log(data)
  }
  const requiredFields = methods.watch([
    'number',
    'street',
    'district',
    'city',
    'cep',
    'uf',
  ])
  const allRequiredFieldsAreFilled =
    requiredFields.filter((f) => f).length >= 6 && true

  return (
    <Container>
      <section>
        <AddressContainer>
          <h1>Complete seu pedido</h1>
          <FormProvider {...methods}>
            <AddressForm submitOrder={handleSubmitOrder} />
          </FormProvider>
        </AddressContainer>
        <PaymentType />
      </section>
      <section>
        <h1>Cafés selecionados</h1>
        <CartContainer>
          {cart?.map((item) => (
            <CheckoutCoffeCard item={item} key={item.id} />
          ))}
          <div>
            <CheckoutInfo title="Total de itens" value={price?.subTotal} />
            <CheckoutInfo title="Entrega" value={3.5} />
            <CheckoutInfo isTotal title="Total" value={price?.total} />
          </div>
          <SubmitOrderButton
            disabled={!allRequiredFieldsAreFilled}
            onClick={handleSubmitOrder}
          >
            CONFIRMAR PEDIDO
          </SubmitOrderButton>
        </CartContainer>
      </section>
    </Container>
  )
}
