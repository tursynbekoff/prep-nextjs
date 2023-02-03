import React from 'react'
import { useId } from "react-id-generator";

const Select = () => {

  const doughList = useId(2, "dough");
  const idList = useId(3, "size");

  return (
    <div className="flex flex-col my-2">
      <ul className="inline-flex items-center relative h-10 p-1 space-x-1 bg-gray-200 rounded-md font-semibold text-blue-600 ">
        <li className="relative w-full">
          <input className="sr-only peer" type="radio" value="thin" name="dough" id={doughList[0]} />
          <label className="flex justify-center w-full py-1 px-2 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-teal-500 peer-checked:ring-2 peer-checked:border-transparent" htmlFor={doughList[0]}>
            Thin
          </label>
        </li>
        <li className="relative w-full">
          <input className="sr-only peer" type="radio" value="classic" name="dough" id={doughList[1]} />
          <label className="flex justify-center w-full py-1 px-2 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-violet-500 peer-checked:ring-2 peer-checked:border-transparent" htmlFor={doughList[1]}>
            Classic
          </label>
        </li>
      </ul>
      <ul className="inline-flex items-center relative h-10 p-1 space-x-1 bg-gray-200 rounded-md font-semibold text-blue-600 ">
        <li className="relative w-full">
          <input className="sr-only peer" type="radio" value={26} name="size" id={idList[0]} />
          <label className="flex justify-center w-full py-1 px-2 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent" htmlFor={idList[0]}>
            26 cm
          </label>
        </li>
        <li className="relative w-full">
          <input className="sr-only peer" type="radio" value={30} name="size" id={idList[1]} />
          <label className="flex justify-center w-full py-1 px-2 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-red-500 peer-checked:ring-2 peer-checked:border-transparent" htmlFor={idList[1]}>
            30 cm
          </label>
        </li>
        <li className="relative w-full">
          <input className="sr-only peer" type="radio" value={34} name="size" id={idList[2]} />
          <label className="flex justify-center w-full py-1 px-2 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-yellow-500 peer-checked:ring-2 peer-checked:border-transparent" htmlFor={idList[2]}>
            34 cm
          </label>
        </li>
      </ul>
    </div>
  )
}

export default Select