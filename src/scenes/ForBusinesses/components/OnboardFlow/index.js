import React from 'react';
import { Row, Col } from 'antd';
import { useTranslation } from 'react-i18next';
import './style.scss';
import step1 from '../../../../images/forBiz/b-step1.png';
import step2 from '../../../../images/forBiz/b-step2.png';
import step3 from '../../../../images/forBiz/b-step3.png';
import step4 from '../../../../images/forBiz/b-step4.png';

const OnboardFlow = () => {

  const { t } = useTranslation();

  return (
    <Row justify="center" className="onboard-flow">
      <Col span={20}>
        <div className="steps">
          {[step1, step2, step3, step4].map((step, index) => (
            <div className="step">
              <img src={step} alt={`Step ${index}`} />
              <p>
                {t(`FOR_BIZ.ONBOARD_FLOW.STEP_${index}`)}
              </p>
            </div>
          ))}
        </div>
      </Col>
    </Row>
  )
}

export default OnboardFlow;