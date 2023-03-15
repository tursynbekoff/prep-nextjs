import React, { useId } from 'react'
import { useDispatch } from 'react-redux';
import { pizzasCategorySelector } from '~store/pizza-slice';

const Categories = () => {
  const dispatch = useDispatch();
  const id = useId()

  return (
    <div className="flex flex-col gap-1 p-1 my-2 bg-gray-200 text-blue-600 font-semibold rounded-md">
      <ul className="flex gap-1">
          <li className="w-full">
            <input id={id + '' + 'all'} className="sr-only peer" type="radio" value="all" name="category" defaultChecked onChange={(e) => dispatch(pizzasCategorySelector(e.target.value))} />
            <label role="all" htmlFor={id + '' + 'all'} className="capitalize flex justify-center w-full py-1 px-2 bg-white border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 peer-checked:ring-teal-500 peer-checked:ring-2 peer-checked:border-transparent">
              All
            </label>
          </li>
          <li className="w-full">
            <input id={id + '' + 'spicy'} className="sr-only peer" type="radio" value="spicy" name="category" onChange={(e) => dispatch(pizzasCategorySelector(e.target.value))}/>
            <label role="spicy" htmlFor={id + '' + 'spicy'} className="capitalize flex justify-center w-full py-1 px-2 bg-white border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 peer-checked:ring-teal-500 peer-checked:ring-2 peer-checked:border-transparent">
              Spicy
            </label>
          </li>
          <li className="w-full">
            <input id={id + '' + 'meat'} className="sr-only peer" type="radio" value="meat" name="category" onChange={(e) => dispatch(pizzasCategorySelector(e.target.value))}/>
            <label role="meat" htmlFor={id + '' + 'meat'} className="capitalize flex justify-center w-full py-1 px-2 bg-white border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 peer-checked:ring-teal-500 peer-checked:ring-2 peer-checked:border-transparent">
              Meat
            </label>
          </li>
          <li className="w-full">
            <input id={id + '' + 'vegetarian'} className="sr-only peer" type="radio" value="vegetarian" name="category" onChange={(e) => dispatch(pizzasCategorySelector(e.target.value))}/>
            <label role="vegetarian" htmlFor={id + '' + 'vegetarian'} className="capitalize flex justify-center w-full py-1 px-2 bg-white border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 peer-checked:ring-teal-500 peer-checked:ring-2 peer-checked:border-transparent">
              Vegetarian
            </label>
          </li>



      </ul>
    </div>
  )
}

export default Categories