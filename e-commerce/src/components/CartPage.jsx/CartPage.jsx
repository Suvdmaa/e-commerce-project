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
      <div className="col-9 container-right">
        <div className="d-flex title-container-right">
          <h4 className="flex-grow-1">Product</h4>
          <h4 className="mx-5">Price</h4>
          <h4 className="mx-5">Quantity</h4>
          <h4 className="mx-5">Subtotal</h4>
        </div>
        <div>{items}</div>
      </div>
      <div className="col-3 container-left">
        <h4 className="title-container-left">Cart total</h4>
        <div className="total-inside-container">
          <div className="d-flex justify-content-between">
            <p className="total-text">Subtotal</p>
            <p className="total-price">$23,20</p>
          </div>
          <hr />
          <div className="coupon-code my-4">
            <input type="number" placeholder="Enter coupon code"></input>
            <button>Apply</button>
          </div>
          <hr />
          <select className="my-3">
            <option>Country</option>
            <option>Mongolia</option>
            <option>America</option>
            <option>Russia</option>
            <option>Chine</option>
          </select>
          <div className="d-flex justify-content-between my-3">
            <p>Total Amount</p>
            <p>$23,20</p>
          </div>
          <button className="checkout-btn">Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
}
