import { useState } from "react";

export default function CartDetail(props) {
  const [num, setNum] = useState(1);
  const [sum, setSum] = useState(props.price);

  function deleteItem(event) {
    props.setCart(props.cart.filter((item) => item.id !== event));
  }

  function handleMinus() {
    setNum(num - 1);
    setSum(sum - props.price);
  }

  function handlePlus() {
    setNum(num + 1);
    setSum(sum + props.price);
  }

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
          <button onClick={() => handleMinus()}>-</button>
          <p className="num">{num}</p>
          <button onClick={() => handlePlus()}>+</button>
        </div>
        <div className="cartdetail-col col-price px-5">
          <p className="price-num">{sum}</p>
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
