import CartItem from "./CartItem";
import Modal from 'react-bootstrap/Modal';
import { Button, Container, Row } from "react-bootstrap";
import { useContext } from "react";
import CartContext from "./Store/Cart-Context";


const Cart = (props) => {
 

  const handleClose = props.cartHandler
  const cartCtx = useContext(CartContext)

  

    const CartItems = cartCtx.items.map(
      (item) => {
        
         return <CartItem key={item.title} item={item}></CartItem>
         
      }
    );


    return (
      <Modal show={props.cartOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
          {CartItems}
            </Container>
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    )
    
}

export default Cart