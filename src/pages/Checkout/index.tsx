// Contexts
import { useCart } from "../../contexts/CartContext";
// Components
import { AddressForm } from "./components/AddressForm";
import { CheckoutCoffeCard } from "./components/CheckoutCoffeCard";
import { CheckoutInfo } from "./components/CheckoutInfo";
import { PaymentType } from "./components/PaymentType";
// Styles
import {
  AddressContainer,
  CartContainer,
  Container,
  SubmitOrderButton,
  AddressFormContainer,
  FormInput,
  FormOptionalInput,
  WrapInputs,
} from "./styles";
// Form
import { FormProvider, useForm } from "react-hook-form";
// Hooks
import { useDeliveryFee } from "../../hooks/useDeliveryFee";
import { useState } from "react";
import { HeaderForm } from "./components/HeaderForm";
import { Order, useOrder } from "../../contexts/OrderContext";
import { useNavigate } from "react-router-dom";

export type PaymentOptions =
  | "Cartão de Crédito"
  | "Cartão de Débito"
  | "Dinheiro";
interface NewOrderFormData {
  number: string;
  street: string;
  district: string;
  city: string;
  cep: string;
  uf: string;
  complement: string;
}

export function Checkout() {
  const navigate = useNavigate();
  const [selectedPaymentType, setSelectedPaymentType] =
    useState<PaymentOptions>();
  const [hasFocus, setHasFocus] = useState(false);

  const { register, handleSubmit, watch } = useForm<NewOrderFormData>({
    defaultValues: {
      number: "",
      street: "",
      district: "",
      city: "",
      cep: "",
      uf: "",
    },
  });

  const { cart } = useCart();
  const price = useDeliveryFee(cart);
  const { submitOrder } = useOrder();

  function handleSubmitOrder(data: NewOrderFormData) {
    const { cep, uf, city, complement, street, number, district } = data;
    const order: Order = {
      address: { cep, uf, city, complement, street, number, district },
      items: cart,
      paymentType: selectedPaymentType,
    };
    submitOrder(order);
    navigate("/confirmedOrder", { replace: true });
  }
  function handleUpdatePaymentType(option: PaymentOptions) {
    setSelectedPaymentType(option);
  }
  const requiredFields = watch([
    "number",
    "street",
    "district",
    "city",
    "cep",
    "uf",
  ]);
  const allRequiredFieldsAreFilled =
    requiredFields.filter((f) => f).length >= 6 &&
    true &&
    selectedPaymentType !== undefined;

  return (
    <Container onSubmit={handleSubmit(handleSubmitOrder)}>
      <section>
        <AddressContainer>
          <h1>Complete seu pedido</h1>
          <AddressFormContainer>
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
        </AddressContainer>
        <PaymentType handleChangePaymentType={handleUpdatePaymentType} />
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
            type="submit"
          >
            CONFIRMAR PEDIDO
          </SubmitOrderButton>
        </CartContainer>
      </section>
    </Container>
  );
}
