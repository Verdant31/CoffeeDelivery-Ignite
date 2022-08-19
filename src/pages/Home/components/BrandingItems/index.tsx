// Components
import { BrandingText } from '../BrandingText'
// Icons
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function BrandingItems() {
  return (
    <>
      <BrandingText
        icon={<ShoppingCart size={16} weight="fill" color="#fff" />}
        text="Compra simples e segura"
        bgColor="darkYellow"
      />
      <BrandingText
        icon={<Package size={16} weight="fill" color="#fff" />}
        text="Embalagem mantém o café intacto"
        bgColor="black"
      />
      <BrandingText
        icon={<Timer size={16} weight="fill" color="#fff" />}
        text="Entrega rápida e rastreada"
        bgColor="yellow"
      />
      <BrandingText
        icon={<Coffee size={16} weight="fill" color="#fff" />}
        text="O café chega fresquinho até você"
        bgColor="purple"
      />
    </>
  )
}
