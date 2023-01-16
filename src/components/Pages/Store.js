import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import Box from "../UI/Box";

let Store = (props) => {
    const products = props.products.map( (item) => {
        return <Box key={item.title} item={item}></Box>
    } 
    )
    const isLoading=props.isLoading
    const error = props.error
    console.log("hi",error)

  return (
    <>
      <Row className="mt-3 ms-5 me-5">{products.length===0&&props.children}</Row>  
      <Container fluid className="mt-3 d-flex justify-content-around ">
      
        <Row>    
          {!isLoading&&products.length>0&&products}
           {!isLoading&&products.length===0&& <ul>No Movies To Show</ul>}
           {error}  
        </Row>
        {console.log('hi')}
      </Container>
    </>
  );
};

export default Store;
