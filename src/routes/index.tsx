import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { Checkout } from '../pages/Checkout'
import { ConfirmedOrder } from '../pages/ConfirmedOrder'
import { Home } from '../pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route element={<Home />} path="/" />
        <Route element={<Checkout />} path="/checkout" />
        <Route element={<ConfirmedOrder />} path="/confirmedOrder" />
      </Route>
    </Routes>
  )
}
