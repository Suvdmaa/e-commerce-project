function NewsSec (props){
    return (
        <div className="innernews-container">
            <div>
            <img className="news-img" src={props.pic}></img>
            </div>
            <div className="news-text">
                <p className="date">{props.date}</p>
                <h4>{props.title}</h4>
                <p>{props.text}</p>
                <p>{props.by}</p>
            </div>
        </div>
    )
}

export default NewsSec