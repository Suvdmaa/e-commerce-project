import { Rating } from "react-simple-star-rating"

export default function DetailProductFunc(props) { 
    return (
        <div>
            <div className="d-card col">
                <img className="dcard-image col-md" src={props.pic}></img>
                <div className="d-body col-md">
                    <h5 className="d-card-title">
                        {props.title}
                    </h5>
                    <p className="d-card-text">{props.price}</p>
                    <Rating></Rating>
                </div>
            </div>
        </div>
    )
}