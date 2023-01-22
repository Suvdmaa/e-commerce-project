import { Dropdown } from "react-bootstrap";
import Cart from "./Cart";
import { Link } from "react-router-dom";

function ProductFunc(props) {
  console.log("productfuncsection", props.cart);
  const products = props.cart.map((data) => {
    return (
      <Cart
        title={data.title}
        position={data.position}
        price={data.price}
        picUrl={data.picUrl}
        id={data.id}
        stars={data.stars}
        cart={props.cart}
        setCart={props.setCart}
        color={data.color}
      />
    );
  });

  return (
    <div>
      <header>
        <div className="bg-white">
          <div className="App-header d-flex container">
            <p className="p-2 flex-grow-1">{props.text}</p>
            <p className="p-2">
              <i class="bi bi-geo-alt text-dark p-2"></i>
              {props.description}
            </p>
            <p className="p-2">
              <i class="bi bi-truck text-dark p-2"></i>
              {props.order}
            </p>
          </div>
        </div>
        <div className="second-header">
          <div className="secondheader-container container p-4 text-white d-flex justify-content-between">
            <Link to={"/"}>
              <img className="px-5 logo" src={props.logoUrl} />
            </Link>
            <div className="flex-grow-1 ps-3 col-md">
              <input
                type="search"
                placeholder="Search any things"
                className="p-3 w-50 rounded-4"
              ></input>
              <button class="button text-white rounded-4">Search</button>
            </div>

            <Link to={"/sign"}>
              <p className="p-3">
                <i class="bi bi-person px-2"></i>Sign in
              </p>
            </Link>

            <p className="p-3">
              <Dropdown className="dropdown-btn">
                <Dropdown.Toggle>
                  <i class="bi bi-heart px-2"></i>
                  <span className="color-circle p-1 px-2 rounded-circle">
                    {props.cart.length}
                  </span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="wishlistcart">
                  <h2 className="text-center">WishList</h2>
                  {products}
                </Dropdown.Menu>
              </Dropdown>
            </p>

            <Link to={"/cartpage"}>
              <p className="p-3">
                <i class="bi bi-cart3 px-2"></i>
                <span className="color-circle p-1 px-2 rounded-circle">
                  {props.cart.length}
                </span>
              </p>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default ProductFunc;
