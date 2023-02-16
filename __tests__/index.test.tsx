import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { renderWithProviders } from 'utils/utils-for-tests'

import Home from 'pages/index'


test('renders learn react link', () => {
  renderWithProviders(<Home />);
});

