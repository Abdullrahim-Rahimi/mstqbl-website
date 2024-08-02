import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { close, open, logo, arLogo } from '../../assets/images';
import i18n from '../../i18n';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css';
import { useLocation } from 'react-router-dom';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { Spin as Hamburger } from 'hamburger-react';

const Navbar = () => {
  const { t, i18n: myI18n } = useTranslation();
  const [language, setLanguage] = useState('ltr');
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1150);

  const toggleLanguage = () => {
    const currentLanguage = myI18n.language;
    setLanguage((prevLanguage) => (prevLanguage === 'ltr' ? 'rtl' : 'ltr'));
    if (currentLanguage === 'en') {
      document.documentElement.setAttribute('dir', 'rtl');
      return myI18n.changeLanguage('ar');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      return myI18n.changeLanguage('en');
    }
  };

  // useEffect ----------------->
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1150);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // useEffect ends here ----------------->

  // conditionally rendering font famlies --------------->
  const arFont = {
    fontFamily: 'Cairo',
  };

  const enFontFamily = {
    fontFamily: 'Poppins',
  };

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
    setIsOpen(false);
  };

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  // ============== check if the user is on homepage =============>
  const isOnHomePage = useLocation().pathname === '/';

  return (
    <div className='headerContainer'>
      <div className='containers'>
        <div className={isSmallScreen === true ? 'flexHeader' : 'header'}>
          {/* logo + language change text ----------->  */}
          <div
            className={
              isSmallScreen === true ? 'smLogoContainer' : 'logContainer'
            }
          >
            <Link to='/'>
              <img
                className='logoImg'
                src={i18n.language === 'ar' ? arLogo : logo}
                alt='logo'
              />
            </Link>
            {!isSmallScreen && (
              <p
                onClick={toggleLanguage}
                className='languageSuffle'
                style={i18n.language === 'ar' ? enFontFamily : arFont}
              >
                {i18n.language === 'ar' ? 'ENGLISH' : 'عربي'}
              </p>
            )}
          </div>
          {/* links ------------>  */}
          {!isSmallScreen && (
            <div className='links'>
              {naibarLink.map((item, index) => {
                return (
                  <div key={index}>
                    {item.name === 'navbar.home' ||
                    item.name === 'navbar.download' ||
                    item.name === 'navbar.services' ? (
                      isOnHomePage ? (
                        <ScrollLink
                          className='link'
                          to={item.to}
                          spy={true}
                          smooth={true}
                          hashSpy={true}
                          offset={0}
                          duration={800}
                          isDynamic={true}
                          ignoreCancelEvents={false}
                          spyThrottle={500}
                          style={i18n.language === 'ar' ? arFont : enFontFamily}
                        >
                          {t(item.name)}
                        </ScrollLink>
                      ) : (
                        <Link
                          className='link'
                          onClick={handleLinkClick}
                          to={
                            item.to === 'home' ||
                            item.to === 'whyChooseUs' ||
                            item.to === 'howItWorks'
                              ? '/'
                              : item.to
                          }
                          style={i18n.language === 'ar' ? arFont : enFontFamily}
                        >
                          {t(item.name)}
                        </Link>
                      )
                    ) : (
                      <Link
                        className='link'
                        to={item.to}
                        onClick={handleLinkClick}
                        style={i18n.language === 'ar' ? arFont : enFontFamily}
                      >
                        {t(item.name)}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          )}
          {/* signIn + signOut button --------------> */}
          {!isSmallScreen && (
            <div className='buttons'>
              <button
                className={i18n.language === 'ar' ? 'arLogin' : 'enLogin'}
                style={i18n.language === 'ar' ? arFont : enFontFamily}
              >
                {t('navbar.login')}
              </button>
              <button
                style={i18n.language === 'ar' ? arFont : enFontFamily}
                className={i18n.language === 'ar' ? 'arSignUP' : 'enSignUP'}
              >
                {t('navbar.signup')}
              </button>
            </div>
          )}

          {/* drawer + Hamburger for small screen ----------------->  */}
          {isSmallScreen && (
            <div className='drawerContainer'>
              <Hamburger
                color='white'
                rounded
                size={20}
                toggled={isOpen}
                toggle={setIsOpen}
              />
              <Drawer
                open={isOpen}
                className='drawr'
                onClose={toggleDrawer}
                direction={i18n.language === 'ar' ? 'left' : 'right'}
              >
                <div className='drawerItem'>
                  {/* cross icon -------->  */}
                  <div className='crossImg'>
                    <img
                      onClick={toggleDrawer}
                      src={close}
                      alt=''
                      width='45px'
                      height='45px'
                    />
                  </div>
                  {/* links ---------> */}
                  <div className='smLinks'>
                    {naibarLink.map((item, index) => {
                      return (
                        <div key={index}>
                          {item.name === 'navbar.home' ||
                          item.name === 'navbar.download' ||
                          item.name === 'navbar.services' ? (
                            isOnHomePage ? (
                              <ScrollLink
                                className='sLink'
                                onClick={toggleDrawer}
                                to={item.to}
                                spy={true}
                                smooth={true}
                                hashSpy={true}
                                offset={0}
                                duration={800}
                                isDynamic={true}
                                ignoreCancelEvents={false}
                                spyThrottle={500}
                                style={
                                  i18n.language === 'ar' ? arFont : enFontFamily
                                }
                              >
                                {t(item.name)}
                              </ScrollLink>
                            ) : (
                              <Link
                                className='sLink'
                                onClick={handleLinkClick}
                                to={
                                  item.to === 'home' ||
                                  item.to === 'whyChooseUs' ||
                                  item.to === 'howItWorks'
                                    ? '/'
                                    : item.to
                                }
                                style={
                                  i18n.language === 'ar' ? arFont : enFontFamily
                                }
                              >
                                {t(item.name)}
                              </Link>
                            )
                          ) : (
                            <Link
                              className='sLink'
                              to={item.to}
                              onClick={handleLinkClick}
                              style={
                                i18n.language === 'ar' ? arFont : enFontFamily
                              }
                            >
                              {t(item.name)}
                            </Link>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  {/* translator toggle ------------>  */}
                  <p
                    onClick={toggleLanguage}
                    className='sLanguageSuffle'
                    style={i18n.language === 'ar' ? enFontFamily : arFont}
                  >
                    {i18n.language === 'ar' ? 'ENGLISH' : 'عربي'}
                  </p>
                  <div className='smButtons'>
                    <button
                      onClick={toggleDrawer}
                      className={
                        i18n.language === 'ar' ? 'arSmLogin' : 'enSmLogin'
                      }
                      style={i18n.language === 'ar' ? arFont : enFontFamily}
                    >
                      {t('navbar.login')}
                    </button>
                    <button
                      onClick={toggleDrawer}
                      style={i18n.language === 'ar' ? arFont : enFontFamily}
                      className={
                        i18n.language === 'ar' ? 'arSmLogin' : 'enSmLogin'
                      }
                    >
                      {t('navbar.signup')}
                    </button>
                  </div>
                </div>
              </Drawer>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const naibarLink = [
  {
    to: 'home',
    name: 'navbar.home',
  },
  {
    to: 'whyChooseUs',
    name: 'navbar.services',
  },
  {
    to: 'howItWorks',
    name: 'navbar.download',
  },
  {
    to: '/about_us',
    name: 'navbar.about',
  },
  {
    to: '/contact',
    name: 'navbar.contact',
  },
];

export default Navbar;
