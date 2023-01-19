import { Rating } from "react-simple-star-rating";


export default function Cart(props) {
    console.log(props)
    
    function deleteItem (event){
        props.setCart(props.cart.filter(item => item.id !== event))
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