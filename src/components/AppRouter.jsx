import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Services from './Services';
import Download from './Download';
import Contact from './Contact/Contact';
import Navbar from './Shared/Navbar';
import TermsAndCondition from './TermsAndCondition';
import Footer from './Shared/Footer/Footer';
import PrivacyPolicy from './PrivacyPolicy';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className='cont-ainer'>
        <Navbar />
        <Routes>
          {/* <Suspense></Suspense> */}
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/download' element={<Download />} />
          <Route path='/about_us' element={<About />} />
          <Route path='/legal_terms' element={<TermsAndCondition />} />
          <Route path='/privacy_policy' element={<PrivacyPolicy />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Home />} />
          <Route path='/signup' element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
