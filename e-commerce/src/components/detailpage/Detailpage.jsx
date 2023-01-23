import DetailProductFunc from "./DetailProductFuncSections";
import DetailReviewSection from "./DetailReviewSection";
import {
  MainSectData,
  oneProductData,
  productData,
  reviewData,
} from "../../data/detaildata";
// import Header from "../../components/header/Header";
import { useParams, useLocation } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { categoryData, logoData, sizeData } from "../../data/detaildata";

function DetailPage(props) {
  const { id } = useParams();

  // using useLocation to get data from PopularProductSection
  const location = useLocation();
  console.log("location", location.state);
  const detail = location.state;

  const detailReviewSection = reviewData.map((data) => {
    return (
      <DetailReviewSection title={data.title} text={data.text} btn={data.btn} />
    );
  });

  const productSect = productData.map((data) => {
    return (
      <DetailProductFunc title={data.title} pic={data.pic} price={data.price} />
    );
  });

  const oneProductSect = oneProductData.map((data) => {
    return (
      <div className="d-card">
        <img className="d-onecard-image" src={data.pic} />
        <div className="d-body d-flex">
          <button className="d-flex d-button-container">
            <div className="my-auto">Add to cart</div>
            <div className="button-circle">
              <i class="bi bi-cart3"></i>
            </div>
          </button>
          <button className="btn-eye">
            <i class="bi bi-eye"></i>
          </button>
        </div>
      </div>
    );
  });

  const sizes = sizeData.map((data) => {
    return <button className="d-size">{data.num}</button>;
  });

  const categoryFunc = categoryData.map((data) => {
    return <div className="d-category">{data.cate}</div>;
  });

  const logoFunc = logoData.map((data) => {
    return <img className="d-logo" src={`/${data.logo}`}></img>;
  });

  return (
    <div>
      <div className="d-flex container">
        <div className="col-6 p-3">
          <img src={`/${detail.picUrl}`}></img>
          <div className="d-flex my-4">
            <img className="me-4" src={`/${detail.picUrl}`}></img>
            <img src={`/${detail.picUrl}`}></img>
          </div>
        </div>
        <div className="col-6 pt-3 px-3 m-5">
          <div>
            <h3 className="dmain-title">{detail.title}</h3>
            <h3 className="fw-bold my-3">{detail.price}</h3>
            <Rating initialValue={detail.stars}></Rating>
            <h5 className="my-3">
              <span className="fw-bold">Availability:</span>{" "}
              <span className="text-success">
                <i class="fa-solid fa-check"></i> {detail.available}
              </span>
            </h5>
            <p className="mainfaint-text">{detail.text}</p>
          </div>
          <hr></hr>
          <div>
            <p className="my-4">
              <span className="fw-bold">Color:</span>
              <button className="d-circlebtn d-colorbtn"></button>
              <button className="d-circlebtn d-secondcolorbtn"></button>
            </p>
            <p className="d-flex align-items-center my-4">
              <span className="fw-bold">Size:</span>
              {sizes}
            </p>
            <p className="my-4">
              <span className="fw-bold">Quantity:</span>
            </p>
            <div>
              <button className="d-btn">Add to cart</button>
              <button className="d-btn">Buy it now</button>
              <span className="d-heart">
                <i class="bi bi-heart"></i>
              </span>
            </div>
          </div>
          <hr></hr>
          <div>
            <p className="my-4">
              <span className="fw-bold">Sku:</span>{" "}
              <span className="mx-2">{detail.sku}</span>
            </p>
            <p className="d-flex my-4">
              <span className="fw-bold">Category:</span> {categoryFunc}
            </p>
            <p className="my-4">
              <span className="fw-bold">Share:</span>
              {logoFunc}
            </p>
          </div>
        </div>
      </div>
      <div className="container">{detailReviewSection}</div>
      <div className="container d-product-section">
        <h2 className="d-related-text">Related product</h2>
        <div className="d-flex">
          {oneProductSect}
          {productSect}
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
