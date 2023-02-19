import React from 'react'
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from '../utils/utils-for-tests'

import Home from '.'

test('purchase of initial first pizza and comparing to the card counter', async() => {
  renderWithProviders(<Home />);

  const expectedOutput = 1;

  const addButton = await screen.queryAllByText("+ Add")[0];
  
  userEvent.click(addButton);

  await screen.debug()
  
  // await waitFor(() => {
  //   expect(screen.getByText('1')).toBeInTheDocument();
  // });

});
