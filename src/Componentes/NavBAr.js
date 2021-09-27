import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap'
import StarRating from './StarRating';

const NavBar = ({text,rating,handelchange,handelrating}) => {
    return (
        <div>
             <Navbar style={{backgroundColor:"rgb(15, 62, 100)",height:"140px"}} >
    <Container>
    <Navbar.Brand href="#home" style={{color:"#E50914",fontSize:"50px",lineHeight:"50px",fontFamily:"nf-icon",textDecoration:"none solid rgb(229 , 9 , 20)",wordSpacing:"0px",verticalAlign:"middle"}}>MARKELON</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home"></Nav.Link>
      <Nav.Link href="#features"></Nav.Link>
      <Nav.Link href="#pricing"></Nav.Link>
      <form  >
        <input type="text" value={text} onChange={handelchange} />
        <StarRating rating={rating} handelrating={handelrating}/>
      </form>
    </Nav>
    </Container>
  </Navbar>
        </div>
    )
}

export default NavBar