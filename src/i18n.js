import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from './translations/en';

const resources = {
  en
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",

  keySeparator: ".", 

  interpolation: {
    escapeValue: false
  },
  returnObjects: true,
  react: {
    transSupportBasicHtmlNodes: true,
    transKeepBasicHtmlNodesFor: ['br', 'strong', 'b', 'i', 'p', 'a']
  }
});

export default i18n;