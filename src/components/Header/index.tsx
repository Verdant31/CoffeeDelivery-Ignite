// Icons
import { MapPin, ShoppingCart } from 'phosphor-react'
// React Router Dom
import { NavLink } from 'react-router-dom'
// Styles
import { Container, Location, InformationContainer } from './styles'

export function Header() {
  return (
    <Container>
      <img
        src="/logo.svg"
        alt='Um copo de café com "CoffeDelivery" escrito ao lado'
      />
      <InformationContainer>
        <Location>
          <MapPin size={21} weight="fill" color="#8047F8" />
          <p>Porto Alegre, RS</p>
        </Location>
        <NavLink to="/checkout">
          <ShoppingCart size={21} weight="fill" />
        </NavLink>
      </InformationContainer>
    </Container>
  )
}
