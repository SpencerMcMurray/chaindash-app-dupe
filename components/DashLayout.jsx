import { Container } from "react-bootstrap"

const DashLayout = props => {
  return (
    <div style={{background: "linear-gradient(0deg, #7cbbe4, #8f7de9)"}}>
      <div style={{width: "100%", minHeight: "7vh", background: "white", textAlign: "left"}}>
        <span data-testid="name" className="m-4 display-4">Hello {props.name}</span>
      </div>
      <Container style={{minHeight: "93vh"}}>
        {props.children}
      </Container>
    </div>
  )
}

export default DashLayout