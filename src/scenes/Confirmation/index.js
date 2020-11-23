import React from 'react';
import { Row, Button } from 'antd';
import { useLocation, Link } from "react-router-dom";
import { Trans, useTranslation } from 'react-i18next';
import Payment from './components/Payment';
import './style.scss';

const Confirmation = () => {
  const location = useLocation();
  const { t } = useTranslation();

  return (
      <div className="confirmation container">
      {
        location.state ?
        (
          <div>
            <h2 className="title">
              {t(location.state.title)}
            </h2>
            <h6>
              <Trans>
                {t(location.state.descriptionKey, { name: location.state.businessName, email: location.state.businessEmail })}
              </Trans>
            </h6>
          </div>
        )
        :
        <Payment />
      }
        <Row justify="center">
          <Link to="/faq" className="links">
            <Button size="large" type="primary">
              {t('ONBOARD.CONFIRMATION.FAQ_LINK')}
            </Button>
          </Link>
          <Link to="/" className="links">
            <Button size="large">
              {t('ONBOARD.CONFIRMATION.HOME_LINK')}
            </Button>
          </Link>
        </Row>
      </div>
  )
};

export default Confirmation;
