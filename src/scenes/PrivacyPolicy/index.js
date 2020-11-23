import React from 'react';
import { useTranslation } from 'react-i18next';
import { Policy } from './components/Policy';
import './style.scss';

const PrivacyPolicy = () => {
  const { t } = useTranslation();
  return (
    <div className="privacy-policy container">
      <h2>{t('SHARED.PRIVACY_POLICY')}</h2>
      <Policy />
    </div>
  );
};

export default PrivacyPolicy;
