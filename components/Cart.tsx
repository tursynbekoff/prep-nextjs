import React from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

import { totalPriceSelector } from '~store/pizza-slice'

const Cart = ({productCount}: {productCount: number}) => {
  const totalPrice = useSelector(totalPriceSelector)

  return (
    <Link href="/checkout" className="px-4 py-1 flex justify-between min-w-content items-center bg-orange-500 hover:bg-orange-600 rounded-full text-white">
      <span role="total-price">{Math.round(totalPrice * 10) / 10} $</span>
      <span>|</span>
      <div className="flex items-center gap-2">
        <ShoppingCartIcon className="h-4 w-4" />
        <span>{productCount}</span>
      </div>
    </Link>
  )
}

export default Cart