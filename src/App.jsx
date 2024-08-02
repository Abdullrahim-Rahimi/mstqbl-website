import './App.css';

import AppRouter from './components/AppRouter';
import i18n from './i18n'; // Import the localization setup
import Navbar from './components/Shared/Navbar';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Footer from './components/Shared/Footer/Footer';

function App() {
  const { i18n: myI18n } = useTranslation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let lang = i18n.isInitialized ? myI18n.language : 'en';

    const fetchTranslations = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://devadmin.mstqbl.com/api/v1/lang/${lang}`
        );

        const translations = await response.json();

        const flattenedData = {};

        translations.data.forEach((item) => {
          flattenedData[item.key] = item.value;
        });

        i18n.addResourceBundle(
          myI18n.language,
          'translation',
          flattenedData,
          true,
          true
        );
        setLoading(false);
      } catch (error) {
        console.error('Error fetching translations:', error);
        setLoading(false);
      }
    };

    fetchTranslations();
  }, [myI18n.language]);

  // Show loading state
  if (loading) {
    return <div className='loading'></div>;
  }

  return (
    <AppRouter>
      <Navbar />
    </AppRouter>
  );
}

export default App;
