import React from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


const NavBar = (props)=>{
    return (
        <Navbar  variant="dark" bg='dark' expand="lg" >
          <Container fluid>
            <Navbar.Brand href="#home">MOVIE ARCHEVE</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Store</Nav.Link>
                <Nav.Link href="#link">About</Nav.Link>
              </Nav>
              <Nav>
              <Button variant="primary" onClick={props.onClick}>Cart</Button>
          </Nav>

            </Navbar.Collapse>
          </Container>
        </Navbar>
      );

}

export default NavBar