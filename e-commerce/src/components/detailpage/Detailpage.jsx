import ProductFunc from "../header/ProductFuncSections"
import MainMenu from "../header/MainMenuSections"
import { Modal, ModalBody } from "react-bootstrap";
import { header } from "../../data/SeedData";
import DetailMainSection from "./DetailMainSections";
import { FooterMainSect, FooterAboutFunc1, FooterAboutFunc2 } from "../footer/FooterSections";
import { footerDataPart1, footerDataPart2, footerTextData } from "../../data/footerDataS";
import DetailProductFunc from "./DetailProductFuncSections";
import DetailReviewSection from "./DetailReviewSection";
import { MainSectData, oneProductData, productData, reviewData } from "../../data/detaildata"
import Header from "../../components/header/Header";




function DetailPage(props) {

    const mainSect = MainSectData.map((data) => {
        return <DetailMainSection
            title={data.title}
            text={data.text}
            picUrl1={data.picUrl1}
            picUrl2={data.picUrl2}
            price={data.price}
            available={data.available}
            sku={data.sku}
        />
    })

    const detailReviewSection = reviewData.map((data) => {
        return <DetailReviewSection
            title={data.title}
            text={data.text}
            btn={data.btn}
        />

    })

    const productSect = productData.map((data) => {
        return <DetailProductFunc
            title={data.title}
            pic={data.pic}
            price={data.price}
        />
    })

    const oneProductSect = oneProductData.map((data) => {
        return (
            <div className="d-card">
                <img className="d-onecard-image" src={data.pic} />
                <div className="d-body d-flex">
                    <button className='d-flex d-button-container'>
                        <div className='my-auto'>Add to cart</div>
                        <div className="button-circle"><i class="bi bi-cart3"></i></div>
                    </button>
                    <button className="btn-eye">
                        <i class="bi bi-eye"></i>
                    </button>
                </div>
            </div>
        )
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
        // <Modal show={props.show} fullscreen={props.fullscreen} onHide={props.setShow}>
        //     <Modal.Header closeButton>
        //     </Modal.Header>
        //     <ModalBody>
        //         {/* <Header /> */}
        //         <div>
        //             {mainSect}
        //         </div>
        //         <div className="container">
        //             {detailReviewSection}
        //         </div>

        //         <div className="container d-product-section">
        //             <h2 className="d-related-text">Related product</h2>
        //             <div className="d-flex">
        //             {oneProductSect}
        //             {productSect}
        //             </div>
        //         </div>

        //         <div className='footer-container'>
        //             <div className='container'>
        //                 <div>
        //                     {footerMain}
        //                 </div>
        //                 <div className='footerabout-container'>
        //                     {footerAboutRight}
        //                     {footerAboutLeft}
        //                 </div>
        //             </div>
        //         </div>
        //     </ModalBody>
        // </Modal>
        <div>
            <div>
                {mainSect}
            </div>
            <div className="container">
                {detailReviewSection}
            </div>
            <div className="container d-product-section">
                <h2 className="d-related-text">Related product</h2>
                <div className="d-flex">
                    {oneProductSect}
                    {productSect}
                </div>
            </div>
        </div>
    )
}

export default DetailPage