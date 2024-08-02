import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { H2, H5 } from './Shared/Heading';
import axios from 'axios';
import Spinner from './Shared/Spinner/Spinner';
import DOMPurify from 'dompurify';

function About() {
  // states ----------->
  const { t, i18n } = useTranslation();
  const [aboutData, setAboutData] = useState('');
  // states ends here ----------->

  // useEffect ------------------>
  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const language = i18n.language || 'en';
        const path = 'https://devadmin.mstqbl.com/api/v1/about_us';
        const url = `${path}/${language}`;
        const response = await axios.get(url);
        setAboutData(response.data);
      } catch (error) {
        console.error('Error fetching data:🔥🔥', error);
      }
    };

    fetchAboutData();
  }, [i18n.language]);

  // useEffect ends here ------------------->

  // conditionally rendering font famlies --------------->
  const arFont = {
    fontFamily: 'Cairo',
    fontSize: window.innerWidth >= 480 ? '16px' : '14px',
    lineHeight: '36px',
  };

  const enFontFamily = {
    fontFamily: 'Poppins',
    fontSize: window.innerWidth >= 480 ? '16px' : '14px',
    lineHeight: '30px',
  };

  const sanitizedHTML = DOMPurify.sanitize(aboutData.data);

  return (
    <div className='containers'>
      {aboutData === '' ? (
        <div className='termsSpinner'>
          <Spinner />
        </div>
      ) : (
        <div className='pageContainer'>
          {/* TITLE AND SUBTITLE ------------------> */}
          <div>
            <H5 centered text={t('about_us.title')} />
            <H2 centered text={t('about_us.subtitle')} />
          </div>
          <div
            className={
              i18n.language === 'ar' ? 'arSectionText' : 'enSectionText'
            }
            style={i18n.language === 'ar' ? arFont : enFontFamily}
            dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
          ></div>
        </div>
      )}
    </div>
  );
}

export default About;
