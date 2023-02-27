import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";
import { IPizza, AddedPizza, uniquePizza, IncrementDecrement } from 'types'


const initialState = {
  list: [] as IPizza[],
  products: [] as AddedPizza[],
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
    setProducts: (state, action: PayloadAction<AddedPizza >) => {
      const product = action.payload;
      state.products.push(product);

      state.productCount = state.products.length;
      state.totalPrice += product.price;
    },
    
    setUniqueProductList: (state, action: PayloadAction<AddedPizza[]>) => {

      const productList = action.payload;
      const counts: Record<string, number> = {};
      const uniqueProducts: uniquePizza[] = [];

      productList.forEach((product: AddedPizza) => {
        const variantId = product.productId
        counts[variantId] = (counts[variantId] || 0) + 1;
      });
    
      productList.forEach((product: AddedPizza) => {
        const variantId = product.productId
        if (counts[variantId] > 0) {
          uniqueProducts.push({ ...product, count: counts[variantId] });
          counts[variantId] = 0;
        }
      });
    
      state.uniqueProductsList = uniqueProducts;
    },

    incrementItem: (state, action: PayloadAction<IncrementDecrement>) => {
      const { productId } = action.payload;
      const index = state.uniqueProductsList.findIndex((p: AddedPizza) => p.productId === productId);
      
      state.uniqueProductsList[index].count++


      const prodObj : AddedPizza | undefined = state.products.find((p: AddedPizza) => p.productId === productId);

      if (prodObj) { 
        state.products.push(prodObj);
      }

      state.productCount = state.products.length;  
      state.totalPrice =  state.products.reduce((acc, prod) => {
        return acc + prod.price
      }, 0)
    },

    decrementItem: (state, action: PayloadAction<IncrementDecrement>) => {
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

      state.products = state.products.filter((p) => p.productId !== productId)

      state.productCount = state.products.length;
      state.totalPrice =  state.products.reduce((acc, prod) => {
        return acc + prod.price
      }, 0)
    },
  }
}) 

export const { onSave, setProducts, setUniqueProductList, incrementItem, decrementItem, removeItem } = slice.actions

export default slice.reducer

export const pizzasSelector = (state: RootState) => state.pizza.list || []
export const listedProducts = (state: RootState) => state.pizza.products || []
export const sameVariantCount = (state: RootState) => state.pizza.uniqueProductsList || []
export const selectProductCount = (state: RootState) => state.pizza.productCount || 0;
export const selectTotalPrice = (state: RootState) => state.pizza.totalPrice || 0;