import { render, screen } from '@testing-library/react'
import Layout from '../components/Layout'

describe("Layout", () => {
  it('has correct classNames', async () => {
    render(
      <Layout className="test" />
    )
    expect(screen.getByTestId("layout").className).toEqual("text-center test");
  })
})