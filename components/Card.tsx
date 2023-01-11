import React from 'react'
import { NextPage } from 'next'
import Image from 'next/image'
import { IPizza } from 'types'

interface IProp {
  card: IPizza;
}

const Card: NextPage<IProp> = ({ card }) => {
  const {imageUrl, size, raiting, types, title, description, price} = card

  console.log(imageUrl)
  return (
    <div className="flex flex-col w-[300px] border-2 rounded-lg border-gray-200 p-5 bg-white">
      <div className="flex justify-center">
        <Image 
          src={`${imageUrl}`}
          width={300}
          height={300}
          className=""
          alt="pizza product"
        />
      </div>
      <h2 className="font-bold text-xl">{title}</h2>
      <p className="max-h-[4.5rem] overflow-hidden">
        {description}
      </p>
      <div className="flex justify-between mt-3 items-center">
        <div className="font-semibold text-semibold">
          {`from ${price} $`}
        </div>
        <button
          className="px-4 py-1 text-md font-semibold flex items-center bg-[#ff6c17] rounded-full text-white hover:bg-[#ff6c17aa]"
          type='button'
          onClick={()=> {}}
        >
          Choose
        </button>
      </div>
    </div>
  )
}

export default Card