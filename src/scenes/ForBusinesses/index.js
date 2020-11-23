import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Row, Col } from 'antd';
import { useTranslation, Trans } from 'react-i18next';
import Description from './components/Description';
import OnboardFlow from './components/OnboardFlow';
import './style.scss';

const ForBusinesses = () => {

  const { t } = useTranslation();

  return (
    <div className="for-businesses container">
      <h2>{t('FOR_BIZ.HEADER')}</h2>
      <Description />
      <OnboardFlow />
      <Row justify="center">
        <Col span={20}>
          <p>{t('FOR_BIZ.FOOTER_1')}</p>
          <Link to="/onboard">
            <Button className="action-button" size="large">{t('FOR_BIZ.REGISTER_BIZ')}</Button> 
          </Link>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={20}>
          <p>
            <Trans i18nKey="FOR_BIZ.FOOTER_2">
              Check out our <a href='/business-resources' target='_blank' rel='noopener noreferrer'>Resources page</a> also for additional resources on navigating the coronavirus pandemic.
            </Trans>
          </p>
        </Col>
      </Row>
    </div>
  )
}

export default ForBusinesses;