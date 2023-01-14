import { Rating } from "react-simple-star-rating";


export default function Cart(props) {
    return (
        <div>
            <div className="cartContainer">
                <div>
                <img className="cart-pic" src={props.picUrl}></img>
                </div>
                <div>
                    <h5>{props.title}</h5>
                    <p>{props.price}</p>
                    <Rating
                    initialValue={props.stars}
                    />

                </div>
            </div>
        </div>
    )
}