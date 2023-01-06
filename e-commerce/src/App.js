import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { header, PopularProducts, Section, sectionProduct, sliderProduct } from './data/Seed';
import { ProductFunc, Popularproducts } from './components/ProductFunc';
import MainMenu from './components/MainMenu';
import AliceCarousel from "react-alice-carousel"
import carouselData from './data/carousel';
import SecondSliderProduct from './data/secondcarousel';
import { product , twoProduct } from './data/thirdsection';
import {Twoproduct} from "./components/thirdsection"
import { Card } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";


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

  const popularProducts = PopularProducts.map((products) => {
    return <Popularproducts
      title={products.title}
      position={products.position}
      price={products.price}
      picUrl={products.picUrl}
    />
  })


  const images = carouselData.map((data) => {
    return (
      <div className='carousel-container'>
        <div className="text-container">
          <h2 className="fw-bolder text-font">{data.title}</h2>
          <div>
            <button className="btn1">Shop Now</button>
            <button className="btn2">View More</button>
          </div>
        </div>
        <div className="img-container">
          <img src={data.name} className={data.style} class="carousel-img"></img>
          <div className="circle-price">only {data.price}</div>
        </div>
      </div>
    )
  })



  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const items = SecondSliderProduct.map((product) => {
    return (
      <div className="slider-container">
        <img className="sliderPic" src={product.picUrl}></img>
        <div className="mx-3 me-3 slidertext-color">
          <h4>
            {product.title}
          </h4>
          <p>{product.text}</p>
        </div>
      </div>
    )
  })

  const SectionProduct = sectionProduct.map((product) =>{
    return (
      <div className="card">
        <img src={product.picUrl} className="card-img" />
        <div className="card-img-overlay innertext">
          <button className="card-btn">New laptop</button>
          <h5 className="card-title">{product.text}</h5>
          <p className="card-text">{product.description}</p>
          <button className="card-btn">Shop now</button>
        </div>
      </div>
    )
  })
  const ratingChanged = (newRating) => {
    console.log(newRating)
  };

  const TwoProduct = twoProduct.map((product) =>{
    return <Twoproduct 
     title={product.title}
     price={product.price}
     pic={product.pic}/>
  })
 
  const Product = product.map((data)=>{
    return (
      <Card>
        <div className='d-flex oneproduct-container'>
        <Card.Img className='thirdimg' src={data.pic}></Card.Img>
        <Card.Body className='m-auto'>
          <h5>{data.title}</h5>
          <p>{data.price}</p>
          <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                activeColor="#ffd700"
              />
          <button>Add to cart </button>
        </Card.Body>
      </div>
      </Card>

    )
  })
  


  




  return (
    <div className="App container">
      <div>
        <header className="App-header col-md">
          {header1}
        </header>
        <div className="menu-container">
          <MainMenu />
        </div>
      </div>
      <div className="Slider">
        <AliceCarousel autoPlayInterval="3000">
          {images}
        </AliceCarousel>
      </div>
      <div className='slidercontainer'>
        <AliceCarousel
          duration={400}
          autoPlay={true}
          startIndex={1}
          fadeOutAnimation={true}
          mouseDragEnabled={true}
          playButtonEnabled={true}
          responsive={responsive}
          autoPlayInterval={2000}
          autoPlayDirection="rtl"
          autoPlayActionDisabled={true}
        >
         {items}
        </AliceCarousel>

      </div>


      <div>
        <div className="secondtitle-container">
          <h2 className="flex-grow-1">Popular Products</h2>
          <button className="btn-click">Cameras</button>
          <button className="btn-click">Laptops</button>
          <button className="btn-click">Tablets</button>
          <button className="btn-click">Mouse</button>
        </div>
        <div className="popularPRO">
          {popularProducts}
        </div>
        <div>
          {SectionProduct}
        </div>
        <div className="threeproduct">
          <div className="one-product">
            {Product}
          </div>
          <div className="two-product">
            {TwoProduct}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
