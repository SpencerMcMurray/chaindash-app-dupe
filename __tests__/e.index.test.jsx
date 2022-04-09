import { fireEvent, render, screen } from '@testing-library/react'
import EmployeeLogin from '../pages/e/index'

describe("Employee login", () => {
  
  it('renders correctly', () => {
    render(<EmployeeLogin />)
    expect(screen.getByTestId("logo")).toBeInTheDocument();
    expect(screen.queryByTestId("alert")).toBeNull();
    expect(screen.getByTestId("username")).toBeInTheDocument();
    expect(screen.getByTestId("password")).toBeInTheDocument();
    expect(screen.getByTestId("login-btn")).toBeInTheDocument();
  })

  it('shows an error if needed', async () => {
    render(<EmployeeLogin />)
    expect(screen.queryByTestId("alert")).toBeNull();

    const username = screen.getByTestId("username")
    const password = screen.getByTestId("password")
    const loginBtn = screen.getByTestId("login-btn")

    fireEvent.change(username, {target: {value: 'nonuser'}})
    fireEvent.change(password, {target: {value: 'wrongpass'}})
    loginBtn.click()
    await new Promise((r) => setTimeout(r, 2000));
    expect(screen.queryByTestId("alert")).toBeInTheDocument();
  })
})