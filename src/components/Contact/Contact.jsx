import React, { useEffect, useState } from 'react';
import './Contact.css';
import { useTranslation } from 'react-i18next';
import { H2, H5 } from '../Shared/Heading';
import OutSideClick from '../../hooks/OutSideClick';
import axios from 'axios';
import Spinner from '../Shared/Spinner/Spinner';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const Contact = () => {
  // states --------------------------->
  const { t, i18n } = useTranslation();
  const [IsOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [subjects, setSubjects] = useState();
  const [contactUs, setContactUs] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  // states ends here ---------------------->

  const handleContactUsData = (event) => {
    const { name, value } = event.target;
    setContactUs((prevContactUs) => ({
      ...prevContactUs,
      [name]: value,
    }));
  };

  // useEffect startes here ---------------------->
  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const language = i18n.language || 'en';
        const path = 'https://devadmin.mstqbl.com/api/v1/contact-us/subjects';
        const url = `${path}/${language}`;
        const response = await axios.get(path, {
          headers: {
            'x-localization': language,
          },
        });
        setSubjects(response.data);
      } catch (error) {
        console.error('Error fetching data:🔥🔥', error);
      }
    };

    fetchSubjects();
  }, []);

  // useEffect ends here ----------------------->

  // conditionally rendering font famlies ----------------->
  const arFont = {
    fontFamily: 'Cairo',
  };

  const enFontFamily = {
    fontFamily: 'Lato',
  };

  // handle form submit -------------->
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        'https://devadmin.mstqbl.com/api/v1/contact-us/submit',
        {
          email: contactUs.email,
          full_name: contactUs.fullName,
          subject: contactUs.subject,
          message: contactUs.message,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setLoading(false);
      console.log('Submission successful:', response.data);
      toast.success('Submitted 😊', {
        autoClose: 2000,
        closeOnClick: true,
        top,
      });
    } catch (error) {
      console.error('Error submitting contact form:', error);
    }
  };

  return (
    <div className='containers'>
      {subjects ? (
        <div className='contactUsContainer'>
          {/* TITLE AND SUBTITLE ------------------------> */}
          <div>
            <H5 centered text={t('contact.title')} />
            <H2 centered text={t('contact.subtitle')} />
          </div>
          {/* FORM ------------------------->  */}
          <div
            className='formContainer'
            style={i18n.language === 'ar' ? arFont : enFontFamily}
          >
            <form onSubmit={handleSubmit} className='form'>
              {/* FULL NAME + EMAIL INPUT -------------->  */}
              <div className='inputs'>
                {/* full name -->  */}
                <div className='inputContainer'>
                  <label htmlFor='fullName' className='label'>
                    {t('contact.form.full_name')}
                  </label>
                  <input
                    onChange={(e) => handleContactUsData(e)}
                    required
                    className={i18n.language === 'ar' ? 'arInput' : 'enInput'}
                    name='fullName'
                    value={contactUs.fullName}
                    type='text'
                    placeholder={t('contact.form.full_name.placeholder')}
                  />
                </div>
                {/* email name -->  */}
                <div className='inputContainer'>
                  <label htmlFor='fullName' className='label'>
                    {t('contact.form.email')}
                  </label>
                  <input
                    name='email'
                    required
                    className={i18n.language === 'ar' ? 'arInput' : 'enInput'}
                    value={contactUs.email}
                    onChange={(e) => handleContactUsData(e)}
                    type='email'
                    placeholder={t('contact.form.email.placeholder')}
                  />
                </div>
              </div>
              {/* SELECT SUBJECT ----------->   */}
              <div className='inputContainer'>
                <label htmlFor='subject' className='label'>
                  {t('contact.form.subject')}
                </label>
                <OutSideClick
                  Event={() => {
                    setIsOpen(false);
                  }}
                  style=''
                >
                  <div className='subjectContainer'>
                    <div className='customSelect'>
                      <input
                        onClick={() => setIsOpen(!IsOpen)}
                        type='text'
                        name='subject'
                        required
                        className={
                          i18n.language === 'ar' ? 'arInput' : 'enInput'
                        }
                        autoComplete='off'
                        value={contactUs.subject}
                        style={{ cursor: 'pointer' }}
                        placeholder={t('contact.form.subject.placeholder')}
                      />
                      <img
                        src='/assets/down.svg'
                        alt=''
                        className={
                          i18n.language === 'ar'
                            ? 'arSelectArrow'
                            : 'selectArrow'
                        }
                      />
                    </div>
                    {IsOpen && (
                      <div className='selectBoxOptionContainer'>
                        <>
                          {subjects?.data.map((option, index) => {
                            return (
                              <div
                                className={`${
                                  contactUs.subject === option
                                    ? 'selectBoxOption subjectSelected'
                                    : 'selectBoxOption'
                                } `}
                                key={index}
                                onClick={() => {
                                  setContactUs({
                                    ...contactUs,
                                    subject: option,
                                  });
                                  setIsOpen(false);
                                }}
                              >
                                {option}
                              </div>
                            );
                          })}
                        </>
                      </div>
                    )}
                  </div>
                </OutSideClick>
              </div>
              {/* MESSAGE --------------------->  */}
              <div className='inputContainer'>
                <label htmlFor='message' className='label'>
                  {t('contact.form.message')}
                </label>
                <textarea
                  name='message'
                  required
                  value={contactUs.message}
                  className={
                    i18n.language === 'ar' ? 'arTextArea' : 'enTextarea'
                  }
                  onChange={(e) => handleContactUsData(e)}
                  placeholder={t('contact.form.message.placeholder')}
                ></textarea>
              </div>
              {/* IMPORTANT MESSAGE ------------> */}
              <p className='message'>
                {t('contact.form.notice.phrase')}{' '}
                <Link to='/privacy_policy' className='messageLink'>
                  {t('contact.form.privacy')}
                </Link>{' '}
                {t('contact.form.and')}{' '}
                <Link to='/legal_terms' className='messageLink'>
                  {t('contact.form.terms')}
                </Link>
                .
              </p>
              <div className='btnContainer'>
                <button type='submit' className='submitBtn'>
                  <>
                    {loading && (
                      <Spinner
                        borderColor='#ffffff'
                        width='34px'
                        height='34px'
                        borderWidth='3px'
                      />
                    )}
                  </>
                  <p style={i18n.language === 'ar' ? arFont : enFontFamily}>
                    {t('contact.form.submit')}
                  </p>
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className='termsSpinner'>
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default Contact;
