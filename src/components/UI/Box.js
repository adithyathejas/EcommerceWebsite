import React from "react";
import { Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Box.css'
import { useContext } from "react";
import CartContext from "../Store/Cart-Context";
import { Link } from "react-router-dom";


const Box = (props) => {
  const cartCtx = useContext(CartContext)
  const item=props.item
  console.log("item",item)

  const addToCart = ()=> {
    cartCtx.addItem(item)
  }


    return(
        <Col xs={6} className={'mb-5'} >
         <Card style={{ width: '21rem' }} className='box'>
          <Link to={item.id}>
         <Card.Img variant="top" src={item.imageUrl} className='img-holder box' />
         </Link>
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
       
        <Card.Text>
          {item.price}
        </Card.Text>
        <Button onClick={addToCart} variant="primary">purchase</Button>
      </Card.Body>
    </Card>
        </Col>
    )

}

export default Box