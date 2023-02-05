import React from 'react'
import { IPizza } from 'types'
import Card from './Card'
import { useSelector } from 'react-redux'
import { pizzasSelector } from 'store/pizza-slice'

const Pizzas = () => {
  const pizzas = useSelector(pizzasSelector)

  return (
    <>
      {pizzas.map((pizza: IPizza) => 
        <Card key={pizza.id} pizza={pizza}/>
      )}
    </>
  )
}

export default Pizzas