import { Rating } from "react-simple-star-rating"

export default function DetailProductFunc(props) {


    // const mainProductFunc =  
    return (
        <div>
            <div className="d-card">
                <img className="dcard-image" src={props.pic}></img>
                <div className="d-body">
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