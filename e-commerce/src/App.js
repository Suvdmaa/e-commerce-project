import './App.css';
import Home from "./components/router/Home"
import SignIn from './components/router/Sign-in';
import { Route, Routes } from 'react-router-dom';
import {useState} from "react"
import Header from './components/header/Header';
import LogIn from './components/router/Login';
import DetailPage from './components/detailpage/Detailpage';




function App(){
  const [cart, setCart] = useState([])

  return (
    <div>
      <Header 
      cart={cart}
      setCart={setCart}
      />
      
      <Routes>
        <Route exact path='/' 
        element={<Home 
        cart={cart}
        setCart={setCart}
        />} />
        <Route path="/sign" element={<SignIn 
        cart={cart}
        setCart={setCart}
        />} />
        <Route path="/login" element={<LogIn />}/>
        <Route path="/detailpage/:id" element={<DetailPage />}/>
      </Routes>
    </div>
  )
}

export default App