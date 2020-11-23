import React from 'react';
import { Button, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import { CONTACT_EMAIL } from 'constants.js';

import './style.scss';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="contact container">
      <h2>{t('CONTACT.HEADER')}</h2>
      <Row justify="center">
        <Col xs={22} sm={20} md={12}>
          <p className="description">
            <Trans i18nKey="CONTACT.DESC">
              If you have a question, idea or comment about Community Carecard, email us at
              <a href={`mailto:${CONTACT_EMAIL}`} target='_blank' rel='noopener noreferrer'>{{ email: CONTACT_EMAIL }}</a>
              You can also visit our Frequently Asked Questions.
            </Trans>
          </p>
        </Col>
      </Row>
      <Row justify="center">
        <Link to="/faq" className="links">
          <Button size="large" type="primary">
            {t('CONTACT.FAQ_LINK')}
          </Button>
        </Link>
      </Row>
    </div>
  );
};
export default Contact;
