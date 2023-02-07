import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";
import { IPizza, OnAddPizza, OnAddCalculate } from 'types'


const initialState = {
  list: [] as IPizza[],
  selected: {} as any, // * { 'PIZZA_ID': [{doughType: classic, price, size}, {doughType: thin}, {}] }
  calculated: {} as OnAddCalculate
}

const slice = createSlice({
  name: 'PIZZA',
  initialState,
  reducers: {
    onSave: (state, action: PayloadAction<IPizza[] | never[]>) => {
        state.list = action.payload 
    },
    onAddPizza: (state, action: PayloadAction<OnAddPizza >) => {
      const {id, pizza} = action.payload
      if (!(id in state.selected)) state.selected[id] = [pizza]
      else state.selected[id].push(pizza)
    },
    onAddCalculate: (state, action: PayloadAction<OnAddCalculate | never>) => {
      if (Object.keys(state.calculated).length !== 0) {
        state.calculated.totalPizzaPrice = state.calculated.totalPizzaPrice + action.payload.totalPizzaPrice
        state.calculated.totalPizzaCount = state.calculated.totalPizzaCount + action.payload.totalPizzaCount
      } 
      else {
        state.calculated.totalPizzaPrice = action.payload.totalPizzaPrice
        state.calculated.totalPizzaCount = action.payload.totalPizzaCount
      }
    }
  }
}) 

export const { onSave, onAddPizza, onAddCalculate } = slice.actions

export default slice.reducer

export const pizzasSelector = (state: RootState) => state.pizza.list || []
export const selectedPizzasSelector = (state: RootState) => state.pizza.selected || []
export const claculatedPizzasSelector = (state: RootState) => state.pizza.calculated || []
