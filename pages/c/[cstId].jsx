import axios from 'axios'
import { useRouter } from 'next/router'
import { Spinner } from 'react-bootstrap'
import useSWR from 'swr'
import CustomerContainer from '../../components/customer/CustomerContainer'
const fetcher = (...args) => axios.get(...args).then(res => res.data)

const CustDash = (props) => {
  const router = useRouter()
  if (router)
    var { cstId, first, last, email } = router.query
  else
    var { cstId, first, last, email } = props // For testing
  const { data, error } = useSWR(cstId ? `${process.env.API_ENDPOINT}/findinfo?caseCode=${cstId}` : null, fetcher)

  if (error) {
    return <p>An error has occurred</p>
  }
  if (!data)
    return <Spinner animation="border" variant="dark" />
  return (
    <CustomerContainer email={email} cstid={cstId} data={data} name={`${first} ${last}`} />
  )
}

export default CustDash