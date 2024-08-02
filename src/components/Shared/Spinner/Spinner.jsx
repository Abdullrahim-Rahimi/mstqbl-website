import React from 'react';
import PropTypes from 'prop-types';
import './Spinner.css';

const Spinner = ({ borderColor, width, height, borderWidth }) => {
  const spinnerStyle = {
    '--border-color': borderColor || '#00b795',
    '--width': width || '60px',
    '--height': height || '60px',
    '--border-width': borderWidth || '6px',
  };

  return (
    <div className='spinnerContainer' style={spinnerStyle}>
      <span className='loader'></span>
    </div>
  );
};

Spinner.propTypes = {
  borderColor: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  borderWidth: PropTypes.string,
};

export default Spinner;
