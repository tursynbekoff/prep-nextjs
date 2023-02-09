import React from 'react'
import Cart from './Cart'

const Navbar = () => {
  return (
    <div role="navigation" className="flex flex-nowrap w-[300px] md:w-[620px] lg:w-[932px] xl:w-[1248px] justify-between">
      <div>Logo</div>
      <Cart />
    </div>
  )
}

export default Navbar