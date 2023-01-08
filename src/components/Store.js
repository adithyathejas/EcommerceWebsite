import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Box from "./Box";

let Store = (props) => {
    const products = props.products.map( (item) => {
        return <Box title={item.title} price={item.price} image={item.imageUrl}></Box>
    } 
    )
  return (
    <>
      <Container fluid className="mt-3 d-flex justify-content-around ">
        <Row>
           {products}
          
        </Row>
      </Container>
    </>
  );
};

export default Store;