import { Row, Col, Card, ListGroup } from 'react-bootstrap'
import DashLayout from '../DashLayout'
const axios = require('axios')

const EmployeeContainer = (props) => {
  return (
    <div className="p-0" style={{width: "85%", height: "100vh"}}>
      <DashLayout name={props.name}>
        <Row className=" text-light justify-content-between m-0 p-0" style={{minHeight: "93vh"}}>
          <Col className="align-self-start" style={{padding: "0", paddingTop: "100px"}} md={4}>
            <Card style={{background: "green", height: "20vh"}}>
              <Card.Body className='d-flex flex-wrap'>
                <Col md={12}>
                  <Card.Title>Number of customers</Card.Title>
                </Col>
                <Col md={12}>
                  <Card.Text className="mt-4 display-1">{props.customers.completed.length}</Card.Text>
                </Col>
              </Card.Body>
            </Card>
          </Col>
          <Col className="align-self-start" style={{padding: "0", paddingTop: "100px"}} md={4}>
            <Card style={{background: "red", height: "20vh"}}>
              <Card.Body className='d-flex flex-wrap'>
                <Col md={12}>
                  <Card.Title>Number of pending customers</Card.Title>
                </Col>
                <Col md={12}>
                  <Card.Text className="mt-4 display-1">{props.customers.pending.length}</Card.Text>
                </Col>
              </Card.Body>
            </Card>
          </Col>
          <Col className="align-self-end" style={{padding: "0"}} md={12}>
            <Card style={{background: "gray", height: "20vh", textAlign: "left"}}>
              <Card.Body style={{overflow: "hidden"}}>
                <Card.Title>Pending Customers</Card.Title>
                <ListGroup style={{overflowY: "scroll", maxHeight: "80%"}}>
                  {
                    props.customers.pending.map(cust => (
                      <ListGroup.Item key={cust.caseCode} className="d-flex">
                        <Col md={6}>{cust.lastName}, {cust.firstName}</Col>
                        <Col md={6} style={{textAlign: "right"}}>{cust.caseCode}</Col>
                      </ListGroup.Item>
                    ))
                  }
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col className="text-dark align-self-end" style={{padding: "0", paddingBottom: "100px"}} md={12}>
            <Card style={{height: "20vh", textAlign: "left"}}>
              <Card.Body style={{overflow: "hidden"}}>
                <Card.Title>Customers</Card.Title>
                <ListGroup style={{overflowY: "scroll", maxHeight: "80%"}}>
                  {
                    props.customers.completed.map(cust => (
                      <ListGroup.Item key={cust.caseCode} className="d-flex" onClick={() => {
                        axios.get(`${process.env.API_ENDPOINT}/clientinfo?caseCode=${cust.caseCode}&employeeUsername=${props.empId}`)
                          .then(res => {
                            props.setCust(res.data)
                            props.customer()
                          })
                      }}>
                        <Col md={6}>{cust.lastName}, {cust.firstName}</Col>
                      </ListGroup.Item>
                    ))
                  }
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </DashLayout>
    </div>
  )
}

export default EmployeeContainer