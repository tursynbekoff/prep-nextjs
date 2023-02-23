import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { onVariantCount, listedProducts, sameVariantCount } from 'store/pizza-slice'

import CheckoutCard from 'components/CheckoutCard'
import Navbar from 'components/Navbar'

const Checkout = () => {


  const dispatch = useDispatch();
  const orderedPizzas = useSelector(listedProducts);
  const pizzaCount = useSelector(sameVariantCount);


  useEffect(() => {
    dispatch(onVariantCount(orderedPizzas));
  }, [dispatch, orderedPizzas]);


  console.log("checkout", orderedPizzas)


  return (
    <div className="p-5 flex flex-col gap-5">
      <Navbar />
      <div className="grid grid-cols-1 max-w-xl">
        {pizzaCount.map((pizza: any) => 
          <CheckoutCard key={pizza.id} pizza={pizza}/>
        )}
      </div>
    </div>
  )
}

export default Checkout
