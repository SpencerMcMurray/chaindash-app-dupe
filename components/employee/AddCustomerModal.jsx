import { useState } from "react"
import { Modal, Button, Card, Row, Col, Form, Spinner } from "react-bootstrap"
const axios = require("axios")

const AddCustomerModal = (props) => {
  const [fName, setFName] = useState("")
  const [mName, setMName] = useState("")
  const [lName, setLName] = useState("")

  const [stub, setStub] = useState(false)
  const [RoE, setRoE] = useState(false)
  const [license, setLicense] = useState(false)
  const [tax, setTax] = useState(false)

  const [isSending, setIsSending] = useState(false)

  return (
    <Modal centered {...props} size="xl">
      <Modal.Header closeButton>
        <Modal.Title>Add Customer</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card data-testid="add-card">
          <Card.Header>
            <Card.Title>Name</Card.Title>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col>
                <Form.Control value={fName} onChange={e => setFName(e.target.value)} placeholder="First Name" />
              </Col>
              <Col>
                <Form.Control value={mName} onChange={e => setMName(e.target.value)} placeholder="Middle Name" />
              </Col>
              <Col>
                <Form.Control value={lName} onChange={e => setLName(e.target.value)} placeholder="Last Name" />
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Card className="mt-4">
          <Card.Header>
            <Card.Title>Required Files</Card.Title>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col>Pay Stub</Col>
              <Col style={{textAlign: "right"}}>
                <Form.Check
                  checked={stub}
                  onChange={evt => setStub(evt.target.checked)}
                  type="checkbox"
                />
              </Col>
              <hr className="mb-0" />
            </Row>
            <Row className="mt-3">
              <Col>Record of Employement</Col>
              <Col style={{textAlign: "right"}}>
                <Form.Check
                  checked={RoE}
                  onChange={evt => setRoE(evt.target.checked)}
                  type="checkbox"
                />
              </Col>
              <hr className="mb-0" />
            </Row>
            <Row className="mt-3">
              <Col>Driver&apos;s License</Col>
              <Col style={{textAlign: "right"}}>
                <Form.Check
                  checked={license}
                  onChange={evt => setLicense(evt.target.checked)}
                  type="checkbox"
                />
              </Col>
              <hr className="mb-0" />
            </Row>
            <Row className="mt-3">
              <Col>Tax Forms</Col>
              <Col style={{textAlign: "right"}}>
                <Form.Check
                  checked={tax}
                  onChange={evt => setTax(evt.target.checked)}
                  type="checkbox"
                />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" disabled={isSending} onClick={() => {
          setIsSending(true)
          axios.post(`${process.env.API_ENDPOINT}/addclient`, {
            employeeUsername: props.empid,
            firstName: fName,
            middleName: mName,
            lastName: lName,
            files: [
              {
                fileName: "Pay Stub",
                request: stub
              },
              {
                fileName: "Record of Employement",
                request: RoE
              },
              {
                fileName: "Driver's License",
                request: license
              },
              {
                fileName: "Tax Forms",
                request: tax
              }
            ]
          })
            .then(res => {
              setIsSending(false)
              props.onHide()
            })
        }}>
          {isSending? <Spinner animation="border" variant="light" /> : "Confirm"}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default AddCustomerModal