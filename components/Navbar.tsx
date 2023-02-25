import React from 'react'
import { useRouter } from 'next/router'
import { ArrowLongLeftIcon, ChartPieIcon } from '@heroicons/react/24/solid'
import Cart from './Cart'

const Navbar = () => {

  const router = useRouter()
  const isCheckoutPage = router.pathname === '/checkout';

  return (
    <div role="navigation" className="flex flex-nowrap justify-between">
      

      {isCheckoutPage ? 
        <button type="button" onClick={() => router.back()}>
          <ArrowLongLeftIcon className=" w-10" />
        </button>

        : <div>
          <ChartPieIcon className="h-10 w-10" />
        </div>
      }

      <Cart />
    </div>
  )
}

export default Navbar