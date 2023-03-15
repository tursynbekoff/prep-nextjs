export interface IPizza {
  id: number,
  imageUrl: string,
  doughType: ['classic', 'thin'],
  sizes: [26, 30, 36],
  raiting: number,
  types: string[],
  name: string,
  description: string,
  price: number,
  categories: string[]
}

export interface AddedPizza {
  name: string,
  imageUrl: string,
  price: number,
  doughType: string,
  size: number,
  productId: string,
  count?: number
}

export interface OnAddPizza {
  [key: number]: AddedPizza[]
  id: number,
  pizza: AddedPizza
}

export interface IncrementDecrement {
  [key: string]: string
  productId: string
}

export interface OnAddCalculate {
  totalPizzaPrice: number,
  totalPizzaCount: number
}

export type ProductId = string;

export type Categories = string