import { useEffect, useState } from 'react'
import { CartItem } from '../../../../@types/cart'
import { CoffeeCard } from '../CoffeeCard'
import { CoffeesContainer } from './styles'

export function CoffeeList() {
  const [coffees, setCoffees] = useState<CartItem[]>([])

  useEffect(() => {
    const getCoffes = async () => {
      await fetch('http://localhost:3000/coffes')
        .then((res) => res.json())
        .then((data) => setCoffees(data))
    }
    getCoffes()
  }, [])

  return (
    <>
      <h1>Nossos cafés</h1>
      <CoffeesContainer>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.name} coffee={coffee} />
        ))}
      </CoffeesContainer>
    </>
  )
}
