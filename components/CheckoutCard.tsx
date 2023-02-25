import React from 'react'
import Image from 'next/image'
import { useDispatch } from 'react-redux';
import { TrashIcon, PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/24/solid'
import { decrementItem, incrementItem, removeItem } from 'store/pizza-slice';
import { uniquePizza } from 'types';


const Card = ({pizza}: { pizza: uniquePizza }) => {

  const { imageUrl, name, price, doughType, size, count, productId} = pizza

  const dispatch = useDispatch();

  const handleIncrement = (productId: string) => {
    dispatch(incrementItem({ productId }));
  };

  const handleDecrement = (productId: string) => {
    dispatch(decrementItem({ productId }));
  };

 const handleRemove = (productId: string) => {
    dispatch(removeItem({ productId }));
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 w-full md:w-[616px] lg:w-[932px] xl:w-[1248px] items-center gap-4 mb-2 border-2 rounded-lg border-gray-200 p-5 bg-white relative" role="pizza-card" aria-label="card">
      <div className="flex ">
        <Image 
          src={`${imageUrl}`}
          width={80}
          height={80}
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

      <div className="flex gap-3 md:gap-5 font-semibold justify-between items-center">
        <button onClick={()=> handleDecrement(productId)}>
          <MinusCircleIcon className="h-5 w-5" />
        </button>
        <div>
          {count}
        </div>
        <button onClick={()=> handleIncrement(productId)}>
          <PlusCircleIcon className="h-5 w-5" />
        </button>
        <button onClick={()=> handleRemove(productId)}>
          <TrashIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}

export default Card