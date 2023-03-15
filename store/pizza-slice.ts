import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";
import { IPizza, AddedPizza, ProductId } from 'types'

const initialState = {
  list: [] as IPizza[],
  sortedList: [] as IPizza[],
  products: [] as AddedPizza[],
  productCount: 0,
  totalPrice: 0,
}

const slice = createSlice({
  name: 'PIZZA',
  initialState,
  reducers: {
    onSave: (state, action: PayloadAction<IPizza[]>) => {
      state.list = action.payload
      state.sortedList = action.payload
    },
    pizzasCategorySelector: (state, action: PayloadAction<string>) => {
      state.sortedList = action.payload === 'all' ? state.list : state.list.filter((p) => p.categories.includes(action.payload))
    },
    setProducts: (state, action: PayloadAction<AddedPizza>) => {
      state.products.push(action.payload);
    },
    incrementItem: (state, action: PayloadAction<ProductId>) => {
      const index = state.products.findIndex((p) => p.productId === action.payload);
      state.products.push(state.products[index])
    },
    decrementItem: (state, action: PayloadAction<ProductId>) => {
      const index = state.products.findIndex((p) => p.productId === action.payload)
      state.products.splice(index, 1) 
    },
    removeItem: (state, action: PayloadAction<ProductId>) => {
      state.products = state.products.filter((p) => p.productId !== action.payload)
    },
  }
}) 

export const { onSave, setProducts, incrementItem, decrementItem, removeItem, pizzasCategorySelector} = slice.actions

export default slice.reducer

export const pizzasSelector = (state: RootState) => state.pizza.sortedList
export const addedProductsSelector = (state: RootState) => state.pizza.products
export const productsCountSelector = createSelector(addedProductsSelector, (pizzas) => pizzas.length)
export const totalPriceSelector = createSelector(addedProductsSelector, (pizzas) => pizzas.reduce((a, b) => a + b.price, 0))
export const addedProductsMappedSelector = createSelector(
  addedProductsSelector, 
  (pizzas) => {
    const products = pizzas.reduce((
      res: Record<ProductId, {count?: number} & AddedPizza>, 
      curr: AddedPizza
    ) => {
      res[curr.productId] = {...curr, count: (res[curr.productId]?.count || 0) + 1}
      return res
    }, {})

    return Object.values(products)
  }
)