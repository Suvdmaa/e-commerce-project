function FooterMainSect (props){
   return(
   <div className="container insidefooter-container">
        <div>
            <h3>{props.title}</h3>
        </div>
        <div className="input-container">
            <input type="email" placeholder="Email address"></input>
            <button><img src={props.sendImg}></img></button>
        </div>
        <div className="contact-container">
            <img src={props.pic}></img>
            <p>Call us 24/7 :<br></br>{props.contact}</p>
        </div>
    </div>
   )
}

function FooterAboutFunc1 (props){
    return (
        <div className="aboutcontact-container">
            <img className="mb-5" src={props.logoPic}></img>
            <p className="mb-4">{props.text}</p>
            <hr></hr>
            <div>
            <img className="me-4" src={props.googleLogo}></img>
            <img className="me-4" src={props.fbLogo}></img>
            <img className="me-4" src={props.whatsappLogo}></img>
            </div>
        </div>
    )
}

function FooterAboutFunc2 (props){
    return (
        <div className="list-text">
            <p className="fw-bold">{props.title}</p>
                <li>
                    {props.type1}
                </li>
                <li>
                    {props.type2}
                </li>
                <li>
                    {props.type3}
                </li>
                <li>
                    {props.type4}
                </li>
                <li>
                    {props.type5}
                </li>
        </div>
    )
}

export {FooterMainSect, FooterAboutFunc1, FooterAboutFunc2}