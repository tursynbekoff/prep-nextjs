import React from 'react'
import Cart from './Cart'

const Navbar = () => {
  return (
    <div role="navigation" className="flex flex-nowrap w-[300px] md:w-full lg:w-full xl:w-[1280px] justify-between">
      <div>Logo</div>
      <Cart />
    </div>
  )
}

export default Navbar