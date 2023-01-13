import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Box from "./UI/Box";

let Store = (props) => {
    const products = props.products.map( (item) => {
        return <Box key={item.title} item={item}></Box>
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
