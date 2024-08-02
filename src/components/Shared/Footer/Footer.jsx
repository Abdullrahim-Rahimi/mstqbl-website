import { useTranslation } from 'react-i18next';
import './Footer.css';
import { Link } from 'react-router-dom';

import {
  logo,
  arLogo,
  appStore,
  playStore,
  fb,
  Twitter,
  Linkedin,
  Instagram,
} from '../../../assets/images';

const Footer = () => {
  const { t, i18n } = useTranslation();

  const arFont = {
    fontFamily: 'Cairo',
  };

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className='footer-container'>
      <div className='containers'>
        <div className=''>
          <Link to='/' onClick={handleLinkClick} className='logo-container'>
            <img
              src={i18n.language === 'en' ? logo : arLogo}
              alt='Logo'
              className='logoFooter'
              id='logo-footer'
            />
          </Link>

          <div className='socials-container'>
            <div
              className='footer-social-text'
              style={i18n.language === 'ar' ? arFont : {}}
            >
              {t('footer.socials')}
            </div>

            <div className='social-icon-main-container'>
              <div className='social-icons'>
                <a
                  target='blank'
                  href='https://www.facebook.com'
                  className='social-icon-link'
                >
                  <img src={fb} alt='facebook icon' className='social-icon' />
                </a>
                <a
                  target='blank'
                  href='https://www.twitter.com'
                  className='social-icon-link'
                >
                  <img
                    src={Twitter}
                    alt='twitter icon'
                    className='social-icon'
                  />
                </a>
                <a
                  target='blank'
                  href='https://www.linkedin.com'
                  className='social-icon-link'
                >
                  <img src={Linkedin} alt='linkedin' className='social-icon' />
                </a>
                <a
                  target='blank'
                  href='https://www.instagram.com'
                  className='social-icon-link'
                >
                  <img
                    src={Instagram}
                    alt='instagram'
                    className='social-icon'
                  />
                </a>
              </div>
            </div>
          </div>

          <div className='bottomIcons'>
            <div className='footerBtn'>
              <Link
                target='blank'
                className=''
                to='https://play.google.com/store/games?hl=en&gl=US&pli=1'
              >
                <img
                  src={appStore}
                  alt='appstore icon'
                  className='storeImage'
                />
              </Link>
              <Link
                to='https://play.google.com/store/games?hl=en&gl=US&pli=1'
                target='blank'
              >
                <img
                  src={playStore}
                  alt='playstore icon'
                  className='storeImage'
                />
              </Link>
            </div>
          </div>

          <hr className='divider' />
        </div>

        <div className='footer-text'>
          <div
            className='left-text col-sm-6'
            style={i18n.language === 'ar' ? arFont : {}}
          >
            {t('footer.rights')}
          </div>
          <div className='right-text '>
            <Link
              onClick={handleLinkClick}
              to='/legal_terms'
              style={i18n.language === 'ar' ? arFont : {}}
            >
              {t('footer.terms')}
            </Link>
            <Link
              to='/privacy_policy'
              onClick={handleLinkClick}
              style={i18n.language === 'ar' ? arFont : {}}
            >
              {t('footer.privacy')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
