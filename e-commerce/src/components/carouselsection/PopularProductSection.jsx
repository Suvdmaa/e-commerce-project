import Card from "react-bootstrap/Card";
import { Rating } from "react-simple-star-rating";
import { useState } from "react";
// import DetailPage from "../detailpage/Detailpage";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { PopularProductsData } from "../../data/SeedData";
// import { PopularProductsData } from "../../data/SeedData";
import { useParams } from "react-router-dom";

function GenreFunc(props) {
  return <button className="btn-click">{props.name}</button>;
}

function Popularproducts(props) {
  const [toggle, setToggle] = useState(false);
  const [heart, setHeart] = useState(false);

  const { id } = useParams();
  let foundProduct = {};
  if (id) {
    foundProduct = PopularProductsData.map((product) => {
      product.products.map((data) => {
        if (data.position == id) {
          return data;
        }
      });
      return product;
    })[0];
  }

  if (Object.keys(props.length > 0)) {
    foundProduct = props.product;
  }

  const product = foundProduct;
  const liked = props.cart.filter((wish) => wish.id === props.id)[0];
  console.log(liked);

  function handleUpVote(event) {
    console.log("upvoted");

    if (event === props.id) {
      props.setCart([
        ...props.cart,
        {
          id: props.id,
          title: props.title,
          price: props.price,
          stars: props.stars,
          picUrl: props.picUrl,
          color: props.color,
        },
      ]);
    }
    console.log(props.cart);
  }

  function handleClickHeart(event) {
    toast(`You liked ${props.title}.`);

    // Add Products to Cart----------------------

    // if (props.id == event) {
    //   console.log("product", props);
    //   props.cart.push(props.title);
    // }
    // props.setCart(props.cart);

    if (event === props.id) {
      props.setCart([
        ...props.cart,
        {
          id: props.id,
          title: props.title,
          price: props.price,
          stars: props.stars,
          picUrl: props.picUrl,
          color: props.color,
        },
      ]);
    }
    console.log(props.cart);
  }

  return (
    <div className="popular-products" id="popularP">
      <Card className="card-style">
        {/*Link-eer id-giinhaa turuluur uur uur page neeh arga mun App.js dotor route ashiglahdaa /detailpage/:id iig ashiglana */}
        <Link
          to={`/detailpage/${props.position}`}
          state={{
            price: props.price,
            title: props.title,
            position: props.position,
            picUrl: props.picUrl,
            id: props.id,
            stars: props.stars,
            text: props.text,
            picUrl1: props.picUrl1,
            picUrl2: props.picUrl2,
            available: props.available,
            sku: props.sku,
            color: props.color,
          }}
        >
          <Card.Img className="card-image" src={props.picUrl} />
        </Link>
        <div>
          <button
            id={props.id}
            className="btn-heart"
            onClick={() => {
              setToggle(!toggle);
              handleClickHeart(props.id);
              setHeart(!heart);
              if (!liked) {
                const likedProduct = {
                  id: product.id,
                  name: product.title,
                  liked: true,
                  pic: product.picUrl,
                };
                props.setCart([...props.cart, likedProduct]);
              } else {
                props.setCart(props.cart.filter((w) => w.id !== props.id));
              }
            }}
          >
            {liked ? (
              <i class="fa-solid fa-heart"></i>
            ) : (
              <i class="fa-regular fa-heart"></i>
            )}
          </button>
        </div>
        <Card.Body className="cart-container">
          <h5>{props.title}</h5>
          <div className="d-flex">
            <div>
              <p>${props.price}</p>
              <Rating initialValue={props.stars} />
              <a
                onClick={() => {
                  handleUpVote(props.id);
                  setHeart(!heart);
                  if (!liked) {
                    const likedProduct = {
                      id: product.id,
                      name: product.title,
                      liked: true,
                      pic: product.picUrl,
                    };
                    props.setCart([...props.cart, likedProduct]);
                  } else {
                    props.setCart(props.cart.filter((w) => w.id !== props.id));
                  }
                }}
                className="cart"
              >
                {liked ? (
                  <i class="fa-solid fa-cart-shopping"></i>
                ) : (
                  <i class="bi bi-cart3"></i>
                )}
              </a>
            </div>
          </div>
        </Card.Body>
      </Card>
      <ToastContainer />
    </div>
  );
}

export { Popularproducts, GenreFunc };
