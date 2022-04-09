import Image from "next/image"
import { useRouter } from 'next/router'
import { useState } from "react"
import { Form, Button, Alert } from 'react-bootstrap'
const axios = require("axios")

const EmployeeLogin = () => {
  const router = useRouter()
  const [user, setUser] = useState("")
  const [psw, setPsw] = useState("")
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
          placeholder="Username"
          value={user}
          data-testid="username"
          onChange={evt => setUser(evt.target.value)}
        />
        <Form.Control
          className="mx-auto mt-4 text-center"
          style={{padding: "2em 1em", width: "25vw"}}
          type="password"
          placeholder="Password"
          value={psw}
          data-testid="password"
          onChange={evt => setPsw(evt.target.value)}
        />
        <Button
          className="mx-auto mt-4"
          style={{padding: "2em 1em", width: "25vw"}}
          variant="primary"
          data-testid="login-btn"
          onClick={() => {
          if (user && psw) {
            axios.post(`${process.env.API_ENDPOINT}/login`, {
              "employeeUsername": user,
              "employeePassword": psw
            })
              .then(res => {
                router.push({
                  pathname: `/e/${user}`,
                  query: {
                    first: res.data.employeeFirstName,
                    last: res.data.employeeLastName
                  }
                })
              })
              .catch(() => setShowErr(true))
          }
        }}>
          Login
        </Button>
      </div>
    </div>
  )
}

export default EmployeeLogin