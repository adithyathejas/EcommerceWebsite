import {useState,useContext} from "react"
import CartContext from "./Cart-Context"
import axios from "axios"
import AuthContext from "./Auth-Context"
import { useEffect } from "react"

const CartProvider = props => {
    const [items,setItems] = useState([])
    const [cartOpen,setCartOpen]=useState(false)
    let email=localStorage.getItem('email')
    let _id=localStorage.getItem('userID')
    const CartHandler = () => {
        setCartOpen(!cartOpen)
      }

    const cartSync=async ()=>{
        try{

        
            let response = await axios.get(`https://crudcrud.com/api/9a3c7c465c5a4ad695e97f7f29c54c80/Cart/${_id}`) 
              setItems(response.data.items)
        }catch(e){
            console.log(e)
        }         
          }
          

    

     const addItemToCartHandler =  async (item) => {
        const ItemIndex = items.findIndex(x=>x.title===item.title)
        let updatedItems = items
        if(ItemIndex ===-1 ){
             let newItem= {...item,quantity:1}
            updatedItems=[...items,newItem]
        }
        else{
            let existingItem = items[ItemIndex]
            let newItem = {...existingItem,quantity:Number(existingItem.quantity)+1}
             updatedItems=[...items.slice(0,ItemIndex),newItem,...items.slice(ItemIndex+1)]
        }
        try{
            let response = await axios.put(`https://crudcrud.com/api/9a3c7c465c5a4ad695e97f7f29c54c80/Cart/${_id}`,{id:email,items:updatedItems})
            console.log(response.data)
        }catch(e){
            console.error(e);
        }
            
            setItems(updatedItems)
       
        
        
        
        
    }

        const removeItemFromHandler = async  id =>{
            const ItemIndex = items.findIndex(x=>x.title===id)
            let updatedItems = items
            let existingItem = items[ItemIndex]
            if(existingItem.quantity>1){
                let newItem = {...existingItem,quantity:Number(existingItem.quantity)-1}
                updatedItems=[...items.slice(0,ItemIndex),newItem,...items.slice(ItemIndex+1)]
            }
            else{
                updatedItems=[...items.slice(0,ItemIndex),...items.slice(ItemIndex+1)]
            }
            try{
                let response = await axios.put(`https://crudcrud.com/api/9a3c7c465c5a4ad695e97f7f29c54c80/Cart/${_id}`,{id:email,items:updatedItems})
                console.log(response.data)
            }catch(e){

            }
               
                setItems(updatedItems)
          
            
           
        }
        
        const cartContext = {
            items:items,
            toatalAmount:0,
            addItem: addItemToCartHandler,
            removeItem:removeItemFromHandler,
            cartState: cartOpen,
            CartHandle:CartHandler,
            cartSync:cartSync

            
        }

        return <CartContext.Provider value={cartContext}>
    {props.children}
   </CartContext.Provider>

    }

export default CartProvider