import React from 'react'
import { useSelector } from 'react-redux'
import { calculatedPizzasSelector } from 'store/pizza-slice'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

const Cart = () => {
  const totalSummary = useSelector(calculatedPizzasSelector)

  return (
    <>
      {Object.keys(totalSummary).length > 0 && 
        <Link href="/checkout" className="px-4 py-1 flex justify-between w-32 items-center bg-orange-500 rounded-full text-white hover:bg-orange-600">
          <span>{`${Math.round(totalSummary.totalPizzaPrice * 10) / 10} $`}</span>
          <span>|</span>
          <div className="flex items-center gap-2">
            <ShoppingCartIcon className="h-4 w-4" />
            <span>{totalSummary.totalPizzaCount}</span>
          </div>
        </Link>
      }
    </>
  )
}

export default Cart