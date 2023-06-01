import { Container,Row,Col,Card,Carousel } from "react-bootstrap";
import React, { useState } from 'react';
import Classes from './Home.module.css';

const Home = (props)=>{
    const albums = [
        {
          title: 'Colors',
          imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        },
        {
          title: 'Black and White',
          imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        },
      ];

    return (
        <Container fluid>
        <Row className="text-bg-dark" >
            <Col className="justify-content-center">
            <p className={Classes.heading}>The Color Space</p>
            </Col>
        </Row>
        <Row>
        <Row>   
            <h2 className="font-weight-bold text-center">
           <b>Latest Releases</b>
           </h2>
           </Row>
           <div style={{ display: 'flex', justifyContent: 'center' }}>
           <Carousel>
      {albums.map((album, index) => (
        
        <Carousel.Item key={index}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={album.imageUrl} />
            <Card.Body>
              <Card.Title>{album.title}</Card.Title>
            </Card.Body>
          </Card>
        </Carousel.Item>
      ))}
    </Carousel>
    </div>
           <Row>
            
           </Row>
        </Row>

        <footer className="fixed-bottom justify-content-center">
    <Row className="mt-4 text-bg-dark">
          <Col className="justify-content-center">
          <p className="fs-1">Color Space</p>
          </Col>
          
       </Row>
    </footer>

    </Container>
    );

}

export default Home

