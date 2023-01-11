import { Rating } from "react-simple-star-rating"
export default function DetailMainSection (props){
    return (
        <div className="d-flex">
            <div>
               <img src={props.picUrl1}></img>
               <div>
                <img src={props.picUrl2}></img>
                <img src={props.picUrl2}></img>
               </div>
            </div>
            <div>
                <h3>{props.title}</h3>
                <h3 className="fw-bold">{props.price}</h3>
                <Rating initialValue={props.stars}></Rating>
                <h5>Availability: <span className="text-success"><i class="fa-solid fa-check"></i> {props.available}</span></h5>
            </div>
        </div>
    )
}