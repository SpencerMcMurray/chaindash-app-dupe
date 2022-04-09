import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"
import { Form, Button, Alert } from 'react-bootstrap'
const axios = require('axios')

const CustomerLogin = () => {
  const router = useRouter()
  const [code, setCode] = useState("")
  const [email, setEmail] = useState("")
  const [showErr, setShowErr] = useState(false)
  
  return (
    <div className="container">
      <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
        <Image
          src='/logo.png'
          alt='ChainDash'
          width={"200%"}
          height={"200%"}
          data-testid="logo"
        />
        {
          !showErr ? null : (
            <Alert data-testid="alert" variant="danger" onClose={() => setShowErr(false)} dismissible>
              <Alert.Heading>Login Failed!</Alert.Heading>
              Try again later
            </Alert>
          )
        }
        <Form.Control
          className="mx-auto text-center"
          style={{padding: "2em 1em", width: "25vw"}}
          placeholder="Access Code"
          value={code}
          data-testid="code"
          onChange={e => setCode(e.target.value)}
        />
        <Form.Control
          className="mx-auto mt-4 text-center"
          style={{padding: "2em 1em", width: "25vw"}}
          placeholder="Email Address"
          value={email}
          data-testid="email"
          onChange={e => setEmail(e.target.value)}
        />
        <Button
          className="mx-auto mt-4"
          style={{padding: "2em 1em", width: "25vw"}}
          variant="primary"
          data-testid="enter-btn"
          onClick={() => {
            if (code && email) {
              axios.post(`${process.env.API_ENDPOINT}/validate`, {
                "caseCode": code
              })
                .then(res => {
                  router.push({
                    pathname: `/c/${code}`,
                    query: {
                      first: res.data.firstName,
                      last: res.data.lastName,
                      email
                    }
                  })
                })
                .catch(() => setShowErr(true))
            }
          }}>
          Enter
        </Button>
      </div>
    </div>
  )
}

export default CustomerLogin