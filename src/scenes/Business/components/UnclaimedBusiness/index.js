import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import { Button, Row, Col } from 'antd';

import SocialShareButtons from 'components/SocialShareButtons';
import { onboardPath } from 'services/routesHelper';
import { businessPageUrl } from 'services/urlHelper';
import { WHATS_APP, EMAIL, COPY_LINK } from 'constants.js';
import './style.scss';

const UnclaimedBusiness = ({ business }) => {
  const { name, externalRefId: id } = business;
  const { t } = useTranslation();

  return (
    <div className="unclaimed-business">
      <h3 className="primary">
        {t('UNCLAIMED_BUSINESS.UNCLAIMED_HEADER')}
      </h3>
      <Row className="owner-section">
        <Col className="info-section" xs={24} md={16}>
          <div className="subhead">
            {t('UNCLAIMED_BUSINESS.OWNER_PROMPT')}
          </div>
          <div className="description">
            <Trans>
              {t('UNCLAIMED_BUSINESS.OWNER_DESCRIPTION', { name })}
            </Trans>
          </div>
        </Col>
        <Col xs={24} md={8}>
          <Link to={onboardPath(id, name)}>
            <Button className="btn-filled-action">
              {t('UNCLAIMED_BUSINESS.CLAIM')}
            </Button>
          </Link>
        </Col>
      </Row>
      <Row className="customer-section">
        <Col className="info-section" xs={24} md={16}>
          <div className="subhead">
            {t('UNCLAIMED_BUSINESS.CUSTOMER_PROMPT')}
          </div>
          <div className="description">
            <Trans>
              {t('UNCLAIMED_BUSINESS.CUSTOMER_DESCRIPTION', { bizName: name })}
            </Trans>
          </div>
        </Col>
        <Col className="social-buttons" xs={{ span: 12, offset: 6 }} md={{ span: 8, offset: 0 }}>
          <SocialShareButtons
            platforms={[EMAIL, WHATS_APP, COPY_LINK]}
            url={businessPageUrl(id)}
          />
        </Col>
      </Row>
    </div>
  );
};

UnclaimedBusiness.propTypes = {
  business: PropTypes.shape().isRequired,
};

export default UnclaimedBusiness;
