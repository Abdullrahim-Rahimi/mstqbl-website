import {
    GooglePlay,
    downiPhone,
    AppStore,
  } from "../../../assets/images";
  import './Download.css';

  import { useTranslation } from "react-i18next";


export default function Download(){


const { t, i18n } = useTranslation();

  const arFont = {
    fontFamily: 'Cairo'
  }

  return (
    <div className="containers" id="download">
    <div className="download-container">
      <div className="downLeft">
        <h2 className="downHeading" style={i18n.language === 'ar' ? arFont : {}}>{t("home.download.heading")}</h2>
        <div className="imageContainer-2 downlinks">
          <img src={GooglePlay} alt="Google Play" className="imageLeft downimage" />
          <img src={AppStore} alt="App Store" className="imageLeft downimage" />
        </div>
      </div>
      <div className="downRight">
        <img src={downiPhone} alt="iPhone" className="downIphoneImage" />
      </div>
    </div>
  </div>
  )
}

