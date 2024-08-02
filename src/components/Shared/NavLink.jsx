import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

const NavLink = ({ to, linkText }) => {
  const { t, i18n } = useTranslation();

  const arFont = {
    fontFamily: 'Cairo',
  };

  return (
    <Link
      to={to}
      className={'navigation-links'}
      style={i18n.language === 'ar' ? arFont : {}}
    >
      {t(linkText)}
    </Link>
  );
};

NavLink.propTypes = {
  to: PropTypes.string,
  linkText: PropTypes.string,
  linkClass: PropTypes.bool,
};

NavLink.defaultProps = {
  to: null,
  linkText: null,
  linkClass: false,
};

export default NavLink;
