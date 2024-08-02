import { useTranslation } from 'react-i18next';
import ReviewSlider from '../components/Home/ReviewSlider/ReviewSlider';
import FAQ from '../components/Home/FAQ/FAQ';
import Footer from './Shared/Footer/Footer';
import Hero from './Home/Hero/Hero';
import WhyChooseUs from './Home/WhyChooseUs/WhyChooseUs';
import Advisors from './Home/Advisors/Advisors';
import HowItWorks from './Home/HowItWorks/HowItWorks';
import Download from './Home/Download/Download';
import Pricing from './Home/Pricing/Pricing';

function Home() {
  const { i18n } = useTranslation();

  const arFont = {
    fontFamily: 'Cairo !important',
  };

  return (
    <div style={i18n.language === 'ar' ? arFont : {}}>
      <Hero />
      <WhyChooseUs />
      <Advisors />
      <HowItWorks />
      <Download />
      <Pricing />
      <div id='reviewSlider'>
        <ReviewSlider />
      </div>
      <div id='faq'>
        <FAQ />
      </div>
    </div>
  );
}

export default Home;
