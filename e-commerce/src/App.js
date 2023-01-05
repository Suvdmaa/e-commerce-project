import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { header, PopularProducts } from './data/Seed';
import { ProductFunc, Popularproducts } from './components/ProductFunc';
// import {Button} from "react-bootstrap"
import MainMenu from './components/MainMenu';

function App() {
  const header1 = header.map((header) => {
    return <ProductFunc
      text={header.text}
      description={header.description}
      order={header.order}
      url={header.url}
      votes={header.votes}
      logoUrl={header.logoUrl} />
  })

  const popularProducts = PopularProducts.map((products) =>{
    return <Popularproducts
    title={products.title}
    position={products.position}
    price={products.price}
    picUrl={products.picUrl}
    />
  })

  return (
    <div className="App container">
      <div>
        <header className="App-header">
          {header1}
        </header>
        <div className="menu-container">
          <MainMenu />
        </div>
      </div>
      <div className="">
        <h2>Popular Products</h2>
        <div class="popularPRO">
           {popularProducts}
        </div>
      
      </div>
    </div>
  );
}

export default App;
