import { Container,Row,Col,Image } from "react-bootstrap";
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Classes from './Home.module.css';

const Home = (props)=>{

    return (
        <Container fluid>
        <Row className="text-bg-dark" >
            <Col className="justify-content-center">
            <p className={Classes.heading}>The Movie Archeve</p>
            </Col>
        </Row>
        <Row>
        <Row>   
            <h2 className="font-weight-bold text-center">
           <b>Latest Releases</b>
           </h2>
           </Row>
           <Row>
            
           </Row>
        </Row>

        <footer className="fixed-bottom justify-content-center">
    <Row className="mt-4 text-bg-dark">
          <Col className="justify-content-center">
          <p className="fs-1">Movie Archeve</p>
          </Col>
          
       </Row>
    </footer>

    </Container>
    );

}

export default Home

