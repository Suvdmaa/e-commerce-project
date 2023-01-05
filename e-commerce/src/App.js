import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { header, heroSection,  PopularProducts, Section, sliderProduct } from './data/Seed';
import { ProductFunc, Popularproducts, HeroFunc, SliderProduct, SectionFunc } from './components/ProductFunc';
import MainMenu from './components/MainMenu';
// import SliderFunc from './components/Slider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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

  const HeroSection = heroSection.map((hero) =>{
    return <HeroFunc
    title={hero.title}
    votes={hero.votes}
    picUrl={hero.picUrl}
    children={hero.children}
    />
  })
  
  // const SliderP = sliderProduct.map((product) =>{
  //   return <SliderProduct 
  //   title={product.title}
  //   position={product.position}
  //   picUrl={product.picUrl}
  //   text={product.text}/>

  // })


 
  

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
        {HeroSection}
        {/* {SimpleSlider} */}
        {/* {SliderFunc} */}
        
      </div>
      <div className='d-flex justify-content-center'>
        {/* {SliderP} */}
        {HeroFunc}
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
        
        </div>
      </div>
    </div>
  );
}

export default App;
