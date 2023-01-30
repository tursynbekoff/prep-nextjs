import React from 'react'
import { IPizza } from 'types'
import Card from './Card'
import { useDispatch, useSelector } from 'react-redux'

interface Pizzas {
  pizza: {
    list: IPizza[]
  }
} 
const Pizzas = () => {
  const list = useSelector((state : Pizzas) => state.pizza.list)

  return (
    <>
      {
        ((Array.isArray(list)) &&
          list.map((el: IPizza) => {
            return <Card key={el.id} card={el}/>
          })
        )
      }
    </>
  )
}

export default Pizzas