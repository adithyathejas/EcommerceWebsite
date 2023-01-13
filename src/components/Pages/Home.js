import { Container,Row,Col,Image } from "react-bootstrap";
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Classes from './Home.module.css';

const Home = (props)=>{

    return (
        <Container fluid>
        <Row className="text-bg-dark" >
            <Col className="justify-content-center">
            <p className="fs-1"><p className={Classes.heading}>The Movie Archeve</p></p>
            </Col>
        </Row>
        <Row>
        <Row>   
            <h2 className="font-weight-bold text-center">
           <b>Latest Releases</b>
           </h2>
           </Row>
           <Row>
           <Carousel slide={false} className={Classes.carousel}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://prasadyash2411.github.io/ecom-website/img/Album%204.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://prasadyash2411.github.io/ecom-website/img/Album%204.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://prasadyash2411.github.io/ecom-website/img/Album%204.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
           
                
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

