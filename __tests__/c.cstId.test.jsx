import { render, screen } from '@testing-library/react'
import CustomerContainer from "../components/customer/CustomerContainer"
import CustDash from '../pages/c/[cstId]'

describe("Customer dashboard", () => {
  const data = {
    information: {
      dateOfBirth: null,
      address1: null,
      address2: null,
      postal: null,
      province: null
    },
    files: [{fileName: "Pay Stub"}]
  }

  it('renders correctly', () => {
    render(
      <CustDash
        cstId={"624e02349ec4d52c0ea48578"}
        first={"Spencer"}
        last={"McMurray"}
        email={"s@mail.com"}
      />
    )
  })

  it('renders contents correctly', () => {
    render(
      <CustomerContainer
        cstId={"624e02349ec4d52c0ea48578"}
        name={"Spencer McMurray"}
        email={"s@mail.com"}
        data={data}
      />
    )
    
    expect(screen.getByTestId("name").innerHTML).toEqual("Hello Spencer McMurray");
    expect(screen.getByTestId("c-card")).toBeInTheDocument()
    expect(screen.getByText(/Pay Stub/i)).toBeInTheDocument()
  })
})