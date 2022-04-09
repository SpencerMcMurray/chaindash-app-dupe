import { useState } from 'react'
import { Form, Row, Col, Card, Button, Spinner, Alert } from 'react-bootstrap'
import { toBase64 } from '../../public/helpers/base64'
import DashLayout from '../DashLayout'
const axios = require("axios")

const CustomerContainer = (props) => {
  const [isSending, setIsSending] = useState(false)
  const [showErr, setShowErr] = useState(false)
  const [showDone, setShowDone] = useState(false)
  const [dob, setDob] = useState(props.data.information.dateOfBirth ? new Date(props.data.information.dateOfBirth) : "")
  const [address1, setAddress1] = useState(props.data.information.address1 ? props.data.information.address1 : "")
  const [address2, setAddress2] = useState(props.data.information.address2 ? props.data.information.address2 : "")
  const [postal, setPostal] = useState(props.data.information.postalCode ? props.data.information.postalCode : "")
  const [province, setProvince] = useState(props.data.information.province ? props.data.information.province : "")
  const [files, setFiles] = useState([])

  return (
    <div className="p-0" style={{width: "100%", height: "100vh"}}>
      <DashLayout name={props.name}>
        <div style={{paddingTop: "4em"}} />
        <Card data-testid="c-card" style={{height: "80vh", textAlign: "left", overflow: "hidden"}}>
          {
            showErr ? 
            <Alert variant="danger" onClose={() => setShowErr(false)} dismissible>
              <Alert.Heading>Missing required information</Alert.Heading>
            </Alert> : null
          }
          {
            showDone ? 
            <Alert variant="success" onClose={() => setShowDone(false)} dismissible>
              <Alert.Heading>Information submitted successfully</Alert.Heading>
            </Alert> : null
          }
          <Card.Body>
            <Card.Title style={{fontSize: "2em"}}>Information</Card.Title>
            <div style={{overflowY: "scroll", maxHeight: "45%"}}>
              <Row className="mt-4" style={{marginRight: "0"}}>
                <Form.Group as={Col} controlId="dob">
                  <Form.Label>Date of Birth<span style={{color: "red"}}> *</span></Form.Label>
                  <Form.Control onChange={e => setDob(e.target.value)} value={dob} type="date" />
                </Form.Group>
                <Col />
              </Row>
              <Row className="mt-4" style={{marginRight: "0"}}>
                <Form.Group as={Col} controlId="add1">
                  <Form.Label>Address Line 1<span style={{color: "red"}}> *</span></Form.Label>
                  <Form.Control onChange={e => setAddress1(e.target.value)} value={address1} />
                </Form.Group>
                <Col />
              </Row>
              <Row className="mt-4" style={{marginRight: "0"}}>
                <Form.Group as={Col} controlId="add2">
                  <Form.Label>Address Line 2</Form.Label>
                  <Form.Control onChange={e => setAddress2(e.target.value)} value={address2} />
                </Form.Group>
                <Col />
              </Row>
              <Row className="mt-4" style={{marginRight: "0"}}>
                <Form.Group as={Col} controlId="pstc">
                  <Form.Label>Postal Code<span style={{color: "red"}}> *</span></Form.Label>
                  <Form.Control onChange={e => setPostal(e.target.value)} value={postal} />
                </Form.Group>
                <Col />
              </Row>
              <Row className="mt-4" style={{marginRight: "0"}}>
                <Form.Group as={Col} controlId="prov">
                  <Form.Label>Province<span style={{color: "red"}}> *</span></Form.Label>
                  <Form.Control onChange={e => setProvince(e.target.value)} value={province} />
                </Form.Group>
                <Col />
              </Row>
            </div>
            <Card.Title style={{fontSize: "2em"}}>Files</Card.Title>
            <div className="mt-4" style={{overflowY: "scroll", maxHeight: "40%"}}>
              {
                props.data.files.map((file, idx) => (
                  <Row key={idx} className="mt-4" style={{marginRight: "0"}}>
                    <Col>{file.fileName}</Col>
                    <Col style={{textAlign: "right"}}>
                      <Form.Control onChange={evt => {
                        if (evt.target.files.length === 1) {
                          toBase64(evt.target.files[0]).then(res => {
                            setFiles([...files, {"fileName": file.fileName, "base64": res}])
                          })
                        }
                      }} type="file" accept='.pdf' />
                    </Col>
                  </Row>
                ))
              }
            </div>
            <div className="mt-4" style={{textAlign: "right"}}>
              <Button disabled={isSending} variant="success" onClick={() => {
                if (dob && postal && province && address1 && Object.keys(files).length === props.data.files.length) {
                  setIsSending(true)
                  axios.post(`${process.env.API_ENDPOINT}/submitinfo`, {
                    email: props.email,
                    caseCode: props.cstid,
                    information: {
                      addressLineOne: address1,
                      addressLineTwo: address2,
                      dateOfBirth: (new Date(dob)).getTime(),
                      postalCode: postal,
                      province: province
                    },
                    files
                  }).then(res => {
                    setIsSending(false)
                    setShowDone(true)
                  })
                } else {
                  setShowErr(true)
                }
              }}>
                {isSending? <Spinner animation="border" variant="light" /> : "Send"}
              </Button>
            </div>
          </Card.Body>
        </Card>
      </DashLayout>
    </div>
  )
}

export default CustomerContainer