import Card from "react-bootstrap/Card";
import { Rating } from "react-simple-star-rating";
import { useState } from "react";
// import DetailPage from "../detailpage/Detailpage";
import { Link } from "react-router-dom"
import {toast, ToastContainer} from "react-toastify"

function GenreFunc(props) {
  return (
    <button
      className="btn-click"
    >
      {props.name}
    </button>
  );
}

function Popularproducts(props) {
  const [show, setShow] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);
  const [toggle, setToggle] = useState(false);
  const [heart, setHeart] = useState(false);

  function handleUpVote(props) {
    console.log("upvoted");
    console.log(props.title);
  }

  function handleClickHeart(event) {
    // console.log("event", event);
    // console.log(heart);
    // console.log("werty", props);

    // props.setWishList(props.wishlist + 1);
    heart && props.filter((item) => item.id !== event);
    toast(`You liked ${props.title}.`)

    // Add Products to Cart----------------------

    // if (props.id == event) {
    //   console.log("product", props);
    //   props.cart.push(props);
    // }
    // props.setCart(props.cart);

    props.setCart([
      ...props.cart, {
        id: props.id,
        title: props.title,
        price: props.price,
        stars: props.stars,
        picUrl: props.picUrl,
      }
    ])
  }

  return (
    <div className="popular-products" id="popularP">
      <Card className="card-style">
        <Link to="/detailpage">
          <Card.Img
            className="card-image"
            src={props.picUrl}
            onClick={() => {
              setShow(!show);
            }}
          />
        </Link>
        <div>
          <button
            id={props.id}
            className="btn-heart"
            onClick={() => {
              setToggle(!toggle);
              handleClickHeart(props.id);
              setHeart(!heart);
            }}
          >
            {toggle ? (
              <i class="fa-solid fa-heart"></i>
            ) : (
              <i class="fa-regular fa-heart"></i>
            )}{" "}
          </button>
        </div>
        <Card.Body className="cart-container">
          <h5>{props.title}</h5>
          <div className="d-flex">
            <div>
              <p>{props.price}</p>
              <Rating initialValue={props.stars} />
              <a
                onClick={() => {
                  handleUpVote(props);
                }}
                className="cart"
              >
                <i class="bi bi-cart3"></i>
              </a>
            </div>
          </div>
        </Card.Body>
        {/* <DetailPage show={show} fullscreen={fullscreen} setShow={setShow} /> */}
      </Card>
      <ToastContainer />
    </div>
  );
}

export { Popularproducts, GenreFunc };
