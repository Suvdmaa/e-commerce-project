import Card from 'react-bootstrap/Card';
import { PopularProductsData } from '../data/SeedData';
import { Rating } from "react-simple-star-rating"
import { useState } from 'react';
import DetailPage from '../Detailpage';



function GenreFunc(props) {
  return (
    <button className="btn-click" onClick={() => { clickMe(props) }}>{props.name}</button>
  )
}

function clickMe(props) {
  console.log("upvoted")

  let genrename = props.name

  const genreFilter = PopularProductsData.filter(data => {
    const genreData = data.products.filter(product => {
      console.log(product.genre)
      if (genrename == product.genre) {
        return product
      }
    })
    if (genreData.length > 0) {
      return data
    }
  })
  console.log("genre", genreFilter)
  // const container = document.querySelector("#popularP")
  // console.log("container",container )
  // container.innerHTML = "";

  // genreFilter.map((element) => {
  //   container.innerHTML += Popularproducts(element)
  // })

}


function Popularproducts(props) {
  // console.log(props);
  const [show, setShow] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);
  const [toggle, setToggle] = useState(false)
  const [card, setCard] = useState([])

  function handleUpVote(props) {
    console.log('upvoted')
    console.log(props.title)
  }

  function handleClickHeart(event) {
    console.log("event", event)
    props.setWishList(props.wishlist + 1)

    if(props.position == event){
      console.log("product", props)
      // props.setCart(props.cart + props)
      // console.log(props.cart)
      // setCard(card + props)
      // console.log(setCard)
    }
    // console.log("product", props)
  }
  
  return (
    <div className="popular-products" id="popularP">
      <Card className="card-style">
        <Card.Img className="card-image" src={props.picUrl} onClick={() => { setShow(!show) }} />
        <div >
          <button className="btn-heart" onClick={() => 
            {setToggle(!toggle)
              handleClickHeart(props.position)
            }}>{toggle ? <i class="fa-solid fa-heart"></i> : <i class="fa-regular fa-heart"></i>} </button>
        </div>
                  {/* {console.log('props', props)} */}
        <Card.Body className="cart-container">
          <h5>{props.title}</h5>
          <div className="d-flex">
            <div>
              <p>{props.price}</p>
              <Rating
                initialValue={props.stars} />
              <a onClick={() => { handleUpVote(props) }} className="cart"><i class="bi bi-cart3"></i></a>
            </div>
          </div>
        </Card.Body>
        <DetailPage
          show={show}
          fullscreen={fullscreen}
          setShow={setShow} />
      </Card>

    </div>
  )
}

export { Popularproducts, GenreFunc }