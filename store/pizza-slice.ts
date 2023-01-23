import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPizza } from 'types'

export interface Pizza {
  list: [IPizza] | any
}

const initialState: Pizza = {
  list: []
}

const slice = createSlice({
  name: 'PIZZA',
  initialState,
  reducers: {
    onSave: (state, action: PayloadAction<unknown[]>) => {
        state.list = action.payload 
    }
  }
}) 

export const { onSave } = slice.actions

export default slice.reducer
