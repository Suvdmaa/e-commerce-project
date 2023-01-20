import CartDetail from "./CartDetail";

export default function CartPage(props) {
  const items = props.cart.map((data) => {
    return (
      <CartDetail
        title={data.title}
        position={data.position}
        price={data.price}
        picUrl={data.picUrl}
        id={data.id}
        stars={data.stars}
        cart={props.cart}
        setCart={props.setCart}
      />
    );
  });
  return (
    <div className="d-flex container">
      <div className="col-8 container-right">
        <div className="d-flex title-container-right">
          <h4 className="flex-grow-1">Product</h4>
          <h4 className="mx-5">Price</h4>
          <h4 className="mx-5">Quantity</h4>
          <h4 className="mx-5">Subtotal</h4>
        </div>
        <div>{items}</div>
      </div>
      <div className="col-4 container-left">
        <h4 className="title-container-left">Cart total</h4>
        <div>
          <p>Subtotal</p>
          <p>$23,20</p>
        </div>
        <hr />
        <input type="number" placeholder="Enter coupon code"></input>
        <button>Apply</button>
        <hr />
        <select>
          <option>Country</option>
          <option>Mongolia</option>
          <option>America</option>
          <option>Russia</option>
          <option>Chine</option>
        </select>
        <div>
          <p>Total Amount</p>
          <p>$23,20</p>
        </div>
        <button>Proceed to checkout</button>
      </div>
    </div>
  );
}
