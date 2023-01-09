import Card from 'react-bootstrap/Card';
import ReactStars from "react-rating-stars-component";

function Popularproducts(props) {

    const ratingChanged = (newRating) => {
      console.log(newRating)
    };

    function handleUpVote(props){
      console.log('upvoted')
      console.log(props.id)
    }
    return (
      <div className="popular-products">
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

export default Popularproducts