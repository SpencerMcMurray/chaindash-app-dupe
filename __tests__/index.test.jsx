import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading1 = screen.getByText(/Employee Login/i)
    const heading2 = screen.getByText(/Customer Login/i)

    expect(heading1).toBeInTheDocument()
    expect(heading2).toBeInTheDocument()
  })
})