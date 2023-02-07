import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";
import { IPizza, OnAddPizza } from 'types'


const initialState = {
  list: [] as IPizza[],
  selected: {} as any, // * { 'PIZZA_ID': [{doughType: classic, price, size}, {doughType: thin}, {}] }
}

const slice = createSlice({
  name: 'PIZZA',
  initialState,
  reducers: {
    onSave: (state, action: PayloadAction<IPizza[] | never[]>) => {
        state.list = action.payload 
    },
    onAddPizza: (state, action: PayloadAction<OnAddPizza>) => {
      const {id, pizza} = action.payload
      if (!(id in state.selected)) state.selected[id] = [pizza]
      else state.selected[id].push(pizza)
    }
  }
}) 

export const { onSave, onAddPizza } = slice.actions

export default slice.reducer

export const pizzasSelector = (state: RootState) => state.pizza.list || []
