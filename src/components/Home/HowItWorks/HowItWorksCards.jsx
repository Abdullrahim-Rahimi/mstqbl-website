import { useTranslation } from 'react-i18next';
import { Text, TextHeading } from '../../Shared/Heading';
import PropTypes from 'prop-types';

const HowItWorksCards = ({ text, textheading, number, numberLines }) => {
  const { i18n } = useTranslation();

  const styles = {
    marginLeft: '30px',
    alignItems: 'center',
  };

  const numberLine = {
    marginTop: '30px',
    left: '0px',
  };

  return (
    <div className='how-right-container'>
      <div
        className='numbered-point'
        style={i18n.language === 'ar' ? styles : {}}
      >
        <div
          style={i18n.language === 'ar' ? { fontFamily: 'Cairo' } : {}}
          className='numbered-circle'
        >
          {numberLines}
        </div>
        {number !== 3 && (
          <div
            className='numbered-line'
            style={i18n.language === 'ar' ? numberLine : {}}
          ></div>
        )}
      </div>

      <div className='content'>
        <TextHeading text={textheading} />
        <Text text={text} />
      </div>
    </div>
  );
};

HowItWorksCards.propTypes = {
  text: PropTypes.string,
  textheading: PropTypes.string,
  number: PropTypes.number,
  numberLines: PropTypes.string,
};

HowItWorksCards.defaultProps = {
  text: '',
  textheading: '',
  number: null,
  numberLines: '',
};

export default HowItWorksCards;
