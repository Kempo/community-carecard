import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import { Row } from 'antd';

import Alert from 'components/Alert';
import { businessPagePath } from 'services/urlHelper';
import { useQueryParams } from 'hooks/useQueryParams';
import { STATUS_PENDING, STATUS_ACTIVE } from 'constants.js';

import OnboardForm from './components/Form';
import {
  ALERT_BUSINESS_ACTIVE, ALERT_BUSINESS_CLAIMED, ALERT_BUSINESS_PENDING,
} from '../../constants';
import './style.scss';

const Onboard = (props) => {
  const { match: { params: { id } } } = props;

  const [alertProps, setAlertProps] = useState(null);
  const { businessName } = useQueryParams('businessName');
  const history = useHistory();
  const { t } = useTranslation();

  const handleSuccess = (business) => {
    if (business.status === STATUS_PENDING) {
      history.push(businessPagePath(business.externalRefId, ALERT_BUSINESS_PENDING));
    } else if (business.status === STATUS_ACTIVE) {
      history.push(businessPagePath(business.externalRefId, ALERT_BUSINESS_ACTIVE));
    } else {
      history.push({
        pathname: '/confirmation',
        state: {
          title: 'ONBOARD.CONFIRMATION.TITLE',
          descriptionKey: 'ONBOARD.CONFIRMATION.DESC',
          businessEmail: business.owner && business.owner.email,
          businessName: business.name,
        },
      });
    }
  };

  const handleError = (businessId, err) => {
    if (err.response && err.response.status === 409) {
      history.push(businessPagePath(businessId, ALERT_BUSINESS_CLAIMED));
    } else {
      setAlertProps({ description: t('SHARED.GENERIC_ERROR'), type: 'error' });
    }
  };

  return (
    <div className="onboard container">
      {alertProps && <Alert {...alertProps} />}
      <div className="head">
        <h2>{t('ONBOARD.TITLE')}</h2>
        <Row justify="center">
          <h6><Trans i18nKey="ONBOARD.DESC" /></h6>
        </Row>
      </div>
      <OnboardForm
        bizId={id}
        name={businessName}
        onError={handleError}
        onSuccess={handleSuccess}
      />
    </div>
  );
};


Onboard.propTypes = {
  match: PropTypes.shape().isRequired,
};

export default Onboard;
