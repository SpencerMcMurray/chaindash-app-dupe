import { render, screen } from '@testing-library/react'
import AddCustomerModal from '../components/employee/AddCustomerModal'

describe("Sidebar", () => {
  it('renders correctly', async () => {
    render(
      <AddCustomerModal
        show={true}
        empid="employee1"
        onHide={() => {}}
      />
    )
    expect(screen.getByTestId("add-card")).toBeInTheDocument()
    expect(screen.getByText(/Add Customer/i)).toBeInTheDocument()
    expect(screen.getByText(/Pay Stub/i)).toBeInTheDocument()
    expect(screen.getByText(/Driver's License/i)).toBeInTheDocument()
    expect(screen.getByText(/Record of Employement/i)).toBeInTheDocument()
    expect(screen.getByText(/Tax Forms/i)).toBeInTheDocument()
  })
})