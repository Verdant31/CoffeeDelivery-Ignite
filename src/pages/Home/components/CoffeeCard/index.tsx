import { ShoppingCart } from 'phosphor-react'
import { Counter } from '../../../../components/Counter'
import { Coffee } from '../CoffeeList'
import { CardContainer, CardFooter, TagsContainer, TagText } from './styles'

interface CoffeeCardProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  return (
    <CardContainer>
      <img src={coffee.image} alt={coffee.name} />
      <TagsContainer>
        {coffee.tags.map((tag) => (
          <TagText key={tag}>{coffee.tags[0]}</TagText>
        ))}
      </TagsContainer>
      <h1>{coffee.name}</h1>
      <p>{coffee.desc}</p>
      <CardFooter>
        <span>
          R$ {''}
          <span>{coffee.price.toFixed(2)}</span>
        </span>
        <Counter />
        <button>
          <ShoppingCart size={22} weight="fill" color="#fff" />
        </button>
      </CardFooter>
    </CardContainer>
  )
}
