import React, { useEffect } from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge'
import { BsFillCartFill } from "react-icons/bs";
import { useContext } from "react";
import CartContext from "./Store/Cart-Context";
import Row from 'react-bootstrap/Row'
import { NavLink } from "react-router-dom";


const NavBar = (props)=>{
  const cartCtx= useContext(CartContext)
  
  let badgeNum = 0

       cartCtx.items.forEach(item=>{
        badgeNum = badgeNum+Number(item.quantity)
       })


    return (
        <Navbar  variant="dark" bg='dark' expand="lg" >
          <Container fluid>
            <Navbar.Brand href="#home">MOVIE ARCHEVE</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav nav-tabs" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto ">
              {/* <NavLink className='nav-link'   to="/Home">Home</NavLink> */}
              <NavLink className='nav-link'  to="Home">Home</NavLink>
                <NavLink className='nav-link '   to="Store">Store</NavLink>
                <NavLink className='nav-link '  to="About">About</NavLink>
                <NavLink className='nav-link '   to="ContactUS">Contact US </NavLink>
              </Nav>
              <Nav>
                <Container>
                  {console.log('NavBar')}
                <Row><Button variant="primary" onClick={cartCtx.CartHandle}><BsFillCartFill/><Badge bg="primary" pill>{badgeNum}</Badge></Button></Row>
                </Container>
                
              
          </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );

}

export default NavBar