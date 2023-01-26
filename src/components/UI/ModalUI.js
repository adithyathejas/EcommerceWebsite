import Modal from 'react-bootstrap/Modal';
import { Button, Container, Row } from "react-bootstrap";

const ModalUI = (props)=> {
    const handleClose = props.ModalHandler
   
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
      <Button variant="primary" onClick={handleClose}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>
    );
}

export default ModalUI