import React from 'react'
import { useSelector } from 'react-redux'
import { claculatedPizzasSelector } from 'store/pizza-slice'

const Cart = () => {

  const totalSummary = useSelector(claculatedPizzasSelector)
  console.log("cart : ", totalSummary)
  return (
    <div className="">
      <h1>cart</h1>

      {Object.keys(totalSummary).length > 0 && 
      <>
        <p>
        <span>{`Your pizza ${ totalSummary.totalPizzaCount == 1 ? 'box' : 'boxes' }: `}</span> <span>{totalSummary.totalPizzaCount}</span>
        </p>
        <p>{`Total price: ${Math.round(totalSummary.totalPizzaPrice * 10) / 10} $`}</p>
      </>
      }
    </div>
  )
}

export default Cart