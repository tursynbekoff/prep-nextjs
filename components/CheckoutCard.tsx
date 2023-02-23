import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useDispatch } from 'react-redux';

import { doughPriceDictionary, sizePriceDictionary } from 'common/constants';
import { onAddCalculate, onAddPizza } from 'store/pizza-slice';
import { IPizza } from 'types'

import Select from './Select';

const Card = ({pizza}: { pizza: any }) => {

  const {imageUrl, name, price, doughType, size, count} = pizza


  return (
    <div className="flex flex-wrap w-full justify-between items-center gap-4 mb-2 border-2 rounded-lg border-gray-200 p-5 bg-white relative" role="pizza-card" aria-label="card">
      <div className="flex ">
        <Image 
          src={`${imageUrl}`}
          width={56}
          height={56}
          className=""
          alt="pizza product"
        />
      </div>
      <h2 className="font-bold text-xl">{name}</h2>
      <div className="flex flex-col font-semibold justify-between items-center">
        <div>
          {`dough: ${doughType}`}
        </div>
        <div>
          {` ${size} cm`}
        </div>
        <div>
          {` ${price} $ `}
        </div>
        
      </div>

      <div className="flex gap-3 font-semibold justify-between items-center">
        <button onClick={()=> {}}>-</button>
        <div>
          {count}
        </div>
        <button onClick={()=> {}}>+</button>
        <button onClick={()=> {}}>del</button>
      </div>
    </div>
  )
}

export default Card