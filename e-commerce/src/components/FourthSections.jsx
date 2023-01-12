export default function FourthFunc(props){
    return (
        <div className="inside-fourthcontainer">
        <div>
          <img src={props.pic}></img>
        </div>
        <div className='mx-4'>
          <h4 className="fw-bold">{props.title}</h4>
          <p>{props.text}</p>
        </div>
      </div>
    )
}