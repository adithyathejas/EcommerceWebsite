import CartItem from "./CartItem";
import { useContext} from "react";
import CartContext from "../Store/Cart-Context";
import ModalUI from "../UI/ModalUI";


const Cart = (props) => {
 const cartCtx=useContext(CartContext)
   const CartItems = cartCtx.items.map(
    (item) => {
      
       return <CartItem key={item.title} item={item}></CartItem>
       
    }
  )

   




    return (
      <ModalUI ModalHandler={cartCtx.CartHandle} Show={cartCtx.cartState} emptyCart={cartCtx.emptyCart}>
          {CartItems}
         </ModalUI>
    )
    
}

export default Cart