import PropTypes from "prop-types";
import { Text, WhyTextHeading } from "../../Shared/Heading/Heading";
import "./WhyChooseUs.css";

const WhyCard = ({ img, alt, title, content }) => {

  return (
    <div className="card-container">
      <div className="imgContainer">
        <img className="cardImg" src={img} alt={alt} />
      </div>
      <WhyTextHeading text={title} />
      <Text text={content}  />
    </div>
  );
};

WhyCard.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
  idx: PropTypes.string,
  title : PropTypes.string,
  content :PropTypes.string
};

WhyCard.defaultProps = {
  img: null,
  alt: "image",
  idx: "0",
  title : null,
  content : null
};

export default WhyCard;
