import { useState } from "react"
import dynamic from "next/dynamic";
import { Modal, Button, Card, Row, Col } from "react-bootstrap"
const PDFViewer = dynamic(() => import("../PDF"), {
  ssr: false
});

const CustomerModal = (props) => {
  const [b64, setB64] = useState("")

  return (
    <Modal centered show={props.show} onHide={() => {
      if (b64.length > 0)
        setB64("")
      else
        props.onHide()
    }} size="xl">
      <Modal.Header closeButton>
        <Modal.Title data-testid="name-title">{props.cust.information.firstName} {props.cust.information.lastName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {
          b64 ?
            <PDFViewer file={b64} /> :
            <>
              <Card data-testid="c-card">
                <Card.Header>
                  <Card.Title>Customer Information</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Col>Date of Birth</Col><Col style={{ textAlign: "right" }}>{(new Date(props.cust.information.dateOfBirth)).toLocaleDateString()}</Col>
                  </Row>
                  <Row>
                    <Col>Address Line One</Col><Col style={{ textAlign: "right" }}>{props.cust.information.addressLineOne}</Col>
                  </Row>
                  <Row>
                    <Col>Address Line Two</Col><Col style={{ textAlign: "right" }}>{props.cust.information.addressLineTwo}</Col>
                  </Row>
                  <Row>
                    <Col>Postal Code</Col><Col style={{ textAlign: "right" }}>{props.cust.information.postalCode}</Col>
                  </Row>
                  <Row>
                    <Col>Province</Col><Col style={{ textAlign: "right" }}>{props.cust.information.province}</Col>
                  </Row>
                </Card.Body>
              </Card>
              <Card className="mt-4">
                <Card.Header>
                  <Card.Title>Files</Card.Title>
                </Card.Header>
                <Card.Body>
                  {
                    props.cust.files.map((file, idx) => (
                      <Row key={idx} className="mb-3">
                        <Col>{file.fileName}</Col>
                        <Col style={{ textAlign: "right" }}>
                          <Button variant="dark" onClick={() => {
                            setB64(file.base64)
                          }}>
                            <i className="fa-solid fa-download" /> Download
                          </Button>
                        </Col>
                      </Row>
                    ))
                  }
                </Card.Body>
              </Card>
            </>
        }
      </Modal.Body>
    </Modal>
  )
}

export default CustomerModal