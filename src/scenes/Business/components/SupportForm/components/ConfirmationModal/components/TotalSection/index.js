import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Divider } from 'antd';
import './style.scss';


const TotalSection = (props) => {
  const { t } = useTranslation();
  return (
    <div
      className="confirm-total-section">
      <div>
        <span className="left-col">{t('CONFIRMATION_MODAL.SUBTOTAL')}:</span>
        <span className="right-col">${props.subtotal}</span>
      </div>
      <div>
        <span className="left-col">{t('CONFIRMATION_MODAL.PROCESSING_FEE')}:</span>
        <span className="right-col">${props.fee}</span>
      </div>
      <Divider className="confirm-total-divider"/>
      <div>
        <span className="left-bottom">{t('CONFIRMATION_MODAL.TOTAL')}:</span>
        <span className="right-bottom">${props.total}</span>
      </div>
    </div>
  );
};

TotalSection.propTypes = {
  total: PropTypes.string.isRequired,
  subtotal: PropTypes.string.isRequired,
  fee: PropTypes.string.isRequired
};

export default TotalSection;
