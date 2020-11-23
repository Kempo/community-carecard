import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Row } from 'antd';

import './style.scss';

const OurValuesSection = () => {
  const { t } = useTranslation();

  const hasBorder = false;

  return (
    <div className="values">
      {hasBorder && <div className="border"/>}
      <h2 className="title">{t('ABOUT.VALUES')}</h2>
      <Row
        className="values-row"
        gutter={32}
        justify="center">
        <Col>
          <span className="optimistic">{t('ABOUT.OPTIMISTIC')}</span>
        </Col>
        <Col>
          <span className="local">{t('ABOUT.LOCAL')}</span>
        </Col>
        <Col>
          <span className="compassionate">{t('ABOUT.COMPASSIONATE')}</span>
        </Col>
        <Col>
          <span className="trustworthy">{t('ABOUT.TRUSTWORTHY')}</span>
        </Col>
      </Row>
    </div>
  );
};

export default OurValuesSection;
