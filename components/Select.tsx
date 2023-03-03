import React, { useId } from 'react'

interface IProps {
  doughType: ['classic', 'thin'],
  sizes: [26, 30, 36],
  onSelectDough: (val: 'classic' | 'thin') => void,
  onSelectSize: (val: 26 | 30 | 36) => void,
}

const Select = ({
  doughType,
  sizes,
  onSelectDough,
  onSelectSize
}: IProps) => {
  const id = useId()

  return (
    <div className="flex flex-col gap-1 p-1 my-2 bg-gray-200 text-blue-600 font-semibold rounded-md">
      <ul className="flex gap-1">
        {doughType.map((dough, i) => (
          <li key={i} className="w-full">
            <input id={id + '' + dough} className="sr-only peer" type="radio" value={dough} name="dough" onChange={(e) => onSelectDough(e.target.value as 'classic' | 'thin')}/>
            <label htmlFor={id + '' + dough} className="capitalize flex justify-center w-full py-1 px-2 bg-white border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 peer-checked:ring-teal-500 peer-checked:ring-2 peer-checked:border-transparent">
              {dough}
            </label>
          </li>
        ))}
      </ul>
      <ul className="flex gap-1">
        {sizes.map((size, i) => (
          <li key={i} className="w-full">
            <input id={id + '' + size} className="sr-only peer" type="radio" value={size} name="size" onChange={(e) => onSelectSize(+e.target.value as 26 | 30 | 36)}/>
            <label htmlFor={id + '' + size} className="flex justify-center w-full py-1 px-2 bg-white border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent">
              {size} cm
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Select