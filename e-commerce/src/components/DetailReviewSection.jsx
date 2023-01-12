export default function DetailReviewSection(props){
    return (
        <div>
            <div className="d-flex justify-content-center">
                <button className="d-containerbtn btn-color1">Description</button>
                <button className="d-containerbtn btn-color2">Reviews</button>
            </div>
            <div>
                <div className="review-container">
                    <h4 className="review-title">{props.title}</h4>
                    <p className="review-text">{props.text}</p>
                    <button className="review-btn">{props.btn}</button>
                </div>
            </div>
        </div>
    )
}