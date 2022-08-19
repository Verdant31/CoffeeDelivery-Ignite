import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  Container,
  IconContainer,
  OrderInfoContainer,
  TextContainer,
  Title,
} from './styles'

export function ConfirmedOrder() {
  return (
    <Container>
      <section>
        <div>
          <Title>Uhu! Pedido confirmado </Title>
          <p>Agora é só aguardar que logo o café chegará até você </p>
        </div>
        <OrderInfoContainer>
          <TextContainer>
            <IconContainer bgColor="purple">
              <MapPin color="#fff" weight="fill" />
            </IconContainer>
            <p>
              Entrega em <span> Rua João Daniel Martinelli, 102</span>
              <p>Farrapos - Porto Alegre, RS</p>
            </p>
          </TextContainer>
          <TextContainer>
            <IconContainer bgColor="yellow">
              <Timer color="#fff" weight="fill" />
            </IconContainer>
            <p>
              <p>Previsão de entrega</p>
              <span>20 min - 30 min</span>
            </p>
          </TextContainer>
          <TextContainer>
            <IconContainer bgColor="darkYellow">
              <CurrencyDollar color="#fff" weight="fill" />
            </IconContainer>
            <p>
              <p>Pagamento na entrega</p>
              <span>Cartão de Crédito</span>
            </p>
          </TextContainer>
        </OrderInfoContainer>
      </section>
      <section>
        <img src="motorcycle.svg" alt="Um homem dirigindo uma moto" />
      </section>
    </Container>
  )
}
