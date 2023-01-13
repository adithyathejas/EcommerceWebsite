import {useState} from "react"
import CartContext from "./Cart-Context"

const CartProvider = props => {
    const [items,setItems] = useState([])

    const addItemToCartHandler = item => {
        const ItemIndex = items.findIndex(x=>x.title===item.title)
        if(ItemIndex ===-1 ){
            let newItem= {...item,quantity:1}
            setItems([...items,newItem])
        }
        else{
            let existingItem = items[ItemIndex]
            let newItem = {...existingItem,quantity:Number(existingItem.quantity)+1}
            console.log(items)
            setItems([...items.slice(0,ItemIndex),newItem,...items.slice(ItemIndex+1)])

        }
        }

        const removeItemFromHandler = id =>{
            const ItemIndex = items.findIndex(x=>x.title===id)
            let existingItem = items[ItemIndex]
            if(existingItem.quantity>1){
                let newItem = {...existingItem,quantity:Number(existingItem.quantity)-1}
                setItems([...items.slice(0,ItemIndex),newItem,...items.slice(ItemIndex+1)])
            }
            else{
                setItems([...items.slice(0,ItemIndex),...items.slice(ItemIndex+1)])
            }
            
        }
        const cartContext = {
            items:items,
            toatalAmount:0,
            addItem: addItemToCartHandler,
            removeItem:removeItemFromHandler
            
        }

        return <CartContext.Provider value={cartContext}>
    {props.children}
   </CartContext.Provider>

    }

export default CartProvider