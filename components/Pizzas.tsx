import React from 'react'
import { useSelector } from 'react-redux'

import { pizzasSelector } from 'store/pizza-slice'

import Card from './Card'

const Pizzas = () => {
  const pizzas = useSelector(pizzasSelector)

  return (
    <div role="pizzas-wrapper">
      {pizzas.map((pizza) => 
        <Card key={pizza.id} pizza={pizza}/>
      )}
    </div>
  )
}

export default Pizzas