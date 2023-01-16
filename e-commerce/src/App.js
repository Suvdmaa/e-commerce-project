import './App.css';

import Home from "./components/Home"
import SignIn from './components/Sign-in';
import { Route, Routes } from 'react-router-dom';



function App(){
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path="/sign" element={<SignIn />} />
      </Routes>
    </div>
  )
}

export default App