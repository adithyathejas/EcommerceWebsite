import "./App.css";
import NavBar from "./components/Navbar";
import Store from "./components/Pages/Store";
import { useState } from "react";
import Cart from './components/Cart/Cart'
import CartProvider from "./components/Store/Cart-Provider";
import { Route,Link } from "react-router-dom";
import About from "./components/Pages/About";



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
      <>
      
      <CartProvider>
      <Cart cartOpen={cartOpen} cartHandler={CartHandler}/>
      <NavBar onClick={CartHandler}></NavBar>
      <Route path="/Store">
      <Store  products={productsArr}></Store>
      </Route>
      <Route path="/About">
      <About></About>
      </Route>
      
      </CartProvider>
      
      </>
    
  );
};

export default App;
