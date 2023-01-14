import "./App.css";
import NavBar from "./components/Navbar";
import Store from "./components/Pages/Store";
import { useState } from "react";
import Cart from './components/Cart/Cart'
import CartProvider from "./components/Store/Cart-Provider";
import { Route} from "react-router-dom";
import About from "./components/Pages/About";
import Home from "./components/Pages/Home";
import Button from "react-bootstrap/Button"


const App = () => {

  const [cartOpen,setCartOpen]=useState(false)
  const [movies,setMovies]=useState([])

  // const productsArr = [
  //   {
  //     title: "Colors",

  //     price: 100,

  //     imageUrl:
  //       "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  //   },

  //   {
  //     title: "Black and white Colors",

  //     price: 50,

  //     imageUrl:
  //       "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  //   },

  //   {
  //     title: "Yellow and Black Colors",

  //     price: 70,

  //     imageUrl:
  //       "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  //   },

  //   {
  //     title: "Blue Color",

  //     price: 100,

  //     imageUrl:
  //       "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  //   },
  // ];

  async function MovieFetchHandler(){
    const response = await fetch('https://swapi.dev/api/films/')
    console.log(response)
    const data = await response.json()

    const transformedMovies = data.results.map((movieData)=>{
      return {
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate:movieData.release_date,
      }
    })

    setMovies(transformedMovies)

  }

  const CartHandler = () => {
    setCartOpen(!cartOpen)
  }

  return (
      <>
      <Button onClick={MovieFetchHandler}>Load Page</Button>
      <CartProvider>
      <Cart cartOpen={cartOpen} cartHandler={CartHandler}/>
      <NavBar onClick={CartHandler}></NavBar>
      <Route path="/Store">
      <Store products={movies}></Store>
      {console.log(movies)}
      </Route>
      <Route path="/About">
      <About></About>
      </Route>
      <Route path="/Home" >
      <Home></Home>
      </Route>
      
      </CartProvider>
      
      </>
    
  );
};

export default App;
