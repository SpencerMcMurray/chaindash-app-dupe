import { render, screen } from '@testing-library/react'
import SideBar from '../components/employee/SideBar'

describe("Sidebar", () => {
  it('renders correctly', async () => {
    render(
      <SideBar addCustomers={() => {}} />
    )
    expect(screen.getByTestId("logo")).toBeInTheDocument()
    expect(screen.getByText(/Add Customers/i)).toBeInTheDocument()
  })
})