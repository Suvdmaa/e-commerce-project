import './App.css';

import Home from "./components/router/Home"
import SignIn from './components/router/Sign-in';
import { Route, Routes } from 'react-router-dom';
import {useState} from "react"
import Header from './components/header/Header';
import LogIn from './components/router/Login';




function App(){

  const [wishlist, setWishList] = useState(0)
  const [cart, setCart] = useState([])

  return (
    <div>
      <Header 
      wishlist={wishlist} 
      setWishList={setWishList}
      cart={cart}
      setCart={setCart}
      />
      
      <Routes>
        <Route exact path='/' 
        element={<Home 
        wishlist={wishlist} 
        setWishList={setWishList}
        cart={cart}
        setCart={setCart}
        />} />
        <Route path="/sign" element={<SignIn 
        wishlist={wishlist} 
        setWishList={setWishList}
        cart={cart}
        setCart={setCart}
        />} />
        <Route path="/login" element={<LogIn />}/>
      </Routes>
    </div>
  )
}

export default App