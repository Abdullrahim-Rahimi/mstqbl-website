import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ text }) => {
  return <button>{text} </button>;
};

Button.propTypes = {
  text: PropTypes.string,
};

Button.defaultProps = {
  text: "",
};

export default Button;
