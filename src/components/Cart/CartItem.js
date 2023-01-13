import CartContext from "../Store/Cart-Context.js";
import { useContext } from "react";
import Image from "react-bootstrap/Image";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const CartItem = (props) => {
  const item = props.item;
  const cartCtx = useContext(CartContext);
  const removeItemFromCart = (event) => {
    event.preventDefault();
    cartCtx.removeItem(item.title);
  };

  return (
    <Row className="mb-3">
      <Col>{item.title}</Col> <Col>{item.price}</Col>
      <Col>
        <Image src={item.imageUrl} fluid rounded />{" "}
      </Col>
      <Col>
        <Row>
          <Col xs={6}>x{item.quantity}</Col>
          <Col>
            <Button className="m-2" onClick={removeItemFromCart}>
              remove
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default CartItem;
