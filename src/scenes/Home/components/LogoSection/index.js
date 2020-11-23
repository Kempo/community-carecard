import React from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Col } from 'antd';

import LogoImgOne from '../../../../images/home/Stripe_logo.png';
import LogoImgTwo from '../../../../images/home/covid_accelerator_logo.png';
import LogoImgThree from '../../../../images/home/Bloomberg_logo.png';

import './style.scss';

const LogoSection = () => {
  const { t } = useTranslation();

  return (
    <div className="logo-section">
      <div className="top-bar">
        <p>{t('HOME.SPONSORED.POW')}</p>
        <a href="//stripe.com" target="_blank" rel="noopener noreferrer">
          <img src={LogoImgOne} alt={t('HOME.SPONSORED.POW_ALT')} />
        </a>
      </div>
      <Row className="bot-bar" justify="center">
        <Col className="logo-col" xs={20} md={12} xl={8}>
          <p>{t('HOME.SPONSORED.PART')}</p>
          <a href="//covidaccelerator.com" target="_blank" rel="noopener noreferrer">
            <img src={LogoImgTwo} alt={t('HOME.SPONSORED.PART_ALT')} />
          </a>
        </Col>
        <Col className="logo-col" xs={20} md={12} xl={8}>
          <p>{t('HOME.SPONSORED.MEP')}</p>
          <a href="//bloomberg.com/news/articles/2020-04-16/coronavirus-forces-silicon-valley-to-reset-its-moral-compass" target="_blank" rel="noopener noreferrer">
            <img src={LogoImgThree} alt={t('HOME.SPONSORED.MEP_ALT')} />
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default LogoSection;
