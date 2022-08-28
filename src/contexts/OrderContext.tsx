import { createContext, ReactNode, useContext, useState } from "react";
import { CartItem } from "../@types/cart";
import { PaymentOptions } from "../pages/Checkout";

export type Order = {
  address: {
    cep: string;
    street: string;
    number: string;
    complement?: string;
    district: string;
    city: string;
    uf: string;
  };
  paymentType?: PaymentOptions;
  items?: CartItem[];
};

interface OrderContextProps {
  order: Order | undefined;
  submitOrder: (order: Order) => void;
}

interface OrderContextProviderProps {
  children: ReactNode;
}
const OrderContext = createContext({} as OrderContextProps);

export function OrderContextProvider(props: OrderContextProviderProps) {
  const [order, setOrder] = useState<Order>();

  const submitOrder = (order: Order) => {
    setOrder(order);
  };

  return (
    <OrderContext.Provider value={{ order, submitOrder }}>
      {props.children}
    </OrderContext.Provider>
  );
}
export function useOrder() {
  const value = useContext(OrderContext);
  return value;
}
