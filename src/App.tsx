// Styles
import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
// Components
import { BrowserRouter } from "react-router-dom";
// Router
import { Router } from "./routes";
import { CartContextProvider } from "./contexts/CartContext";
import { OrderContextProvider } from "./contexts/OrderContext";

export function App() {
  return (
    <OrderContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <ThemeProvider theme={defaultTheme}>
            <Router />
            <GlobalStyle />
          </ThemeProvider>
        </BrowserRouter>
      </CartContextProvider>
    </OrderContextProvider>
  );
}
