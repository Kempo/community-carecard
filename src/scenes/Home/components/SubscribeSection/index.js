import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import {
  Button, Form, Input, Row, Col,
} from 'antd';

import { APP_URL } from 'constants.js';
import { subscribeEmailUrl } from 'services/urlHelper';
import SocialShareButtons from 'components/SocialShareButtons';
import './style.scss';

const PENDING_STATUS = 'validating';
const SUCCESS_STATUS = 'success';
const ERROR_STATUS = 'error';

const SubscribeSection = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);

  const handleChange = e => setEmail(e.target.value);

  const handleClick = () => {
    setStatus(PENDING_STATUS);
    axios.get(subscribeEmailUrl(email))
      .then(() => {
        setStatus(SUCCESS_STATUS);
      })
      .catch(() => {
        setStatus(ERROR_STATUS);
      });
  };

  return (
    <div className="subscribe-section">
      <Row className="container" justify="center">
        <Col span={20}>
          <h2>{t('HOME.GET_UPDATES')}</h2>
          <p>{t('HOME.GET_UPDATES_DESCRIPTION')}</p>
        </Col>
        <Col xs={20} lg={14}>
          <div className="email-section">
            <Form
              name="subscribe"
              layout="inline"
              onFinish={handleClick}
            >
              <Form.Item
                className="email-input"
                name="email"
                rules={[
                  {
                    type: 'email',
                    message: 'Please enter a valid email.',
                  },
                  {
                    required: true,
                    message: 'Please enter an email.',
                  },
                ]}
                hasFeedback
                validateStatus={status}
                validateTrigger={['onBlur']}
              >
                <Input
                  type="email"
                  onChange={handleChange}
                  placeholder={t('HOME.ENTER_EMAIL')}
                  size="large"
                  autoComplete="email"
                />
              </Form.Item>
              <Form.Item className="submit-button">
                <Button
                  htmlType="submit"
                  type="primary"
                  disabled={status === PENDING_STATUS}
                  size="large"
                >
                  {t('HOME.SUBSCRIBE')}
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
      <div className="social-buttons">
        <SocialShareButtons message={t('HOME.SOCIAL_SHARE_MESSAGE')} url={APP_URL} />
        <p>{t('HOME.GET_UPDATES_SOCIAL')}</p>
      </div>
    </div>
  );
};

export default SubscribeSection;
