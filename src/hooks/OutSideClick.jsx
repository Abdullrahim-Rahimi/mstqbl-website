import React, { useRef, useEffect, ReactNode } from 'react';
import PropTypes from 'prop-types';

export default function OutSideClick({ children, Event, style }) {
  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          Event();
        }
      }
      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  }
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  return (
    <div className={`${style}`} ref={wrapperRef}>
      {children}
    </div>
  );
}

OutSideClick.propTypes = {
  children: PropTypes.node.isRequired,
};
