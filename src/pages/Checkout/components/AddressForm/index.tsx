import { HeaderForm } from '../HeaderForm'
import { AddressFormContainer, FormInput, WrapInputs } from './styles'

export function AddressForm() {
  return (
    <AddressFormContainer>
      <HeaderForm />
      <FormInput placeholder="CEP" width="12.5rem" />
      <FormInput placeholder="Rua" width="100%" />
      <WrapInputs>
        <FormInput placeholder="Numero" mr="12px" width="12.5rem" />
        <FormInput placeholder="Complemento" />
        <FormInput placeholder="Bairro" mr="12px" width="12.5rem" />
        <FormInput placeholder="Cidade" mr="12px" width="17.5rem" />
        <FormInput placeholder="UF" width="10%" />
      </WrapInputs>
    </AddressFormContainer>
  )
}
