import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { onVariantCount, listedProducts, sameVariantCount, selectProductCount } from 'store/pizza-slice'

import CheckoutCard from 'components/CheckoutCard'
import Navbar from 'components/Navbar'

const Checkout = () => {


  const dispatch = useDispatch();
  const orderedPizzas = useSelector(listedProducts)
  const pizzaCount = useSelector(sameVariantCount)
  const productCount = useSelector(selectProductCount)

  useEffect(() => {
    dispatch(onVariantCount(orderedPizzas));
  }, [dispatch, orderedPizzas, productCount]);

  return (
    <div className="p-5 flex flex-col gap-5">
      <Navbar />
      <div className="grid grid-cols-1 max-w-xl">
        {pizzaCount.map((pizza: any) => 
          <CheckoutCard key={pizza.productId} pizza={pizza}/>
        )}
      </div>
    </div>
  )
}

export default Checkout
