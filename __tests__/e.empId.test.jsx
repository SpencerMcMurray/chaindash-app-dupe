import { render, screen } from '@testing-library/react'
import EmployeeContainer from "../components/employee/EmployeeContainer"
import EmployeeDash from '../pages/e/[empId]'

describe("Customer dashboard", () => {
  const data = {
    completed: [],
    pending: []
  }

  it('renders correctly', () => {
    render(
      <EmployeeDash
        empId={"employee1"}
        first={"Spencer"}
        last={"McMurray"}
      />
    )
  })

  it('renders contents correctly', async () => {
    render(
      <EmployeeContainer
        empId={"employee1"}
        name={"Spencer McMurray"}
        customers={data}
        setCust={() => {}}
        customer={() => {}}
      />
    )
    expect(screen.getByTestId("name").innerHTML).toEqual("Hello Spencer McMurray");
  })
})