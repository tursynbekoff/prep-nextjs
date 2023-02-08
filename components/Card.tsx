import React, { useState, useEffect } from 'react'
import { NextPage } from 'next'
import Image from 'next/image'
import { IPizza } from 'types'
import Select from './Select';
import { useDispatch, useSelector } from 'react-redux';
import { onAddCalculate, onAddPizza, selectedPizzasSelector } from 'store/pizza-slice';
import { doughPriceDictionary, sizePriceDictionary } from 'common/constants';


const Card = ({pizza}: { pizza: IPizza }) => {
  const dispatch = useDispatch()
  const {imageUrl, name, description, price, doughType, sizes, id} = pizza

  const [dough, setDough] = useState<string>(doughType[0])
  const [size, setSize] = useState<number>(sizes[0])
  const [pizzaPrice, setPizzaPrice] = useState<number>(price)
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const afterSelectPrice = sizePriceDictionary[size] + doughPriceDictionary[dough] + price

    setPizzaPrice(afterSelectPrice)
  }, [size, dough, price])


  const totalSummary = useSelector(selectedPizzasSelector)

  return (
    <div className="flex flex-col w-[300px] border-2 rounded-lg border-gray-200 p-5 bg-white">
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
      <p className="grow max-h-[4.5rem] overflow-hidden">
        {description}
      </p>
      <Select doughType={doughType} sizes={sizes} onSelectDough={setDough} onSelectSize={setSize}/>
      <div className="flex justify-between mt-3 items-center">
        <div className="font-semibold text-semibold">
          {`from ${pizzaPrice} $`}
        </div>
        <button
          className="px-4 py-1 text-md font-semibold flex items-center bg-[#ff6c17] rounded-full text-white hover:bg-[#ff6c17aa] active:bg-[#ff6c179a]"
          type='button'
          onClick={() => {
            dispatch(onAddPizza({id, pizza: {name, price: pizzaPrice, doughType: dough, size}}))
            setCount(count + 1)
            dispatch(onAddCalculate( {totalPizzaCount: 1, totalPizzaPrice: pizzaPrice}))
          }}
        >
          + Add
        </button>
      </div>
    </div>
  )
}

export default Card