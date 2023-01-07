function NewsSec (props){
    return (
        <div>
            <img src={props.pic}></img>
            <div>
                <p>{props.date}</p>
                <h4>{props.title}</h4>
                <p>{props.text}</p>
                <p>{props.by}</p>
            </div>
        </div>
    )
}

export default NewsSec