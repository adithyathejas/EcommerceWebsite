import React from "react";
import { Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Box.css'


const Box = (props) => {
    return(
        <Col xs={6} className={'mb-5'} >
         <Card style={{ width: '21rem' }} className='box'>
         <Card.Img variant="top" src={props.image} className='img-holder box' />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.price}
        </Card.Text>
        <Button variant="primary">purchase</Button>
      </Card.Body>
    </Card>
        </Col>
    )

}

export default Box