// Styles
import {
  BrandingItemsContainer,
  BrandingTitleContainer,
  MainContainer,
} from './styles'
// Icons
import { BrandingItems } from '../BrandingItems'

export function Banner() {
  return (
    <MainContainer>
      <section>
        <BrandingTitleContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffe Delivery você recebe seu café onde estiver, a qualquer
            hora.
          </p>
        </BrandingTitleContainer>
        <BrandingItemsContainer>
          <BrandingItems />
        </BrandingItemsContainer>
      </section>
      <section>
        <img src="/coffe.svg" alt="" />
      </section>
    </MainContainer>
  )
}
