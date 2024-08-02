import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { H2, H5 } from './Shared/Heading';
import axios from 'axios';
import Spinner from './Shared/Spinner/Spinner';
import DOMPurify from 'dompurify';

const TermsAndCondition = () => {
  // states ----------->
  const { t, i18n } = useTranslation();
  const [termsAndConditionData, setTermsAndConditionData] = useState('');

  // states ends here ----------->

  // useEffect ------------------>
  useEffect(() => {
    const fetchLegalTermsData = async () => {
      try {
        const language = i18n.language || 'en';
        const path = 'https://devadmin.mstqbl.com/api/v1/legal_terms';
        const url = `${path}/${language}`;
        const response = await axios.get(url);
        setTermsAndConditionData(response.data);
      } catch (error) {
        console.error('Error fetching data:🔥🔥', error);
      }
    };

    fetchLegalTermsData();
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

  const sanitizedHTML = DOMPurify.sanitize(termsAndConditionData.data);

  return (
    <div className='containers'>
      {termsAndConditionData === '' ? (
        <div className='termsSpinner'>
          <Spinner />
        </div>
      ) : (
        <div className='pageContainer'>
          {/* TITLE AND SUBTITLE ------------------> */}
          <div>
            <H5 centered text={t('terms.title')} />
            <H2 centered text={t('terms.subtitle')} />
          </div>
          <div
            // className='sectionText'
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
};

export default TermsAndCondition;
