import React from 'react'
import Cart from './Cart'

const Navbar = () => {
  return (
    <div role="navigation" className="flex flex-nowrap justify-between">
      <div>Logo</div>
      <Cart />
    </div>
  )
}

export default Navbar