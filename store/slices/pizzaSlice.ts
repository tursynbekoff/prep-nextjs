import { createSlice } from "@reduxjs/toolkit";

import { AppState } from "../store";
import { HYDRATE } from "next-redux-wrapper";

export interface PizzaState {
  data: [] | any;
}

const initialState: PizzaState = {
  data: [],
};

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setPizzaState(state, action) {
      state.data = action.payload;
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log("HYDRATE", action.payload);
      return {
        ...state,
        ...action.payload.pizza,
      };
    },
  },
});

export const { setPizzaState } = pizzaSlice.actions;

export const selectPizzaState = (state: AppState) => state.pizza.data;

export default pizzaSlice.reducer;