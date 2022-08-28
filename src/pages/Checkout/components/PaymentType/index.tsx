import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { PaymentOptions } from "../..";
import {
  PaymentTypeContainer,
  TitleContainer,
  PaymentOptionsContainer,
  PaymentTypeButton,
} from "./styles";

interface PaymentTypeProps {
  handleChangePaymentType: (option: PaymentOptions) => void;
}

export function PaymentType({ handleChangePaymentType }: PaymentTypeProps) {
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
        <PaymentTypeButton
          type="button"
          onClick={() => handleChangePaymentType("Cartão de Crédito")}
        >
          <CreditCard size={16} color="#8047F8" />
          <p>CARTÃO DE CRÉDITO</p>
        </PaymentTypeButton>
        <PaymentTypeButton
          type="button"
          onClick={() => handleChangePaymentType("Cartão de Débito")}
        >
          <Bank size={16} color="#8047F8" />
          <p>CARTÃO DE DÉBITO</p>
        </PaymentTypeButton>
        <PaymentTypeButton
          type="button"
          onClick={() => handleChangePaymentType("Dinheiro")}
        >
          <Money size={16} color="#8047F8" />
          <p>DINHEIRO</p>
        </PaymentTypeButton>
      </PaymentOptionsContainer>
    </PaymentTypeContainer>
  );
}
