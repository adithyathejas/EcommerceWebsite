import CartItem from "./CartItem";
import Modal from 'react-bootstrap/Modal';
import { Button, Container, Row } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import CartContext from "../Store/Cart-Context";
import AuthContext from "../Store/Auth-Context";
import ModalUI from "../UI/ModalUI";
import axios from 'axios'


const Cart = (props) => {
 const cartCtx=useContext(CartContext)
   const CartItems = cartCtx.items.map(
    (item) => {
      
       return <CartItem key={item.title} item={item}></CartItem>
       
    }
  )

   




    return (
      <ModalUI ModalHandler={cartCtx.CartHandle} Show={cartCtx.cartState}>
          {CartItems}
         </ModalUI>
    )
    
}

export default Cart