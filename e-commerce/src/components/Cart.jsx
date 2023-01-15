import { Rating } from "react-simple-star-rating";
import { useState } from "react";



export default function Cart(props) {

   const [array, setArray] = useState([props])
    console.log(array)

    function deleteItem (event){
       setArray(array.filter(item => item.id !== event))
    }

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
                    <button className="cart-btn" onClick={() => deleteItem(props.id)}>
                    <i class="fa-solid fa-square-xmark"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}