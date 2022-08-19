import { useEffect, useState } from 'react'
import { CoffeeCard } from '../CoffeeCard'
import { CoffeesContainer } from './styles'

export type Coffee = {
  name: 'string'
  price: number
  image: string
  desc: string
  tags: string[]
}

export function CoffeeList() {
  const [coffees, setCoffees] = useState<Coffee[]>([])

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
