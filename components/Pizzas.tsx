import React from 'react'
import { useSelector } from 'react-redux'

import { pizzasSelector } from '~store/pizza-slice'

import Card from './Card'
import Categories from './Categories'

const Pizzas = () => {
  const pizzas = useSelector(pizzasSelector)

  return (
    <>
      <Categories/>
      <div role="pizzas-wrapper" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {pizzas.map((pizza) => 
          <Card key={pizza.id} pizza={pizza}/>
        )}
      </div>
    </>
  )
}

export default Pizzas