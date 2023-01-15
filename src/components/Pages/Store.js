import React from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import Box from "../UI/Box";

let Store = (props) => {
    const products = props.products.map( (item) => {
        return <Box key={item.title} item={item}></Box>
    } 
    )
    const isLoading=props.isLoading

  return (
    <>
      <Container fluid className="mt-3 d-flex justify-content-around ">
        <Row>
           {!isLoading&&products}
           {!isLoading&&products.length===0&&<ul>No Movies To Show</ul>}
           {isLoading&&<Spinner></Spinner>}
          
        </Row>
        {console.log('hi')}
      </Container>
    </>
  );
};

export default Store;
