import React from 'react';
import { useTranslation } from 'react-i18next';
import Section from './components/Section';
import { General, CaresAct, Federal, Commercial, FinancialAid, Health } from './Links';
import { Row, Col } from 'antd';
import './style.scss';

const Resources = () => {

  const { t } = useTranslation();


  const sections = [
    { header: 'General', links: General(t) },
    { header: 'CARES Act Loans', links: CaresAct(t) },
    { header: 'Federal Government', links: Federal(t) },
    { header: 'Commercial Programs', links: Commercial(t) },
    { header: 'Financial Aid', links: FinancialAid(t) },
    { header: 'Mental Health & Wellness', links: Health(t) }]

  return (
    <div className="resources container">
      <Row className="top" justify="center">
        <Col span={16}>
          <h2 className="title">{t("BIZ_RESOURCE.HEADER")}</h2>
          <h6>
            {t("BIZ_RESOURCE.DESC")}
          </h6>
        </Col>
      </Row>
      {
        sections.map((section) => (
          <Section
            key={section.header}
            name={section.header}
            links={section.links}
          />
        ))
      }
      <Row className="bottom" justify="center">
        <Col span={16}>
          <footer>
          {t("BIZ_RESOURCE.FOOTER")}
          </footer>
        </Col>
      </Row>
    </div>
  )
}

export default Resources;
