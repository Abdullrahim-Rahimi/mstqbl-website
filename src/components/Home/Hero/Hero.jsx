import { useTranslation } from 'react-i18next';
import { GooglePlay, iPhone, AppStore } from '../../../assets/images';
import './Hero.css';
import { Link } from 'react-router-dom';

export function Hero() {
  const { t, i18n } = useTranslation();

  const arFont = {
    fontFamily: 'Cairo',
    fontSize: window.innerWidth >= 480 ? '16px' : '14px',
  };
  // console.log(t('termsandcondition.heading'));

  const arFontFamily = {
    fontFamily: 'Cairo',
    fontSize: window.innerWidth >= 480 ? '64px' : '40px',
    fontWeight: '700',
  };

  return (
    <header id='home' className='hero'>
      <div className='containers'>
        <div className='hero-container'>
          <div className='hero-left'>
            <h1
              className='heroH1'
              style={i18n.language === 'ar' ? arFontFamily : {}}
            >
              {t('home.hero.heading')}
            </h1>
            <h1
              className='heroH1'
              style={i18n.language === 'ar' ? arFontFamily : {}}
            >
              {t('home.hero.heading-b')}
            </h1>
            <p
              className='heroPara'
              style={i18n.language === 'ar' ? arFont : {}}
            >
              {t('home.hero.content')}
            </p>

            <div className='imageContainer'>
              <Link
                to='https://play.google.com/store/games?hl=en&gl=US&pli=1'
                target='blank'
              >
                <img src={GooglePlay} alt='Google Play' className='linkImage' />
              </Link>
              <Link
                to='https://play.google.com/store/games?hl=en&gl=US&pli=1'
                target='blank'
              >
                <img src={AppStore} alt='App Store' className='linkImage' />
              </Link>
            </div>
          </div>

          <div className='heroImage'>
            <img
              className='hero-img'
              src={iPhone}
              alt='iPhone showing homepage of financial plan'
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
