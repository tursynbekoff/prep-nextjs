export interface IPizza {
  id: number,
  imageUrl: string,
  doughType: ['classic', 'thin'],
  sizes: number[],
  raiting: number,
  types: string[],
  name: string,
  description: string,
  price: number 
}

export interface addedPizza {
  name: string,
  imageUrl: string,
  price: number,
  doughType: string,
  size: number,
  productId: string,
}

export interface uniquePizza {
  name: string,
  imageUrl: string,
  price: number,
  doughType: string,
  size: number,
  productId: string,
  count: number
}

export interface OnAddPizza {
  [key: number]: addedPizza[]
  id: number,
  pizza: addedPizza
}

export interface IncrementDecrement {
  [key: string]: string
  productId: string
}

export interface OnAddCalculate {
  totalPizzaPrice: number,
  totalPizzaCount: number
}