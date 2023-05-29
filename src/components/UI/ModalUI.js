import Modal from 'react-bootstrap/Modal';
import { Button, Container } from "react-bootstrap";

const ModalUI = (props)=> {
    const handleClose = props.ModalHandler
    const emptyCart = props.emptyCart
   
   return (<Modal show={props.Show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Cart</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Container>
      {props.children}
        </Container>
        </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={emptyCart}>
        empty cart
      </Button>
    </Modal.Footer>
  </Modal>
    );
}

export default ModalUI