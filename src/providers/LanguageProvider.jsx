import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types'; // Import PropTypes

// Create the context
export const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [translations, setTranslations] = useState({});


  // Fetch translations based on the language
  const fetchTranslations = async (lang) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/translate?lng=${lang}`);
      setTranslations(response.data); // Update state with fetched translations

    } catch (error) {
      console.error('Error fetching translations:', error);
    }
  };

  // Fetch the default language on mount
  useEffect(() => {
    fetchTranslations('en'); // Default language is English
  }, []);

  return (
    <LanguageContext.Provider value={{ translations, fetchTranslations }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Define prop types for the LanguageProvider component
LanguageProvider.propTypes = {
    children: PropTypes.node.isRequired, // 'children' should be of type 'node' and is required
  };

export default LanguageProvider;
