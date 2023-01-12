import ProductFunc from "./components/ProductFuncSections"
import MainMenu from "./components/MainMenuSections"
import { Modal, ModalBody } from "react-bootstrap";
import { header } from "./data/SeedData";
import { MainSectData, oneProductData, productData } from "./data/detailData";
import DetailMainSection from "./components/DetailMainSections";
import { FooterMainSect, FooterAboutFunc1 , FooterAboutFunc2} from "./components/FooterSections";
import { footerDataPart1, footerDataPart2, footerTextData } from "./data/footerDataS";
import DetailProductFunc from "./components/DetailProductFuncSections";



function DetailPage(props) {


    const HeaderSect = header.map((header) => {
        return <ProductFunc
            text={header.text}
            description={header.description}
            order={header.order}
            url={header.url}
            votes={header.votes}
            logoUrl={header.logoUrl} />
    })

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

    const productSect = productData.map((data)=>{
        return <DetailProductFunc 
        title={data.title}
        pic={data.pic}
        price={data.price}
        />
    })

    const oneProductSect = oneProductData.map((data) => {
        return (
            <div className="card d-card">
                <img className="d-onecard-image" src={data.pic} />
                <div className="card-body d-body">
                    <button className='d-flex button-container'>
                        <div className='my-auto mx-2'>Add to cart</div>
                        <div className="button-circle"><i class="bi bi-cart3"></i></div>
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
        <Modal show={props.show} fullscreen={props.fullscreen} onHide={props.setShow}>
            <Modal.Header closeButton>
            </Modal.Header>
            <ModalBody>
                <div>
                    <header className="App-header col-md">
                        {HeaderSect}
                    </header>
                    <div className="menu-container bg-light">
                        <MainMenu />
                    </div>
                    <div>

                    </div>
                </div>
                <div>
                    {mainSect}
                </div>
                <div className="d-flex container">
                    {oneProductSect }
                    {productSect}
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


            </ModalBody>
        </Modal>
    )
}

export default DetailPage