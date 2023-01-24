import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPizza } from 'types'


const initialState = {
  list: [] as IPizza[]
}

const slice = createSlice({
  name: 'PIZZA',
  initialState,
  reducers: {
    onSave: (state, action: PayloadAction<IPizza[] | never[]>) => {
        state.list = action.payload 
    }
  }
}) 

export const { onSave } = slice.actions

export default slice.reducer
