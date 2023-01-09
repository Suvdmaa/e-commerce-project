import Card from 'react-bootstrap/Card';
import ReactStars from "react-rating-stars-component";
import { PopularProductsData } from '../data/Seed';



function GenreFunc (props){
  function clickMe(props){
    console.log("upvoted")
    for(let i = 0; i < props.name; i++){
      
      if(props.name == PopularProductsData.products[i].genre){
        console.log(props.name)
      } else{
        console.log("It's not working")
      }
    }
    // const container = document.querySelector("#popularP")
    // container.innerHTML = "";
    // let result = "";
    // genres.map((data)=>{
    //   result += Popularproducts(data)
    // })
    // container.innerHTML = result;

  }
  return (
    <button className="btn-click" onClick={() => {clickMe(props)}}>{props.name}</button>
  )
}

function Popularproducts(props) {

    const ratingChanged = (newRating) => {
      console.log(newRating)
    };

    function handleUpVote(props){
      console.log('upvoted')
      console.log(props.id)
    }
    return (
      <div className="popular-products" id="popularP">
        <Card className="card-style">
          <Card.Img className="card-image" src={props.picUrl} />
          <Card.Body className="cart-container">
            <h5>{props.title}</h5>
            <div className="d-flex">
              <div>
                <p>{props.price}</p>
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  activeColor="#ffd700"
                />
               <a onClick={() => {handleUpVote(props)}} className="cart"><i class="bi bi-cart3"></i></a>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    )
  }

export {Popularproducts , GenreFunc}