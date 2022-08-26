// Icons
import { MapPin, ShoppingCart } from 'phosphor-react'
// React Router Dom
import { NavLink } from 'react-router-dom'
import { useCart } from '../../contexts/CartContext'
// Styles
import { Container, Location, InformationContainer } from './styles'

export function Header() {
  const { cart } = useCart()
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
          {cart && cart.length > 0 && <strong>{cart.length}</strong>}
          <ShoppingCart size={21} weight="fill" />
        </NavLink>
      </InformationContainer>
    </Container>
  )
}
