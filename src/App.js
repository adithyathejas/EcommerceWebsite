import "./App.css";
import NavBar from "./components/Navbar";
import Store from "./components/Store";
import { useState } from "react";
import Cart from './components/Cart'
import CartProvider from "./components/Store/Cart-Provider";
const App = () => {

  const [cartOpen,setCartOpen]=useState(false)

  const productsArr = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  const CartHandler = () => {
    setCartOpen(!cartOpen)
  }

  return (
    <CartProvider>
      <NavBar onClick={CartHandler}></NavBar>
      <Cart cartOpen={cartOpen} cartHandler={CartHandler}/>
      <Store products={productsArr}></Store>
    </CartProvider>
  );
};

export default App;
