import axios from 'axios'
import { useState } from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { Row, Spinner } from 'react-bootstrap'

import SideBar from '../../components/employee/SideBar'
import EmployeeContainer from '../../components/employee/EmployeeContainer'
import { pickEmployeeModal } from '../../public/helpers/pickView'
const fetcher = (...args) => axios.get(...args).then(res => res.data)


const EmployeeDash = (props) => {
  const router = useRouter()
  if (router)
    var { empId, first, last } = router.query
  else
    var { empId, first, last } = props // For testing
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState(0)
  const [cust, setCust] = useState(null)
  const { data, error } = useSWR(`${process.env.API_ENDPOINT}/clients?employeeUsername=${empId}`, fetcher)

  if (error)
    return <p>An error has occurred</p>
  if (!data || !empId || !first || !last)
    return <Spinner animation="border" variant="dark" />
  return (
    <Row className="m-0 p-0">
      { pickEmployeeModal(modalType, {show: showModal, onHide: () => setShowModal(false), cust, empid: empId}) }
      <SideBar
        addCustomers={() => {
          setModalType(0)
          setShowModal(true)
        }}
      />
      <EmployeeContainer
        empId={empId}
        name={`${first} ${last}`}
        customers={data}
        setCust={setCust}
        customer={() => {
          setModalType(1)
          setShowModal(true)
        }}
      />
    </Row>
  )
}

export default EmployeeDash