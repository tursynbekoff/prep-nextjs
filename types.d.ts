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

export interface OnAddPizza {
  id : number,
  pizza: {
    name: string,
    price: number 
    doughType: string, 
    size: number
  }
}

export interface OnAddCalculate {
  totalPizzaPrice: number,
  totalPizzaCount: number
}