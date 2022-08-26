import { CheckoutInfoContainer } from './styles'

interface CheckoutInfoProps {
  title: string
  value: number | undefined
  isTotal?: boolean
}

export function CheckoutInfo({ title, value, isTotal }: CheckoutInfoProps) {
  return (
    <CheckoutInfoContainer isTotal={isTotal}>
      <p>{title}</p>
      <p>R$ {value?.toFixed(2)}</p>
    </CheckoutInfoContainer>
  )
}
