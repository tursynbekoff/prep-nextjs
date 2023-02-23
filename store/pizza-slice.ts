import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";
import { IPizza, OnAddPizza, OnAddCalculate, addPizza } from 'types'


const initialState = {
  list: [] as IPizza[],
  selected: {} as OnAddPizza,
  calculated: {} as OnAddCalculate,
  products: [] as addPizza[],
  uniqueProductsList: [],
  productCount: [],
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
    },
    setProducts: (state, action: PayloadAction<addPizza | never>) => {
      const product = action.payload;
      state.products.push(product);
    },
    
    onVariantCount: (state, action) => {

      const counts : any = {};
      const uniqueProducts  : any = [];

      action.payload.forEach((product: any) => {
        const variantId = `${product.name}-${product.size}-${product.doughType}-${product.price}`;
        counts[variantId] = (counts[variantId] || 0) + 1;
      });
    
      action.payload.forEach((product: any) => {
        const variantId = `${product.name}-${product.size}-${product.doughType}-${product.price}`;
        if (counts[variantId] > 0) {
          uniqueProducts.push({ ...product, count: counts[variantId] });
          counts[variantId] = 0;
        }
      });
    
      state.uniqueProductsList = uniqueProducts;
    },
  }
}) 

export const { onSave, onAddPizza, onAddCalculate, setProducts, onVariantCount } = slice.actions

export default slice.reducer

export const pizzasSelector = (state: RootState) => state.pizza.list || []
export const selectedPizzasSelector = (state: RootState) => state.pizza.selected || {}
export const calculatedPizzasSelector = (state: RootState) => state.pizza.calculated || {}
export const listedProducts = (state: RootState) => state.pizza.products || []
export const sameVariantCount = (state: RootState) => state.pizza.uniqueProductsList || []

