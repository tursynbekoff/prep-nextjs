import React, { useId } from 'react'
import { useDispatch } from 'react-redux';
import { pizzasCategorySelector } from '~store/pizza-slice';

import { CATEGORIES_CONFIG } from 'common/constants';

const Categories = () => {
  const dispatch = useDispatch();
  const id = useId()

  return (
    <div className="flex flex-col gap-1 p-1 my-2 bg-gray-200 text-blue-600 font-semibold rounded-md">
      <ul className="flex gap-1">
        {
          CATEGORIES_CONFIG.map(i =>
            <li key={i.key} className="w-full">
              <input id={id + '' + i.key} className="sr-only peer" type="radio" value={i.key} name="category" onChange={(e) => dispatch(pizzasCategorySelector(e.target.value))} />
              <label role={i.key} htmlFor={id + '' + i.key} className="capitalize flex justify-center w-full py-1 px-2 bg-white border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 peer-checked:ring-teal-500 peer-checked:ring-2 peer-checked:border-transparent">
                {i.title}
              </label>
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default Categories