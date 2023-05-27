import { createContext } from "react"
import React from 'react'

const CartContext = React.createContext({
    items:[],
    toatalAmount:0,
    addItem: item =>{},
    removeItem:(id)=>{},
    cartState: null,
    CartHandle:()=>{},
    cartSync:()=>{}
    
})


export default CartContext