import React, { SetStateAction } from 'react'
import { useId } from "react-id-generator";

interface IProps {
  doughType: ['classic', 'thin'],
  sizes: number[],
  onSelectDough: (val: string) => void,
  onSelectSize: (val: number) => void,
}

const Select = ({doughType, sizes, onSelectDough, onSelectSize}: IProps) => {
  const doughList = useId(2, "dough");
  const idList = useId(3, "size");

  return (
    <div className="flex flex-col my-2">
      <ul className="inline-flex items-center relative h-10 p-1 space-x-1 bg-gray-200 rounded-md font-semibold text-blue-600 ">
        {doughType.map((d, i) => 
          <li className="relative w-full" key={i}>
            <input className="sr-only peer" type="radio" value={d} name="dough" id={doughList[i]} onChange={(e) => onSelectDough(e.target.value)}/>
            <label className="capitalize flex justify-center w-full py-1 px-2 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-teal-500 peer-checked:ring-2 peer-checked:border-transparent" htmlFor={doughList[i]}>
              {d}
            </label>
          </li>
        )}
      </ul>
      <ul className="inline-flex items-center relative h-10 p-1 space-x-1 bg-gray-200 rounded-md font-semibold text-blue-600 ">
        {sizes.map((size, i) => <li className="relative w-full" key={i}>
          <input className="sr-only peer" type="radio" value={size} name="size" id={idList[i]} onChange={(e) => {console.log("target: ", typeof e.target.value);  return onSelectSize(+e.target.value)}}/>
          <label className="flex justify-center w-full py-1 px-2 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent" htmlFor={idList[i]}>
            {size} cm
          </label>
        </li>)}
      </ul>
    </div>
  )
}

export default Select