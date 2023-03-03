import React from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { ArrowLongLeftIcon, ChartPieIcon } from '@heroicons/react/24/solid'

import { productsCountSelector } from 'store/pizza-slice'

import Cart from './Cart'

const Navbar = () => {
  const router = useRouter()

  const isCheckoutPage = router.pathname === '/checkout';
  const productCount = useSelector(productsCountSelector)

  return (
    <div role="navigation" className="flex flex-nowrap justify-between">
      {isCheckoutPage ? 
        <button type="button" onClick={() => router.back()}>
          <ArrowLongLeftIcon className=" w-10" />
        </button>
        : 
        <div aria-label="logo">
          <ChartPieIcon className="h-10 w-10" />
        </div>
      }
      {productCount > 0 && <Cart productCount={productCount}/>}
    </div>
  )
}

export default Navbar