import {useState,useContext} from "react"
import CartContext from "./Cart-Context"
import axios from "axios"
import AuthContext from "./Auth-Context"


const CartProvider = props => {
    const authCtx=useContext(AuthContext)
    const [items,setItems] = useState([])
    const [cartOpen,setCartOpen]=useState(false)
    let email=authCtx.email
    let _id=authCtx._id
    const CartHandler = () => {
        setCartOpen(!cartOpen)
      }

    const cartSync=async ()=>{
        try{

            console.log(_id)
            let response = await axios.get(`https://crudcrud.com/api/0c2288e2b93241b6b8af2e0dc6f058bc/Cart/${_id}`) 
              setItems(response.data.items)
        }catch(e){
            console.log(e)
        }         
          }

    const emptyCart=()=>{
        setItems([])
        console.log('cart emptied')
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
            let response = await axios.put(`https://crudcrud.com/api/0c2288e2b93241b6b8af2e0dc6f058bc/Cart/${_id}`,{id:email,items:updatedItems})
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
                let response = await axios.put(`https://crudcrud.com/api/0c2288e2b93241b6b8af2e0dc6f058bc/Cart/${_id}`,{id:email,items:updatedItems})
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
            cartSync:cartSync,
            emptyCart:emptyCart

            
        }

        return <CartContext.Provider value={cartContext}>
    {props.children}
   </CartContext.Provider>

    }

export default CartProvider