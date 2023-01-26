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

  // useEffect(() => {
  //   fetchMovies();
  // }, []);
  // console.log("app");

  // const fetchMovies = async function MovieFetchHandler() {
  //   setIsLoading(true);
  //   setError(null);
  //   try {
  //     const response = await fetch("https://swapi.dev/api/films/");
  //     console.log(response);
  //     if (!response.ok) {
  //       throw new Error("Something went wrong...retrying");
  //     }

  //     const data = await response.json();

  //     const transformedMovies = data.results.map((movieData) => {
  //       return {
  //         id: movieData.episode_id,
  //         title: movieData.title,
  //         openingText: movieData.opening_crawl,
  //         releaseDate: movieData.release_date,
  //       };
  //     });

  //     setMovies(transformedMovies);
  //     console.log(121);
  //   } catch (Error) {
  //     setError(Error.message);
  //     // if(!cancelled.current){
  //     //   timeoutID.current=setTimeout(MovieFetchHandler,5000)
  //     //   console.log('last timer:',timeoutID)
  //     //   }
  //   }
  //   setIsLoading(false);
  //   console.log(cancelled);
  // };

  // function cancelFetchHandler() {
  //   clearTimeout(timeoutID.current);
  //   console.log("canceller timer", timeoutID.current);
  //   cancelled.current = true;
  //   console.log("cancelled");
  //   console.log(cancelled);
  //   setError("search cancelled");
  // }

  // function startFetchHandler(){
  //   cancelled.current=false
  //   clearTimeout()
  //   MovieFetchHandler()

  // }


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
        {path: 'Store/:productId',element: <ProductDetail/>}
      ],
     
    },
  ])

  return (
    <>
      <CartProvider>
        <Cart/>
        <RouterProvider router={router}/>
      </CartProvider>
    </>
  );
};

export default React.memo(App);
