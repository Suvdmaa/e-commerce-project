import Card from 'react-bootstrap/Card';
import ReactStars from "react-rating-stars-component";
import { PopularProductsData } from '../data/Seed';
import {Rating} from "react-simple-star-rating"

function GenreFunc (props){  
  return (
    <button className="btn-click" onClick={() => {clickMe(props)}}>{props.name}</button>
  )
}

function clickMe(props){
  console.log("upvoted")
 
  let genrename = props.name

  const genreFilter = PopularProductsData.filter(data => {
    const genreData = data.products.filter(product =>{
      console.log(product.genre)
      if(genrename == product.genre){
        return product
      }
    })
    if(genreData.length > 0){
      return data
    }
  })
  console.log("genre",genreFilter)
  // const container = document.querySelector("#popularP")
  // console.log("container",container )
  // container.innerHTML = "";
 
  // genreFilter.map((element) => {
  //   container.innerHTML += Popularproducts(element)
  // })
  
  }


function Popularproducts(props) {

    const ratingChanged = (newRating) => {
      console.log(newRating)
    };

    function handleUpVote(props){
      console.log('upvoted')
      console.log(props.title)
    }
    return (
      <div className="popular-products" id="popularP">
        <Card className="card-style">
          <Card.Img className="card-image" src={props.picUrl} />
          <button className="btn-heart" ><i class="fa-regular fa-heart"></i></button>
          <Card.Body className="cart-container">
            <h5>{props.title}</h5>
            <div className="d-flex">
              <div>
                <p>{props.price}</p>
                {/* <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  activeColor="#ffd700"
                /> */}
                <Rating 
                initialValue={props.stars}/>
               <a onClick={() => {handleUpVote(props)}} className="cart"><i class="bi bi-cart3"></i></a>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    )
  }

export {Popularproducts , GenreFunc}