import { useState } from "react";

export default function CartDetail(props) {
  function deleteItem(event) {
    props.setCart(props.cart.filter((item) => item.id !== event));
  }
  const [num, setNum] = useState(1);
  return (
    <div>
      <div className="d-flex cartdetail-container align-items-center justify-content-between">
        <div className="mx-4">
          <img className="cart-pic" src={props.picUrl}></img>
        </div>
        <div className="cartdetail-col py-2 mx-4">
          <h5>{props.title}</h5>
          <p>Color: {props.color}</p>
          <p>Size: 30</p>
        </div>
        <div className="cartdetail-col px-3">
          <p className="price-num">{props.price}</p>
        </div>
        <div className="d-flex cartdetail-col btn-sum px-3">
          <button onClick={() => setNum(num - 1)}>-</button>
          <p className="num">{num}</p>
          <button onClick={() => setNum(num + 1)}>+</button>
        </div>
        <div className="cartdetail-col col-price px-5">
          <p className="price-num">{props.price}</p>
        </div>
        <div className="px-3">
          <button onClick={() => deleteItem(props.id)} className="remove-btn">
            <i class="bi bi-x-circle"></i>
          </button>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}
