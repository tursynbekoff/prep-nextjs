import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import pizzaSlice from './pizza-slice'

const store = configureStore({
   reducer: {
      pizza: pizzaSlice
   }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch