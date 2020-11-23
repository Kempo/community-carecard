import React from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Col, Button } from 'antd';

import { useHistory } from 'react-router-dom';
import { emitClickEvent } from 'services/Analytics';

import './style.scss';

const MainSection = () => {
  const { t } = useTranslation();
  const history = useHistory();

  const handleOnboard = () => {
    emitClickEvent('Button', 'I have a business');
    history.push('/onboard');
  };

  const handleBuyButton = () => {
    document.getElementById("search-area").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    document.getElementById("place-search").focus({preventScroll: true});
  };

  return (
    <div className="main-section overlay">
      <Row>
        <Col
          offset={2}
          xs={21}
          sm={18}
          lg={15}
          xl={12}
          xxl={10}
        >
          <h1 className="main-header white">{t('HOME.HEADER')}</h1>
          <div className="main-center-nav-area">
            <Button
              className="buy-button"
              size="large"
              onClick={handleBuyButton}
            >
              {t('HOME.BUY_CARD')}
            </Button>
            <Button
              className="reg-button"
              size="large"
              onClick={handleOnboard}
            >
              {t('HOME.I_HAVE_BUSINESS')}
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default MainSection;
