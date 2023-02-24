import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";
import { IPizza, OnAddPizza, OnAddCalculate, addPizza } from 'types'


const initialState = {
  list: [] as IPizza[],
  selected: {} as OnAddPizza,
  products: [] as addPizza[],
  uniqueProductsList: [],
  productCount: 0,
  totalPrice: 0,
}

const slice = createSlice({
  name: 'PIZZA',
  initialState,
  reducers: {
    onSave: (state, action: PayloadAction<IPizza[] | never[]>) => {
      state.list = action.payload 
    },
    setProducts: (state, action: PayloadAction<addPizza | never>) => {
      const product = action.payload;
      state.products.push(product);

      state.productCount = state.products.length;
      state.totalPrice += action.payload.price;
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

      state.productCount = state.products.length;  
      state.totalPrice =  state.products.reduce((acc, prod) => {
        return acc + prod.price
      }, 0)
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
      state.productCount = state.products.length;
      state.totalPrice =  state.products.reduce((acc, prod) => {
        return acc + prod.price
      }, 0)
    },

    removeItem: (state, action) => {
      const { productId } = action.payload;
      const index = state.uniqueProductsList.findIndex((p: any) => p.productId === productId);
      state.uniqueProductsList.splice(index, 1);


      const indexes = state.products.reduce((acc, cur, index) => {
        if (cur.productId === productId) {
          acc.push(index);
        }
        return acc;
      }, []);
      
      indexes.forEach((index) => {
        state.products.splice(index, 1);
      });

      state.productCount = state.products.length;
      state.totalPrice =  state.products.reduce((acc, prod) => {
        return acc + prod.price
      }, 0)
    },
  }
}) 

export const { onSave, setProducts, onVariantCount, incrementItem, decrementItem, removeItem } = slice.actions

export default slice.reducer

export const pizzasSelector = (state: RootState) => state.pizza.list || []
export const selectedPizzasSelector = (state: RootState) => state.pizza.selected || {}
export const listedProducts = (state: RootState) => state.pizza.products || []
export const sameVariantCount = (state: RootState) => state.pizza.uniqueProductsList || []
export const selectProductCount = (state: RootState) => state.pizza.productCount || 0;
export const selectTotalPrice = (state: RootState) => state.pizza.totalPrice || 0;