// Styles
import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
// Components
import { BrowserRouter } from 'react-router-dom'
// Router
import { Router } from './routes'
import { CartContextProvider } from './contexts/CartContext'

export function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
          <Router />
          <GlobalStyle />
        </ThemeProvider>
      </BrowserRouter>
    </CartContextProvider>
  )
}
