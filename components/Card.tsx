import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useDispatch } from 'react-redux';

import { SIZE_PRICES, DOUGH_PRICES } from 'common/constants';
import { setProducts } from 'store/pizza-slice';
import { IPizza } from 'types'

import Select from './Select';

const Card = ({pizza: {
  imageUrl,
  name,
  description,
  price,
  doughType,
  sizes,
}}: { pizza: IPizza }) => {
  const dispatch = useDispatch()

  const [dough, setDough] = useState<'classic' | 'thin'>(doughType[0])
  const [size, setSize] = useState<26 | 30 | 36>(sizes[0])

  const [count, setCount] = useState<number>(0);

  function addPizza() {
    const finalPrice = price + SIZE_PRICES[size] + DOUGH_PRICES[dough]
    dispatch(setProducts({
      productId: `${name}-${size}-${dough}-${finalPrice}`,
      price: finalPrice, 
      doughType: dough, 
      size,
      name, 
      imageUrl, 
    }))
    
    setCount(count + 1)
  }

 
  return (
    <div className="relative flex flex-col w-[300px] border-2 rounded-lg border-gray-200 p-5" role="pizza-card">
      <Image 
        src={imageUrl}
        width="256"
        height="256"
        className="flex justify-center"
        alt="pizza product"
      />

      <h2 className="font-bold text-xl">{name}</h2>
      <p className="grow">{description}</p>
      
      <Select doughType={doughType} sizes={sizes} onSelectDough={setDough} onSelectSize={setSize}/>
      
      <div className="flex font-semibold justify-between items-center">
        <div>from {price + SIZE_PRICES[size] + DOUGH_PRICES[dough]} $</div>
        <button
          className="px-4 py-1 grid place-content-center bg-orange-500 hover:bg-orange-600 rounded-full text-white"
          role='button'
          onClick={addPizza}
        >
          + Add
        </button>
      </div>
      {
        count > 0 && 
          <div data-testid="count" className="absolute top-0 right-0 -mt-4 -mr-4 w-8 h-8 bg-red-500 rounded-full grid place-content-center text-white">
            {count}
          </div>
      }
    </div>
  )
}

export default Card