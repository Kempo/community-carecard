import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Row, Col, Divider } from 'antd';

import './style.scss';

const ItemizedSection = (props) => {
  const { t } = useTranslation();

  const displayGiftCardRow = props.giftCardAmount && props.giftCardQuantity > 0;
  const displayDonationRow = props.donationAmount > 0;

  return (
    <div className="itemized-section-container">
      <Row className="itemized-section-header">
        <Col span={8}>
          <span>{t('CONFIRMATION_MODAL.ITEMIZED.ITEM')}</span>
        </Col>
        <Col span={8}>
          <span>{t('CONFIRMATION_MODAL.ITEMIZED.VALUE')}</span>
        </Col>
        <Col span={8}>
          <span>{t('CONFIRMATION_MODAL.ITEMIZED.QUANTITY')}</span>
        </Col>
      </Row>
      {displayGiftCardRow && (
        <React.Fragment>
          <Divider className="itemized-section-divider"/>
          <Row className="itemized-section-row">
            <Col span={8}>
              <span>{t('CONFIRMATION_MODAL.ITEMIZED.GIFT_CARD')}</span>
            </Col>
            <Col span={8}>
              <span>${props.giftCardAmount}</span>
            </Col>
            <Col span={8}>
              <span>{props.giftCardQuantity}</span>
            </Col>
          </Row>
        </React.Fragment>
      )}
      {displayDonationRow && (
        <React.Fragment>
          <Divider className="itemized-section-divider"/>
          <Row className="itemized-section-row">
            <Col span={8}>
              <span>{t('CONFIRMATION_MODAL.ITEMIZED.DONATION')}</span>
            </Col>
            <Col span={8}>
              <span>${props.donationAmount}</span>
            </Col>
            <Col span={8}>
              <span>1</span>
            </Col>
          </Row>
        </React.Fragment>
      )}
      {props.teamTip && (
        <React.Fragment>
          <Divider className="itemized-section-divider"/>
          <Row className="itemized-section-row">
            <Col span={8}>
              <span>{t('CONFIRMATION_MODAL.ITEMIZED.COFFEE')}</span>
            </Col>
            <Col span={8}>
              <span>$1.00</span>
            </Col>
            <Col span={8}>
              <span>1</span>
            </Col>
          </Row>
        </React.Fragment>
      )}
      <Divider className="itemized-section-divider"/>
    </div>
  );
};

ItemizedSection.propTypes = {
  giftCardAmount: PropTypes.string,
  giftCardQuantity: PropTypes.number,
  donationAmount: PropTypes.string,
  teamTip: PropTypes.bool
}

export default ItemizedSection;
