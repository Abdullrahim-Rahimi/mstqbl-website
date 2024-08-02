import { useState } from 'react';
import { DarkArrow } from '../../../assets/images';
import PropTypes from 'prop-types';
import './Pricing.css';
import { useTranslation } from 'react-i18next';

const PricingCard = ({ index, title, price, content, features, button }) => {
  console.log(button);
  const { i18n } = useTranslation();

  // eslint-disable-next-line no-unused-vars
  const [hoveredDiv, setHoveredDiv] = useState(1);

  const arFont = {
    fontFamily: 'Cairo',
  };

  return (
    <div
      className={`price-card ${hoveredDiv === index ? 'selected' : ''}`}
      style={i18n.language === 'ar' ? arFont : {}}
    >
      <div className='priceandcontent'>
        <h4
          className='planHeading'
          style={i18n.language === 'ar' ? arFont : {}}
        >
          {title}
        </h4>
        <h2 className='planPrice' style={i18n.language === 'ar' ? arFont : {}}>
          {' '}
          {price}
        </h2>
        <p className='planPara' style={i18n.language === 'ar' ? arFont : {}}>
          {content}
        </p>
      </div>
      <div className='arrows'>
        {features.map((feature, featureIndex) => (
          <div className='feature-containers' key={featureIndex}>
            <img src={DarkArrow} alt='arrow check' className='arrow-check' />

            <span className='feat' style={i18n.language === 'ar' ? arFont : {}}>
              {feature}
            </span>
          </div>
        ))}
      </div>

      <p
        style={
          i18n.language === 'ar'
            ? { padding: '10px 20px', fontFamily: 'Cairo' }
            : {}
        }
        className='priceCardSignupBtn'
      >
        {button}
      </p>
    </div>
  );
};

PricingCard.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.string,
  content: PropTypes.string,
  features: PropTypes.array,
  button: PropTypes.string,
  handleHover: PropTypes.func,
};

PricingCard.defaultProps = {
  index: null,
  title: '',
  price: '',
  content: '',
  features: [],
  button: '',
};

export default PricingCard;
