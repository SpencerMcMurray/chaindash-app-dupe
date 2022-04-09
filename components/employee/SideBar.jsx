import Image from "next/image"

const SideBar = (props) => {
  return (
    <div style={{width: "15%", height: "100vh", background: "#181434"}}>
      <div style={{position: "relative"}}>
        <Image
          src='/logo.png'
          alt='ChainDash'
          width={"200%"}
          height={"200%"}
          data-testid="logo"
        />
      </div>
      <div style={{color: "#8f7de9", fontSize: "1.5em", textAlign: "left"}}>
        <div style={{paddingTop: "30%", marginLeft: "15%"}}>
          <span onClick={props.addCustomers}>
            <i className="fa-solid fa-person-circle-plus" /> Add Customers
          </span>
        </div>
      </div>
    </div>
  )
}

export default SideBar