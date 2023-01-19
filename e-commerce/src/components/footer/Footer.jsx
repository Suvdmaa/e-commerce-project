import { FooterAboutFunc1, FooterAboutFunc2, FooterMainSect } from "./FooterSections";
import { footerDataPart1, footerDataPart2, footerTextData } from "../../data/footerDataS";


export default function Footer(){
    const footerMain = footerDataPart1.map((data) => {
        return (
          <FooterMainSect
            title={data.title}
            contact={data.contact}
            pic={data.pic}
            sendImg={data.sendImg}
          />
        );
      });
    
      const footerAboutRight = footerDataPart2.map((data) => {
        return (
          <FooterAboutFunc1
            logoPic={data.logoPic}
            text={data.text}
            googleLogo={data.googleLogo}
            fbLogo={data.fbLogo}
            whatsappLogo={data.whatsappLogo}
          />
        );
      });
    
      const footerAboutLeft = footerTextData.map((data) => {
        return (
          <FooterAboutFunc2
            title={data.title}
            type1={data.type1}
            type2={data.type2}
            type3={data.type3}
            type4={data.type4}
            type5={data.type5}
          />
        );
      });
    return (
        <div className="footer-container">
        <div className="container">
          <div>{footerMain}</div>
          <div className="footerabout-container">
            {footerAboutRight}
            {footerAboutLeft}
          </div>
        </div>
      </div>
    )
}