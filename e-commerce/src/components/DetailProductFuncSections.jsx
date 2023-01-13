import { Rating } from "react-simple-star-rating"

export default function DetailProductFunc(props) {


    // const mainProductFunc =  
    return (
        <div>
            <div className="card d-card">
                <img className="dcard-image" src={props.pic}></img>
                <div className="d-body">
                    <h5 className="detail-title">
                        {props.title}
                    </h5>
                    <p className="detail-text">{props.price}</p>
                    <Rating></Rating>
                </div>
            </div>
        </div>
    )
}