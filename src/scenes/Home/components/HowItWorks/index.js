import React from 'react';
import { Row, Col } from 'antd';
import { useTranslation, Trans } from 'react-i18next';
import CImg from '../../../../images/c-icon-small.png';
import step1 from '../../../../images/howItWorks/c-step1.png';
import step2 from '../../../../images/howItWorks/c-step2.png';
import step3 from '../../../../images/howItWorks/c-step3.png';
import step4 from '../../../../images/howItWorks/c-step4.png';
import step5 from '../../../../images/howItWorks/c-step5.png';
import './style.scss';

const HowItWorks = () => {
  const { t } = useTranslation();

  return (
    <div className="how-it-works" id="howitworks">
      <Row className="container" justify="center" align="top">
        <Col xs={22} lg={24}>
          <img className="c-logo" src={CImg} alt="" />
          <h2 className="title">{t('HOW_IT_WORKS.MAIN')}</h2>
          <div className="body-text">
            <p className="bdy"><Trans i18nKey="HOW_IT_WORKS.WHAT" /></p>
            <p className="bdy"><Trans i18nKey="HOW_IT_WORKS.STATS" /></p>
            <p className="bdy"><Trans i18nKey="HOW_IT_WORKS.SELL" /></p>
            <h5 className="bdy"><Trans i18nKey="HOW_IT_WORKS.HERE" /></h5>
          </div>
          <div className="steps">
            {[step1, step2, step3, step4, step5].map((step, index) => (
              <div className="step">
                <img src={step} alt={`Step ${index}`} />
                <p>
                  {t(`HOW_IT_WORKS.STEP_${index}`)}
                </p>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HowItWorks;
