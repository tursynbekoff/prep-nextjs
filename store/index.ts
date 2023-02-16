import { configureStore } from '@reduxjs/toolkit'
import type { PreloadedState } from '@reduxjs/toolkit'

import pizzaSlice from './pizza-slice'

const store = configureStore({
   reducer: {
      pizza: pizzaSlice
   }
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
      reducer: {
      pizza: pizzaSlice
    },
    preloadedState
   })
 }

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']