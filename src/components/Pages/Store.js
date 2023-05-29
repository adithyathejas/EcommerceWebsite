import React from "react";
import { Container, Row} from "react-bootstrap";
import { useNavigate} from "react-router-dom";
import AuthContext from "../Store/Auth-Context"
import { useEffect,useContext} from "react";
import Box from "../UI/Box";
import CartContext from "../Store/Cart-Context";
import axios from 'axios'


let Store =  (props) => {
  const cartCtx=useContext(CartContext)
  const authCtx = useContext(AuthContext)
  const navigate = useNavigate()
  useEffect( () => {
    async function fetchdata(){
      if(!authCtx.isLoggedIn){
        navigate("/Login",{replace:true})
        console.log('navigated to login')
      }
      else{
        cartCtx.cartSync()
        console.log("cartupdated")
      }
    }
   fetchdata();
    
   
  }, [authCtx.isLoggedIn]);
  
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
        {console.log('store rendered')}
      </Container>
    </>
  );
};

export default Store;
