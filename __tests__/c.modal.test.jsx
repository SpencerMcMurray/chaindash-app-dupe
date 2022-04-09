import { render, screen } from '@testing-library/react'
import CustomerModal from '../components/employee/CustomerModal'

describe("Sidebar", () => {
  const data = {
    information: {
      firstName: "Spencer",
      lastName: "McMurray",
      dateOfBirth: null,
      address1: null,
      address2: null,
      postal: null,
      province: null
    },
    files: [{fileName: "Pay Stub", base64: ""}]
  }
  it('renders correctly', async () => {
    render(
      <CustomerModal
        show={true}
        onHide={() => {}}
        cust={data}
      />
    )
    expect(screen.getByTestId("name-title").innerHTML).toEqual("Spencer McMurray")
    expect(screen.getByTestId("c-card")).toBeInTheDocument()
    expect(screen.getByText(/Pay Stub/i)).toBeInTheDocument()
  })
})