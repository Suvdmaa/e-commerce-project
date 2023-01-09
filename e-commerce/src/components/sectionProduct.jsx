export default function SectionProFunc(props){
    return (
        <div className="card">
        <img src={props.picUrl} className="card-img" />
        <div className="card-img-overlay innertext">
          <button className="card-btn">New laptop</button>
          <h5 className="card-title">{props.text}</h5>
          <p className="card-text">{props.description}</p>
          <button className="card-btn">Shop now</button>
        </div>
      </div>
    )
}