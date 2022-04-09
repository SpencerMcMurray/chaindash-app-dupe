import { fireEvent, render, screen } from '@testing-library/react'
import CustomerLogin from '../pages/c/index'

describe("Customer login", () => {
  
  it('renders correctly', () => {
    render(<CustomerLogin />)
    expect(screen.getByTestId("logo")).toBeInTheDocument();
    expect(screen.queryByTestId("alert")).toBeNull();
    expect(screen.getByTestId("code")).toBeInTheDocument();
    expect(screen.getByTestId("email")).toBeInTheDocument();
    expect(screen.getByTestId("enter-btn")).toBeInTheDocument();
  })

  it('shows an error if needed', async () => {
    render(<CustomerLogin />)
    expect(screen.queryByTestId("alert")).toBeNull();

    const username = screen.getByTestId("code")
    const password = screen.getByTestId("email")
    const loginBtn = screen.getByTestId("enter-btn")

    fireEvent.change(username, {target: {value: 'nonuser'}})
    fireEvent.change(password, {target: {value: 'wrongpass'}})
    loginBtn.click()
    await new Promise((r) => setTimeout(r, 2000));
    expect(screen.queryByTestId("alert")).toBeInTheDocument();
  })
})