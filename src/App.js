import React  from "react";
import "./App.css";
import Store from "./components/Pages/Store";
import { useState, useRef, useEffect } from "react";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/Store/Cart-Provider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/Pages/About";
import Home from "./components/Pages/Home";
import Button from "react-bootstrap/Button";
import ContactUS from "./components/Pages/ContactUS";
import Root from "./components/Pages/Root";
import ErrorPage from "./components/Pages/ErrorPage";
import ProductDetail from "./components/Pages/ProductDetail";
import LoginForm from "./components/Pages/Auth/Login";
import { AuthContextProvider } from "./components/Store/Auth-Context";

const App = () => {
  // const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [isCancelled,setIsCancelled]=useState(false)
  const cancelled = useRef(false);
  let timeoutID = useRef(0);

  const productsArr = [
    {
      id: '001' ,

      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      id: '002',

      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      id: '003',

      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    { 
      id:'004',
      
      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

 


  const router=createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <ErrorPage/>,
      children: [
        { path: "/", element: <Home /> },
        { path: "/Home", element: <Home /> },
        { path: "About", element: <About /> },
        { path: "Store", element: <Store products={productsArr} isLoading={isLoading} error={error}/>},
        { path: "ContactUS", element: <ContactUS/> },
        {path: 'Store/:productId',element: <ProductDetail/>},
        {path: "Login",element:<LoginForm/>}
      ],
     
    },
  ])

  return (
    <>
    <AuthContextProvider>
      <CartProvider>
        <Cart/>
        <RouterProvider router={router}/>
      </CartProvider>
      </AuthContextProvider>
    </>
  );
};

export default React.memo(App);
