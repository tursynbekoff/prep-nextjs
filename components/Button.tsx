import React, { DetailedHTMLProps, forwardRef, ButtonHTMLAttributes } from 'react'

// eslint-disable-next-line react/display-name
const Button = forwardRef<
  HTMLButtonElement,
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement>
>(({ className, children, ...rest }, ref) => {
  return (
    <button 
      className={`border-2 border-gray-300 bg-white-600 rounded p-2 w-full font-bold hover:text-white focus:text-white  hover:bg-blue-500 focus:bg-blue-400 transition-colors disabled:bg-gray-500 ${className}`} 
      {...rest}
      ref={ref} 
    >
      {children}
    </button>
  )
})

export default Button