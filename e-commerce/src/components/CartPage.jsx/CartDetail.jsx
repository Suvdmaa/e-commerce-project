export default function CartDetail(props) {
  function deleteItem(event) {
    props.setCart(props.cart.filter((item) => item.id !== event));
  }

  return (
    <div>
      <div className="d-flex cartdetail-container align-items-center justify-content-between">
        <div className="mx-4">
          <img className="cart-pic" src={props.picUrl}></img>
        </div>
        <div className="cartdetail-col py-2 mx-4">
          <h5>{props.title}</h5>
          <p>Color: </p>
          <p>Size: 30</p>
        </div>
        <div className="cartdetail-col px-3">
          <p className="price-num">{props.price}</p>
        </div>
        <div className="d-flex cartdetail-col btn-sum px-3">
          <button>-</button>
          <p className="num">1</p>
          <button>+</button>
        </div>
        <div className="cartdetail-col col-price px-5">
          <p className="price-num">{props.price}</p>
        </div>
        <div className="px-3">
          <button onClick={() => deleteItem(props.id)}>
            <i class="fa-solid fa-square-xmark"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
