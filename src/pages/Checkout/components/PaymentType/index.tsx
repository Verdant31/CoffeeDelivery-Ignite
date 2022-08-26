import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import {
  PaymentTypeContainer,
  TitleContainer,
  PaymentOptionsContainer,
} from './styles'

export function PaymentType() {
  return (
    <PaymentTypeContainer>
      <TitleContainer>
        <CurrencyDollar size={22} color="#8047F8" />
        <div>
          <p>Endereço de Entrega</p>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </TitleContainer>
      <PaymentOptionsContainer>
        <button>
          <CreditCard size={16} color="#8047F8" />
          <p>CARTÃO DE CRÉDITO</p>
        </button>
        <button>
          <Bank size={16} color="#8047F8" />
          <p>CARTÃO DE DÉBITO</p>
        </button>
        <button>
          <Money size={16} color="#8047F8" />
          <p>DINHEIRO</p>
        </button>
      </PaymentOptionsContainer>
    </PaymentTypeContainer>
  )
}
