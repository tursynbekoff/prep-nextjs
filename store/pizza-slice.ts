import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";
import { IPizza, OnAddPizza, addPizza, uniquePizza, Count, Increment } from 'types'


const initialState = {
  list: [] as IPizza[],
  selected: {} as OnAddPizza,
  products: [] as addPizza[],
  uniqueProductsList: [] as uniquePizza[],
  productCount: 0,
  totalPrice: 0,
}

const slice = createSlice({
  name: 'PIZZA',
  initialState,
  reducers: {
    onSave: (state, action: PayloadAction<IPizza[]>) => {
      state.list = action.payload 
    },
    setProducts: (state, action: PayloadAction<addPizza >) => {
      const product = action.payload;
      state.products.push(product);

      state.productCount = state.products.length;
      state.totalPrice += action.payload.price;
    },
    
    onVariantCount: (state, action: PayloadAction<addPizza[]>) => {

      const counts: Count = {};
      const uniqueProducts: uniquePizza[] = [];

      Object.values(action.payload).forEach((product: addPizza) => {
        const variantId = product.productId
        counts[variantId] = (counts[variantId] || 0) + 1;
      });
    
      Object.values(action.payload).forEach((product: addPizza) => {
        const variantId = product.productId
        if (counts[variantId] > 0) {
          uniqueProducts.push({ ...product, count: counts[variantId] });
          counts[variantId] = 0;
        }
      });
    
      state.uniqueProductsList = uniqueProducts;
    },

    incrementItem: (state, action: PayloadAction<Increment>) => {
      const { productId } = action.payload;
      const index = state.uniqueProductsList.findIndex((p: addPizza) => p.productId === productId);
      
      state.uniqueProductsList[index].count++


      const prodObj : addPizza | undefined = Object.values(state.products).find((p: addPizza) => p.productId === productId);

      if (prodObj) { 
        state.products.push(prodObj);
      }

      state.productCount = state.products.length;  
      state.totalPrice =  state.products.reduce((acc, prod) => {
        return acc + prod.price
      }, 0)
    },

    decrementItem: (state, action: PayloadAction<Increment>) => {
      const { productId } = action.payload;
      const index = state.uniqueProductsList.findIndex((p: uniquePizza) => p.productId === productId);
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
      const index = state.uniqueProductsList.findIndex((p: uniquePizza) => p.productId === productId);
      state.uniqueProductsList.splice(index, 1);

      const indexes: number[] = state.products.reduce((acc: number[], cur, index: number) => {
        if (cur.productId === productId) {
          acc.push(index);
        }
        return acc;
      }, []);

      state.products.filter((_, index) => !indexes.includes(index))

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