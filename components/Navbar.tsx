import React from 'react'
import { useRouter } from 'next/router'
import Cart from './Cart'

const Navbar = () => {

  const router = useRouter()
  const isCheckoutPage = router.pathname === '/checkout';

  return (
    <div role="navigation" className="flex flex-nowrap justify-between">
      

      {isCheckoutPage ? 
        <button type="button" onClick={() => router.back()}>
          back
        </button>

        : <div>Logo</div>
      }

      <Cart />
    </div>
  )
}

export default Navbar