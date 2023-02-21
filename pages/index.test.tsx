import React from 'react'
import { screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from '../utils/utils-for-tests'

import Home from '.'

test('purchase of initial first pizza and comparing to the card counter', async() => {
  renderWithProviders(<Home />);

  const expectedOutput = "1";

  const allCards = await screen.findAllByRole("pizza-card");
  const firstCard = allCards[0];

  const button = within(firstCard).getByRole("button");
  userEvent.click(button);
  
  await waitFor(async () => {
    const countElement  = await screen.findByTestId('count');
    expect(countElement.textContent).toBe(expectedOutput);
  });

});
