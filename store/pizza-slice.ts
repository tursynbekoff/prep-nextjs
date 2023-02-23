import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";
import { IPizza, OnAddPizza, OnAddCalculate, addPizza } from 'types'


const initialState = {
  list: [] as IPizza[],
  selected: {} as OnAddPizza,
  calculated: {} as OnAddCalculate,
  products: [] as addPizza[],
  uniqueProductsList: [],
}

const slice = createSlice({
  name: 'PIZZA',
  initialState,
  reducers: {
    onSave: (state, action: PayloadAction<IPizza[] | never[]>) => {
        state.list = action.payload 
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
        const variantId = product.productId
        counts[variantId] = (counts[variantId] || 0) + 1;
      });
    
      action.payload.forEach((product: any) => {
        const variantId = product.productId
        if (counts[variantId] > 0) {
          uniqueProducts.push({ ...product, count: counts[variantId] });
          counts[variantId] = 0;
        }
      });
    
      state.uniqueProductsList = uniqueProducts;
    },

    incrementItem: (state, action) => {
      const { productId } = action.payload;
      const index = state.uniqueProductsList.findIndex((p: any) => p.productId === productId);
      state.uniqueProductsList[index].count++;

      const prodObj = state.products.find((p) => p.productId === productId);
      console.log("incrementItem",  state.products)
      state.products.push(prodObj);
      
    },

    decrementItem: (state, action) => {
      const { productId } = action.payload;
      const index = state.uniqueProductsList.findIndex((p: any) => p.productId === productId);
      if( state.uniqueProductsList[index].count <= 1) {
        state.uniqueProductsList.splice(index, 1);
      } else {
        state.uniqueProductsList[index].count--;
      }

      const prodIndex = state.products.findIndex((p) => p.productId === productId);

      if (index !== -1) {
        state.products.splice(prodIndex, 1);
      }
    },

    removeItem: (state, action) => {
      const { productId } = action.payload;
      const index = state.uniqueProductsList.findIndex((p: any) => p.productId === productId);
      state.uniqueProductsList.splice(index, 1);
    },
  }
}) 

export const { onSave, onAddCalculate, setProducts, onVariantCount, incrementItem, decrementItem, removeItem } = slice.actions

export default slice.reducer

export const pizzasSelector = (state: RootState) => state.pizza.list || []
export const selectedPizzasSelector = (state: RootState) => state.pizza.selected || {}
export const calculatedPizzasSelector = (state: RootState) => state.pizza.calculated || {}
export const listedProducts = (state: RootState) => state.pizza.products || []
export const sameVariantCount = (state: RootState) => state.pizza.uniqueProductsList || []

