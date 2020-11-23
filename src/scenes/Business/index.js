import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { Row, Col } from 'antd';
import { Redirect } from 'react-router-dom';
import { EnvironmentOutlined, ShareAltOutlined } from '@ant-design/icons';

import Alert from 'components/Alert';
import ShareButton from 'components/ShareButton';
import { businessInformationUrl, businessPageUrl } from 'services/urlHelper';
import { useQueryParams } from 'hooks/useQueryParams';

import SupportForm from './components/SupportForm';
import UnclaimedBusiness from './components/UnclaimedBusiness';
import { alertPropsForType } from './services';
import { ALERT_ONBOARDING_SUCCESSFUL, ALERT_GENERIC_ERROR } from './constants';
import './style.scss';

const Business = (props) => {
  const { match: { params: { id } } } = props;

  const { t } = useTranslation();
  const [business, setBusiness] = useState(null);
  const { alert: alertQueryParam, confirm } = useQueryParams('alert', 'confirm');
  const [alert, setAlert] = useState(alertQueryParam);
  const alertType = confirm ? ALERT_ONBOARDING_SUCCESSFUL : alert;

  useEffect(() => {
    axios.get(businessInformationUrl(id))
      .then(r => setBusiness(r.data))
      .catch(() => setBusiness(undefined));
  }, [id]);

  const handleFormError = () => setAlert(ALERT_GENERIC_ERROR);

  return (
    <React.Fragment>
      {alertPropsForType(alertType, t) && <Alert {...alertPropsForType(alertType, t)} />}
      <div className="business-page container">
        {business === undefined && <Redirect to="/?alert=generic-error" />}
        {business && (
          <Row className="business-section">
            <div className="business-header">
              <div className="business-name-row">
                <h2>{business.name}</h2>
                <ShareButton
                  message={t('BUSINESS.SHARE_MESSAGE', { name: business.name })}
                  url={businessPageUrl(id)}
                >
                  {t('SHARED.SHARE')}
                  <ShareAltOutlined className="share-icon" />
                </ShareButton>
              </div>
              <div className="business-location">
                <EnvironmentOutlined />
                <div>{business.address}</div>
              </div>
            </div>
            <Col className="business-image" xs={24} md={8}>
              <img
                src={business.photo && business.photo.photoUrl}
                alt={business.name}
              />
            </Col>
            <Col className="business-support-form" xs={24} md={16}>
              {business.active
                ? (
                  <React.Fragment>
                    <div className="business-description">
                      {business.description}
                    </div>
                    <SupportForm
                      businessId={id}
                      businessName={business.name}
                      onError={handleFormError}
                    />
                  </React.Fragment>
                ) : <UnclaimedBusiness business={business} />
              }
            </Col>
          </Row>
        )}
      </div>
    </React.Fragment>
  );
};

Business.propTypes = {
  match: PropTypes.shape().isRequired,
};

export default Business;
