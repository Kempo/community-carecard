import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Layout } from 'antd';
import TermsOfUseModal from 'components/TermsOfUse';
import { privacyPolicyPath, contactPath } from 'services/routesHelper';
import {
  CCC_INSTAGRAM__URL,
  CCC_FACEBOOK_URL,
  CCC_TWITTER_URL,
  INSTAGRAM_LINK_TEXT,
  TWITTER_LINK_TEXT,
  FACEBOOK_LINK_TEXT,
} from './constants';
import './style.scss';

const Footer = () => {
  const { t } = useTranslation();
  const [termsVisibility, setTermsVisibility] = useState(false);

  return (
    <Layout.Footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <a className="internal-link" href={contactPath()}>
            {t('SHARED.CONTACT')}
          </a>
          <div className="internal-link" onClick={() => setTermsVisibility(true)}>
            {t('SHARED.TOS')}
          </div>
          <a className="internal-link" href={privacyPolicyPath()}>
            {t('SHARED.PRIVACY_POLICY')}
          </a>
        </div>
        <div className="footer-section">
          <a className="external-link" href={CCC_INSTAGRAM__URL} target="_blank" rel="noopener noreferrer">
            {INSTAGRAM_LINK_TEXT}
          </a>
          <a className="external-link" href={CCC_TWITTER_URL} target="_blank" rel="noopener noreferrer">
            {TWITTER_LINK_TEXT}
          </a>
          <a className="external-link" href={CCC_FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
            {FACEBOOK_LINK_TEXT}
          </a>
        </div>
      </div>
      <TermsOfUseModal
        onCancel={() => setTermsVisibility(false)}
        visible={termsVisibility}
      />
    </Layout.Footer>
  );
};

export default Footer;
