import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { genreData, header, PopularProductsData, sectionProduct } from './data/Seed';
import ProductFunc from './components/ProductFunc';
import MainMenu from './components/MainMenu';
import AliceCarousel from "react-alice-carousel"
import carouselData from './data/carousel';
import SecondSliderProduct from './data/secondcarousel';
import { product, twoProduct } from './data/thirdsection';
import { OneProduct, Twoproduct } from "./components/Thirdsection"
import { fourthsection, logos } from './data/fourthsection';
import {Popularproducts,  GenreFunc } from './components/PopularProducts';
import Peopleprofile from './data/peopleprofile';
import PeopleProfile from './components/PeopleProfile';
import NewsSec from './components/NewsSection';
import newsSlider from './data/newsslider';
import { footerDataPart1, footerDataPart2, footerTextData } from './data/footerdata';
import { FooterAboutFunc1, FooterAboutFunc2, FooterMainSect } from './components/Footer';
import LogosFunc from './components/Logos';
import FourthFunc from './components/Fourthsection';
import SectionProFunc from './components/SectionProduct';


function App() {
  // Header Section
  const HeaderSect = header.map((header) => {
    return <ProductFunc
      text={header.text}
      description={header.description}
      order={header.order}
      url={header.url}
      votes={header.votes}
      logoUrl={header.logoUrl} />
  })

  // Main Slider section

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

  // Second Slider Section
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


  // Popular Product Genre

  const GenreSect = genreData.map((data)=>{
    return <GenreFunc name={data.name}/>
  })
  // Popular Product

  const popularProducts = PopularProductsData.map((data) => {
    console.log(data)
    const result = data.products.map(product => {
      return <Popularproducts
        title={product.title}
        position={product.position}
        price={product.price}
        picUrl={product.picUrl}
        id={product.id}
        stars={product.stars}
      />
    })
    return (
      <div className='d-flex flex-wrap'>
        {result}
      </div>
    )
  }
  )

  // One pic Section - Second Section
  const SectionProduct = sectionProduct.map((product) => {
    return <SectionProFunc
      picUrl={product.picUrl}
      text={product.text}
      description={product.description}
    />
  })

  // Section with three Product  Third Section
  const TwoProduct = twoProduct.map((product) => {
    return <Twoproduct
      title={product.title}
      price={product.price}
      pic={product.pic}
      stars={product.stars} />
  })

  const Product = product.map((data) => {
    return <OneProduct
      pic={data.pic}
      title={data.title}
      price={data.price}
      stars={data.stars}
    />
  })

  // Fourth Section 
  const Fourtsect = fourthsection.map((data) => {
    return <FourthFunc
      pic={data.pic}
      title={data.title}
      text={data.text}
    />
  })

  // People Profile Section 
  const PeopleSec = Peopleprofile.map((data) => {
    return <PeopleProfile
      name={data.name}
      text={data.text}
      pic={data.pic} />
  })


  // Logos Section
  const Logos = logos.map((data) => {
    return <LogosFunc
      pic={data.pic} />
  })

  // News Section 
  const responsive3 = {
    0: { items: 1 },
    1024: { items: 2 },
  };

  const NewsSection = newsSlider.map((data) => {
    return <NewsSec
      date={data.date}
      title={data.title}
      text={data.text}
      by={data.by}
      pic={data.pic}
    />
  })

  // Footer
  const footerMain = footerDataPart1.map((data) => {
    return <FooterMainSect
      title={data.title}
      contact={data.contact}
      pic={data.pic}
      sendImg={data.sendImg}
    />

  })

  const footerAboutRight = footerDataPart2.map((data) => {
    return <FooterAboutFunc1
      logoPic={data.logoPic}
      text={data.text}
      googleLogo={data.googleLogo}
      fbLogo={data.fbLogo}
      whatsappLogo={data.whatsappLogo}
    />
  })

  const footerAboutLeft = footerTextData.map((data) => {
    return <FooterAboutFunc2
      title={data.title}
      type1={data.type1}
      type2={data.type2}
      type3={data.type3}
      type4={data.type4}
      type5={data.type5}
    />
  })

 
  return (
    <div className="App ">
      <div>
        <header className="App-header col-md">
          {HeaderSect}
        </header>
        <div className="menu-container bg-light">
          <MainMenu />
        </div>
      </div>
      <div className="Slider container">
        <AliceCarousel autoPlayInterval="3000">
          {images}
        </AliceCarousel>
      </div>
      <div className='slidercontainer container'>
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
      <div className="secondtitle-container container">
        <h2 className="flex-grow-1">Popular Products</h2>
        {GenreSect}
        {/* <button className="btn-click" onClick={handleUpVote} value="Cameras">Cameras</button>
        <button className="btn-click">Laptops</button>
        <button className="btn-click">Tablets</button>
        <button className="btn-click">Mouse</button> */}
      </div>
      <div className="popularPRO container" id="popularP">
        <AliceCarousel
          duration={400}
          autoPlay={true}
          startIndex={1}
          fadeOutAnimation={true}
          mouseDragEnabled={true}
          playButtonEnabled={true}
          autoPlayDirection="rtl"
          autoPlayActionDisabled={true}
          // responsive={responsive1}
          autoPlayInterval={2000}
        >
          {popularProducts}
        </AliceCarousel>
      </div>
      <div className='thirdsection-container container'>
        {SectionProduct}
      </div>
      <div className='container'>
        <div className="threeproduct">
          <div className="one-product">
            {Product}
          </div>
          <div className="two-product">
            {TwoProduct}
          </div>
        </div>
      </div>
      <div className='d-flex fourthsect-container container'>
        {Fourtsect}
      </div>
      <div className="profile-container container">
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
          {PeopleSec}
        </AliceCarousel>
      </div>
      <div className='container'>
        <div className='logo-container'>
          {Logos}
        </div>
      </div>
      <div className="news-container container">
        <div className="news-header">
          <h4 className='fw-bold'>Latest news</h4>
          <h5><a>View all</a></h5>
        </div>
        <AliceCarousel
          duration={400}
          autoPlay={true}
          startIndex={1}
          fadeOutAnimation={true}
          mouseDragEnabled={true}
          playButtonEnabled={true}
          responsive={responsive3}
          autoPlayInterval={2000}
          autoPlayDirection="rtl"
          autoPlayActionDisabled={true}
        >
          {NewsSection}
        </AliceCarousel>
      </div>
      <div className='footer-container'>
        <div className='container'>
          <div>
            {footerMain}
          </div>
          <div className='footerabout-container'>
            {footerAboutRight}
            {footerAboutLeft}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
