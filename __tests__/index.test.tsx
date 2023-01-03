import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Home from '../pages/index'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      level: 1,
      name: /Some text for test/i,
    })

    expect(heading).toBeInTheDocument()
  })
})