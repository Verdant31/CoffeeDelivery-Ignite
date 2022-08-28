// React
import { useState } from "react";
// Components
import { HeaderForm } from "../HeaderForm";
// Styles
import {
  AddressFormContainer,
  FormInput,
  FormOptionalInput,
  WrapInputs,
} from "./styles";
// Form
import { useFormContext } from "react-hook-form";

interface AddressFormProps {
  submitOrder: (data: any) => void;
}

export function AddressForm({ submitOrder }: AddressFormProps) {
  return (
    <AddressFormContainer onSubmit={handleSubmit(submitOrder)}>
      <HeaderForm />
      <FormInput {...register("cep")} placeholder="CEP" width="12.5rem" />
      <FormInput {...register("street")} placeholder="Rua" width="100%" />
      <WrapInputs>
        <FormInput
          {...register("number")}
          placeholder="Numero"
          mr="12px"
          width="12.5rem"
        />
        <FormOptionalInput hasFocus={hasFocus}>
          <input
            {...register("complement")}
            onBlur={() => setHasFocus(false)}
            onFocus={() => setHasFocus(true)}
            placeholder="Complemento"
          />
          <i>Opcional</i>
        </FormOptionalInput>
        <FormInput
          {...register("district")}
          placeholder="Bairro"
          mr="12px"
          width="12.5rem"
        />
        <FormInput
          {...register("city")}
          placeholder="Cidade"
          mr="12px"
          width="17.5rem"
        />
        <FormInput {...register("uf")} placeholder="UF" width="10%" />
      </WrapInputs>
    </AddressFormContainer>
  );
}
