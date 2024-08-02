import { useTranslation } from "react-i18next";
import { Available } from "../../../assets/images";
import { H5, H2, HeadingText } from "../../Shared/Heading";
import "./Advisors.css";

export function Advisors() {
  const { t } = useTranslation();
  return (
    <div className="containers">

        <div className="advisors-container">
          
          <div className="advisorsLeft">
            <H5 text={t("home.advisors.heading")} />
            <H2 text={t("home.advisors.subheading")} />
            <HeadingText text={t("home.advisors.paragraph")} />
          </div>

          <div className="advisorsRight">
            <img className="advisorImage" src={Available} alt="advisor available image" />
          </div>

        </div>
     

    </div>
  );
}

export default Advisors;
