import ProductFunc from "./components/ProductFunc"
import MainMenu from "./components/MainMenu"
import { Modal, ModalBody } from "react-bootstrap";
import { header } from "./data/Seed";
import MainSectData from "./data/detaildata";
import DetailMainSection from "./components/DetailMainSection";


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

    const mainSect = MainSectData.map((data)=>{
        return <DetailMainSection 
        title={data.title}
        text={data.text}
        picUrl1={data.picUrl1}
        picUrl2={data.picUrl2}
        price={data.price}
        available={data.available}
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


            </ModalBody>
        </Modal>
    )
}

export default DetailPage