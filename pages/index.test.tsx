import React from 'react'
import { renderWithProviders } from '../utils/utils-for-tests'

import Home from '.'

test('renders learn react link', () => {
  renderWithProviders(<Home />);
});
