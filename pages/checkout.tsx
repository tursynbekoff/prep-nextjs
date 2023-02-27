import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUniqueProductList, listedProducts, sameVariantCount } from 'store/pizza-slice'

import CheckoutCard from 'components/CheckoutCard'
import Navbar from 'components/Navbar'
import { uniquePizza } from 'types'

const Checkout = () => {


  const dispatch = useDispatch();
  const orderedPizzas = useSelector(listedProducts)
  const pizzaCount = useSelector(sameVariantCount)

  useEffect(() => {
    dispatch(setUniqueProductList(orderedPizzas));
  }, [dispatch, orderedPizzas]);

  return (
    <div className="p-5 flex flex-col gap-5">
      <Navbar />
      <div className="grid grid-cols-1 w-full">
        {pizzaCount.length > 0 ?
         pizzaCount.map((pizza: uniquePizza) => 
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
