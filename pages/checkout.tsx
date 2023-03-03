import React from 'react'
import { useSelector } from 'react-redux'
import { addedProductsMappedSelector } from 'store/pizza-slice'

import { AddedPizza } from 'types'

import CheckoutCard from 'components/CheckoutCard'
import Navbar from 'components/Navbar'

const Checkout = () => {
  const pizzas = useSelector(addedProductsMappedSelector)

  return (
    <div className="p-5 flex flex-col gap-5">
      <Navbar />
      <div className="grid grid-cols-1 w-full">
        {pizzas.length > 0 ?
         pizzas.map((pizza: AddedPizza) => 
          <CheckoutCard key={pizza.productId} pizza={pizza}/>
        ) : 
          <h2 className="w-full">
            You have no pizzas :(
          </h2>
        }
      </div>
    </div>
  )
}

export default Checkout
