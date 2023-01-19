import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import {
  genreData,
  PopularProductsData,
  sectionProduct,
} from "../../data/SeedData";
import AliceCarousel from "react-alice-carousel";
import carouselData from "../../data/carouselData";
import SecondSliderProduct from "../../data/secondcarouselData";
import { product, twoProduct } from "../../data/thirdsectionData";
import { OneProduct, Twoproduct } from "../productsection/TwoProductsSections";
import { fourthsection, logos } from "../../data/fourthsectionData";
import {
  GenreFunc,
  Popularproducts,
} from "../carouselsection/PopularProductSection";
import Peopleprofile from "../../data/peopleprofileData";
import PeopleProfile from "../carouselsection/PeopleProfileSections";
import NewsSec from "../carouselsection/NewsSections";
import newsSlider from "../../data/newssliderData";
import LogosFunc from "../productsection/LogoSections";
import FourthFunc from "../productsection/FourthSections";
import SectionProFunc from "../productsection/SectionProducts";

function Home(props) {
  // Main Slider section

  const images = carouselData.map((data) => {
    return (
      <div className="carousel-container">
        <div className="text-container">
          <h2 className="fw-bolder text-font">{data.title}</h2>
          <div>
            <button className="btn1">Shop Now</button>
            <button className="btn2">View More</button>
          </div>
        </div>
        <div className="img-container">
          <img
            src={data.name}
            className={data.style}
            class="carousel-img"
            alt="product"
          ></img>
          <div className="circle-price">only {data.price}</div>
        </div>
      </div>
    );
  });

  // Second Slider Section
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const items = SecondSliderProduct.map((product) => {
    return (
      <div className="slider-container">
        <img className="sliderPic" src={product.picUrl} alt="product"></img>
        <div className="mx-3 me-3 slidertext-color">
          <h4>{product.title}</h4>
          <p>{product.text}</p>
        </div>
      </div>
    );
  });

  // Popular Product Genre

  const GenreSect = genreData.map((data) => {
    return <GenreFunc name={data.name} />;
  });
  // Popular Product

  const popularProducts = PopularProductsData.map((data) => {
    // console.log(data)
    const result = data.products.map((product) => {
      return (
        <Popularproducts
          title={product.title}
          position={product.position}
          price={product.price}
          picUrl={product.picUrl}
          id={product.id}
          stars={product.stars}
          cart={props.cart}
          setCart={props.setCart}
          text={product.text}
          picUrl2={product.picUrl2}
          available={product.available}
          sku={product.sku}
        />
      );
    });
    return <div className="d-flex flex-wrap">{result}</div>;
  });

  // One pic Section - Second Section
  const SectionProduct = sectionProduct.map((product) => {
    return (
      <SectionProFunc
        picUrl={product.picUrl}
        text={product.text}
        description={product.description}
      />
    );
  });

  // Section with three Product  Third Section
  const TwoProduct = twoProduct.map((product) => {
    return (
      <Twoproduct
        title={product.title}
        price={product.price}
        pic={product.pic}
        stars={product.stars}
      />
    );
  });

  const Product = product.map((data) => {
    return (
      <OneProduct
        pic={data.pic}
        title={data.title}
        price={data.price}
        stars={data.stars}
      />
    );
  });

  // Fourth Section
  const Fourtsect = fourthsection.map((data) => {
    return <FourthFunc pic={data.pic} title={data.title} text={data.text} />;
  });

  // People Profile Section
  const PeopleSec = Peopleprofile.map((data) => {
    return <PeopleProfile name={data.name} text={data.text} pic={data.pic} />;
  });

  // Logos Section
  const Logos = logos.map((data) => {
    return <LogosFunc pic={data.pic} />;
  });

  // News Section
  const responsive3 = {
    0: { items: 1 },
    1024: { items: 2 },
  };

  const NewsSection = newsSlider.map((data) => {
    return (
      <NewsSec
        date={data.date}
        title={data.title}
        text={data.text}
        by={data.by}
        pic={data.pic}
      />
    );
  });


  return (
    <div className="App ">
      <div className="Slider container">
        <AliceCarousel autoPlayInterval="3000">{images}</AliceCarousel>
      </div>
      <div className="slidercontainer container">
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
          autoPlayInterval={2000}
        >
          {popularProducts}
        </AliceCarousel>
      </div>
      <div className="thirdsection-container container">{SectionProduct}</div>
      <div className="container">
        <div className="threeproduct">
          <div className="one-product">{Product}</div>
          <div className="two-product">{TwoProduct}</div>
        </div>
      </div>
      <div className="d-flex fourthsect-container container">{Fourtsect}</div>
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
      <div className="container">
        <div className="logo-container">{Logos}</div>
      </div>
      <div className="news-container container">
        <div className="news-header">
          <h4 className="fw-bold">Latest news</h4>
          <h5>
            <a>View all</a>
          </h5>
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
    </div>
  );
}

export default Home;
