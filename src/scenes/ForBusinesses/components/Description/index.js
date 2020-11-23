import React from 'react';
import { Row, Col } from 'antd';
import { useTranslation, Trans } from 'react-i18next';
import './style.scss';

const Description = () => {

  const { t } = useTranslation();

  return (
    <div className="for-biz-desc">
      <Row justify="center">
        <Col span={20}>
          <p><Trans i18nKey="FOR_BIZ.FIRST" /></p>
          <p><Trans i18nKey="FOR_BIZ.SECOND" /></p>
          <p><Trans i18nKey="FOR_BIZ.THIRD" /></p>
          <p>{t('FOR_BIZ.GET_STARTED')}</p>
        </Col>
      </Row>
    </div>
  )
}

export default Description;