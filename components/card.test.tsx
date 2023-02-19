import React from 'react'
import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from '../utils/utils-for-tests'
import Pizzas from './Pizzas'

test('renders all pizzas and tests on pizza dough type and size changes', async () => {

  const expected = [
    {
      name:"Pepperoni Fresh",
      price: 11.8,
      doughType:"classic",
      size:26
    }, {
      name:"Pepperoni Fresh",
      price: 12.8,
      doughType:"thin",
      size:30
    }, {
      name:"Pepperoni Fresh",
      price: 12.8,
      doughType:"classic",
      size:36
    }, {
      name: "Hawaiian",
      price: 11.8,
      doughType:"thin",
      size:30
    }
  ]

  renderWithProviders(
    <Pizzas />
  );
});