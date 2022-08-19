import { MapPinLine } from 'phosphor-react'
import { Container } from './styles'

export function HeaderForm() {
  return (
    <Container>
      <MapPinLine size={22} color="#C47F17" />
      <div>
        <p>Endereço de Entrega</p>
        <p>Informe o endereço onde deseja receber seu pedido</p>
      </div>
    </Container>
  )
}
