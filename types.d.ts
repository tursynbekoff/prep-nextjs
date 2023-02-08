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

interface addPizza {
  name: string,
  price: number 
  doughType: string,
  size: number
}
export interface OnAddPizza {
  [key: number]: addPizza[]
  id: number,
  pizza: addPizza
}

export interface OnAddCalculate {
  totalPizzaPrice: number,
  totalPizzaCount: number
}