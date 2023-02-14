import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useDispatch } from 'react-redux';

import { doughPriceDictionary, sizePriceDictionary } from 'common/constants';
import { onAddCalculate, onAddPizza } from 'store/pizza-slice';
import { IPizza } from 'types'

import Select from './Select';

const Card = ({pizza}: { pizza: IPizza }) => {
  const dispatch = useDispatch()

  const {imageUrl, name, description, price, doughType, sizes, id} = pizza

  const [dough, setDough] = useState<string>(doughType[0])
  const [size, setSize] = useState<number>(sizes[0])
  const [pizzaPrice, setPizzaPrice] = useState<number>(price)
  const [count, setCount] = useState<number>(0);

  function addPizza() {
    dispatch(onAddPizza({id, pizza: {name, price: pizzaPrice, doughType: dough, size}}))
    dispatch(onAddCalculate( {totalPizzaCount: 1, totalPizzaPrice: pizzaPrice}))
    
    setCount(count + 1)
  }

  useEffect(() => {
    const afterSelectPrice = sizePriceDictionary[size] + doughPriceDictionary[dough] + price

    setPizzaPrice(afterSelectPrice)
  }, [size, dough, price])

  return (
    <div className="flex flex-col w-[300px] border-2 rounded-lg border-gray-200 p-5 bg-white relative">
      <div className="flex justify-center">
        <Image 
          src={`${imageUrl}`}
          width={256}
          height={256}
          className=""
          alt="pizza product"
        />
      </div>
      <h2 className="font-bold text-xl">{name}</h2>
      <p className="grow">
        {description}
      </p>
      <Select doughType={doughType} sizes={sizes} onSelectDough={setDough} onSelectSize={setSize}/>
      <div className="flex font-semibold justify-between items-center">
        <div>
          {`from ${pizzaPrice} $`}
        </div>
        <button
          className="px-4 py-1 flex items-center bg-orange-500 rounded-full text-white hover:bg-orange-600"
          type='button'
          onClick={addPizza}
        >
          + Add
        </button>
      </div>
      {
        count > 0 && 
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-8 h-8 bg-red-500 rounded-full grid place-content-center text-white">
            {count}
          </div>
      }
    </div>
  )
}

export default Card