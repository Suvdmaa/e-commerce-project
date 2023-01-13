// import Card from 'react-bootstrap/Card';
// import ReactStars from "react-rating-stars-component";
import { useState } from "react";



function ProductFunc(props) {

  const [toggle, setToggle] = useState(false)

  return (
    <div>
      <header>
        <div className="bg-white">
        <div className="App-header d-flex container">
          <p className="p-2 flex-grow-1">{props.text}</p>
          <p className="p-2">
            <i class="bi bi-geo-alt text-dark p-2"></i>
            {props.description}</p>
          <p className="p-2">
            <i class="bi bi-truck text-dark p-2"></i>
            {props.order}</p>
        </div>

        </div>
        <div className="second-header">
        <div className="container p-4 text-white d-flex justify-content-between">
          <img className="px-5 logo" src={props.logoUrl} />
          <div className="flex-grow-1 ps-3 col-md">
            <input type="search" placeholder="Search any things" className="p-3 w-50 rounded-4"></input>
            <button class="button text-white rounded-4">Search</button>
          </div>
          <p className="p-3"><i class="bi bi-person px-2"></i>Sign in</p>
          
          <p className="p-3"><a onClick={() =>{
          setToggle(!toggle)
          }}>
            <i class="bi bi-heart px-2" ></i>
            <span className="color-circle p-1 px-2 rounded-circle">
              {props.wishlist}
              {toggle ? <div className="d-none"></div> : <div className="shocart">{props.cart}</div>}
              </span>
          </a></p>

          <p className="p-3"><i class="bi bi-cart3 px-2"></i><span className="color-circle p-1 px-2 rounded-circle">0</span></p>

        </div>

        </div>
      </header>
    </div>
  );
}



export default ProductFunc ;