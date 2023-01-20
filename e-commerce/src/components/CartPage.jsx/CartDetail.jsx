export default function CartDetail(props) {
  function deleteItem(event) {
    props.setCart(props.cart.filter((item) => item.id !== event));
  }

  return (
    <div>
      <div className="d-flex cartdetail-container">
        <div>
          <img className="cart-pic" src={props.picUrl}></img>
        </div>
        <div>
          <h5>{props.title}</h5>
          <p>Color: </p>
          <p>Size: 30</p>
        </div>
        <div>
          <p>{props.price}</p>
        </div>
        <div className="d-flex">
          <button>-</button>
          <p>1</p>
          <button>+</button>
        </div>
        <div>
          <p>{props.price}</p>
        </div>
        <div>
          <button onClick={() => deleteItem(props.id)}>
            <i class="fa-solid fa-square-xmark"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
