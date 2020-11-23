import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { Col, Row } from 'antd';

import './style.scss';

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <div className="about-section">
      <h2 className="title"> {t('ABOUT.HEADER')}</h2>
      <Row
        justify="center"
        >
        <Col
          span={20}>
          <p className="about-text">
            <Trans i18nKey="ABOUT.PARAGRAPH_1" />
          </p>
          <p className="about-text">
            <Trans i18nKey="ABOUT.PARAGRAPH_2" />
          </p>
          <p className="about-text">
            <Trans i18nKey="ABOUT.PARAGRAPH_3" />
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default AboutSection;
