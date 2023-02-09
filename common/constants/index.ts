export const PIZZAS_URL = 'http://localhost:6767/api/pizzas';

interface sizePriceDictionary {
  [key: number]: number
}

export const sizePriceDictionary : sizePriceDictionary = {
  26: 0,
  30: 0.5,
  36: 1
}

interface doughPriceDictionary {
  [key: string]: number
}

export const doughPriceDictionary: doughPriceDictionary = {
  "classic": 0,
  "thin": 0.5
}