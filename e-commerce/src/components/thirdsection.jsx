import ReactStars from "react-rating-stars-component";
import Card from 'react-bootstrap/Card';

const ratingChanged = (newRating) => {
    console.log(newRating)
};

function Twoproduct(props) {
    return (
        <div className="twoproduct-container">
        <Card >
            <div className="twoproduct-inside">
                <div>
                    <img src={props.pic}></img>
                </div>
                <div className="m-auto">
                    <h5>{props.title}</h5>
                    <p>{props.price}</p>
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        activeColor="#ffd700"
                    />
                </div>
            </div>
        </Card>

        </div>
    )
}

function OneProduct(props){
    return (
        <Card>
        <div className='d-flex oneproduct-container'>
          <Card.Img className='thirdimg' src={props.pic}></Card.Img>
          <Card.Body className='m-auto'>
            <h5>{props.title}</h5>
            <p>{props.price}</p>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
            />

            <button className='d-flex button-container'>
              <div className='my-auto mx-2'>Add to cart</div>
              <div className="button-circle"><i class="bi bi-cart3"></i></div>
            </button>
          </Card.Body>
        </div>
      </Card>
    )
}

export { Twoproduct, OneProduct }