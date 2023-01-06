import Card from 'react-bootstrap/Card';



function ProductFunc(props) {
  return (
    <div>
      <header>
        <div className="App-header d-flex bg-white">
          <p className="p-2 flex-grow-1">{props.text}</p>
          <p className="p-2">
            <i class="bi bi-geo-alt text-dark p-2"></i>
            {props.description}</p>
          <p className="p-2">
            <i class="bi bi-truck text-dark p-2"></i>
            {props.order}</p>
        </div>
        <div className="second-header p-4 text-white d-flex justify-content-between">
          <img className="px-5 logo" src={props.logoUrl} />
          <div className="flex-grow-1 ps-3 col-md">
            <input type="seacrh" placeholder="Search any things" className="p-3 w-50 rounded-4"></input>
            <button class="button text-white rounded-4">Search</button>
          </div>
          <p className="p-3"><i class="bi bi-person px-2"></i>Sign in</p>
          <p className="p-3"><i class="bi bi-heart px-2" ></i><span className="bg-warning p-1 px-2 rounded-circle">0</span></p>
          <p className="p-3"><i class="bi bi-cart3 px-2"></i><span className="bg-warning p-1 px-2 rounded-circle">0</span></p>

        </div>
      </header>
    </div>
  );
}


function Popularproducts(props) {
  return (
    <div className="popular-products">
      <Card className="card-style">
        <Card.Img className="card-image" src={props.picUrl} />
        <Card.Body>
            <h5>{props.title}</h5>
            <div className="d-flex">
              <div>
              <p>{props.price}</p>
              <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star"></i>
              </div>
              <p className="p-3"><i class="bi bi-cart3"></i></p>
            </div>
          {/* <Card.Title>
            {props.title}
          </Card.Title>
          <Card.Text>
            {props.price}
          </Card.Text> */}
        </Card.Body>
      </Card>
    </div>
  )
}



export { ProductFunc, Popularproducts };