import CartItem from "./CartItem";
import Modal from 'react-bootstrap/Modal';
import { Button, Container, Row } from "react-bootstrap";
import { useContext } from "react";
import CartContext from "../Store/Cart-Context";
import ModalUI from "../UI/ModalUI";


const Cart = (props) => {
 

  const handleClose = props.cartHandler
  const cartCtx = useContext(CartContext)

  

    const CartItems = cartCtx.items.map(
      (item) => {
        
         return <CartItem key={item.title} item={item}></CartItem>
         
      }
    );


    return (
      <ModalUI cartHandler={handleClose} Show={props.cartOpen}>
          {CartItems}
         </ModalUI>
    )
    
}

export default Cart