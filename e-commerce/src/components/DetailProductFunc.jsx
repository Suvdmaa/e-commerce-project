import { Rating } from "react-simple-star-rating"

export default function DetailProductFunc(props) {


    // const mainProductFunc =  
    return (
        <div>
            <div className="card d-card">
                <img className="dcard-image" src={props.pic}></img>
                <div className="card-body d-body">
                    <h5 className="card-title">
                        {props.title}
                    </h5>
                    <p className="card-text">{props.price}</p>
                    <Rating></Rating>
                </div>
            </div>
        </div>
    )
}