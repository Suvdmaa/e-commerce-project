import { Rating } from "react-simple-star-rating"
import { categoryData, logoData, sizeData } from "../../data/detaildata"




export default function DetailMainSection(props) {

    const sizes = sizeData.map((data)=>{
        return (
            <button className="d-size">
                {data.num}
            </button>
        )
    })

    const categoryFunc = categoryData.map((data)=>{
        return  (
            <div className="d-category">
                {data.cate}
            </div>     
        )
    })

    const logoFunc = logoData.map((data)=>{
        return (
            <img className="d-logo" src={data.logo}>
            </img>
        )
    })

    return (
        <div className="d-flex container">
            <div className="col-6 p-3">
                <img src={props.picUrl1}></img>
                <div className="d-flex my-4">
                    <img className="me-4" src={props.picUrl2}></img>
                    <img src={props.picUrl2}></img>
                </div>
            </div>
            <div className="col-6 pt-3 px-3 m-5">
                <div>
                    <h3 className="dmain-title">{props.title}</h3>
                    <h3 className="fw-bold my-3">{props.price}</h3>
                    <Rating initialValue={props.stars}></Rating>
                    <h5 className="my-3"><span className="fw-bold">Availability:</span> <span className="text-success"><i class="fa-solid fa-check"></i> {props.available}</span></h5>
                    <p className="mainfaint-text">{props.text}</p>
                </div>
                <hr></hr>
                <div>
                    <p className="my-4"><span className="fw-bold">Color:</span>
                      <button className="d-circlebtn d-colorbtn">
                        
                        </button>
                      <button className="d-circlebtn d-secondcolorbtn"></button>
                    </p>
                    <p className="d-flex align-items-center my-4"><span className="fw-bold">Size:</span>{sizes}</p>
                    <p className="my-4"><span className="fw-bold">Quantity:</span></p>
                    <div>
                        <button className="d-btn">Add to cart</button>
                        <button className="d-btn">Buy it now</button>
                        <span className="d-heart"><i class="bi bi-heart"></i></span>
                    </div>
                </div>
                <hr></hr>
                <div>
                    <p className="my-4"><span className="fw-bold">Sku:</span> <span className="mx-2">{props.sku}</span></p>
                    <p className="d-flex my-4"><span className="fw-bold">Category:</span> {categoryFunc}</p>
                    <p className="my-4"><span className="fw-bold">Share:</span>{logoFunc}
                    </p>
                </div>
            </div>
        </div>
    )
}

