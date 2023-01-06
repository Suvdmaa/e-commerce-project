import ReactStars from "react-rating-stars-component";
import Card from 'react-bootstrap/Card';

function Twoproduct(props) {
    const ratingChanged = (newRating) => {
        console.log(newRating)
    };
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

export { Twoproduct }