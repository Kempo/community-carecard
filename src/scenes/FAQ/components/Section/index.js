import React from 'react';
import { PropTypes } from 'prop-types';
import { useTranslation, Trans } from 'react-i18next';
import { Row, Collapse } from 'antd';
import './style.scss';

const Section = ({ type }) => {
  const { t } = useTranslation();
  const QuestionList = `FAQ.${type}`;

  return (
    <section className="faq-category">
      <Row justify="center">
        <div className="container">
          <h3>{type}</h3>
          <Collapse className="custom-collapse" bordered={false}>
            {t(QuestionList).map((_, index) => (
              <Collapse.Panel className="custom-panel" header={t(`${QuestionList}.${index}.Q`)}>
                <Trans i18nKey={`${QuestionList}.${index}.A`} />
              </Collapse.Panel>
            ))}
          </Collapse>
        </div>
      </Row>
    </section>
  );
};


Section.propTypes = {
  type: PropTypes.string.isRequired,
};
export default Section;
