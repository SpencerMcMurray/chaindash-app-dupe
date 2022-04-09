import AddCustomerModal from "../../components/employee/AddCustomerModal"
import CustomerModal from "../../components/employee/CustomerModal"

export const pickEmployeeModal = (modalType, props) => {
  return !modalType ? <AddCustomerModal {...props} /> : <CustomerModal {...props} />
}