import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import {
  Modal, Button, Row, Col, Checkbox, Input, Form,
} from 'antd';
import './style.scss';

import ItemizedSection from './components/ItemizedSection';
import TotalSection from './components/TotalSection';
import { dollarFormat, fees } from '../../../../../../services/Numbers';

const ConfirmationModal = (props) => {
  const {
    businessName,
    giftCardAmount,
    giftCardQuantity,
    donationAmount,
    total,
    onOk,
    onCancel,
    onClickTerms,
    visible,
    submitting
  } = props;

  const { t } = useTranslation();
  const [hasTeamTip, setHasTeamTip] = useState(false);

  const totalBeforeFee = (total + (hasTeamTip ? 1 : 0));
  const totalAfterFee = dollarFormat((totalBeforeFee + fees.USD.fixed) / (1 - fees.USD.percent));
  const processingFee = dollarFormat(totalAfterFee - totalBeforeFee);

  const handleChangeCheckbox = e => setHasTeamTip(e.target.checked);
  const handleCancel = () => onCancel();

  const handleOk = (event) => {
    onOk({
      businessName,
      giftCardAmount,
      giftCardQuantity,
      hasTeamTip,
      donationAmount,
      totalBeforeFee,
      processingFee,
      customerEmail: event.email,
    });
  };

  return (
    <React.Fragment>
      <Modal
        className="confirmation-modal"
        closable={false}
        visible={visible}
        title={null}
        bodyStyle={{
          paddingTop: 40, paddingBottom: 40, paddingLeft: 45, paddingRight: 45,
        }}
        footer={null}
      >
        <Form
          onFinish={handleOk}
          layout="vertical"
          size="large"
        >
          <h2 className="title">{t('CONFIRMATION_MODAL.HEADER')}</h2>
          <p className="please-check">{t('CONFIRMATION_MODAL.PLEASE_CHECK')}</p>
          <h6 className="confirmation-modal-business">
            {businessName}
          </h6>
          <ItemizedSection
            giftCardAmount={dollarFormat(giftCardAmount)}
            giftCardQuantity={giftCardQuantity}
            donationAmount={dollarFormat(donationAmount)}
            teamTip={hasTeamTip}
          />
          <Row justify="end">
            <Col xs={20} sm={14} md={10}>
              <TotalSection
                total={totalAfterFee}
                subtotal={dollarFormat(totalBeforeFee)}
                fee={processingFee}
              />
            </Col>
          </Row>
          <Row className="email-row">
            <Col xs={24}>
              <Form.Item
                name="email"
                label={`${t('CONFIRMATION_MODAL.EMAIL')}:`}
                rules={[{ required: true, type: 'email', message: t('CONFIRMATION_MODAL.EMAIL_ERROR') }]}
                validateTrigger={['onBlur']}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col xs={24}>
              <Checkbox onChange={handleChangeCheckbox} />
              <span className="coffee-on-me">
                {t('CONFIRMATION_MODAL.CCC_TIP_DESC')}
              </span>
            </Col>

            <Col xs={24}>
              <div className="support-care-team">{t('CONFIRMATION_MODAL.CCC_TIP_SUB_DESC')}</div>
            </Col>

            <Col xs={24}>
              <div className="terms-of-service">
                <span>{t('SHARED.ACCEPT_TOS')}</span>
                <span className="tos-link" onClick={onClickTerms}>
                  {t('SHARED.TOS')}
                </span>
              </div>
            </Col>
          </Row>

          <Row>
            <Col xs={10} md={8}>
              <Button
                type="default"
                onClick={handleCancel}
                className="cancel-button"
              >
                {t('CONFIRMATION_MODAL.GO_BACK_CAPS')}
              </Button>
            </Col>
            <Col md={{ offset: 8, span: 8 }} xs={{ offset: 4, span: 10 }}>
              <Button
                type="primary"
                htmlType="submit"
                className="continue-button"
                loading={submitting}
              >
                {t('CONFIRMATION_MODAL.CONTINUE_CAPS')}
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal>
    </React.Fragment>
  );
};

ConfirmationModal.propTypes = {
  businessName: PropTypes.string.isRequired,
  donationAmount: PropTypes.number,
  giftCardAmount: PropTypes.number,
  giftCardQuantity: PropTypes.number,
  onOk: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onClickTerms: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  visible: PropTypes.bool,
  submitting: PropTypes.bool.isRequired,
};

ConfirmationModal.defaultProps = {
  donationAmount: 0,
  giftCardAmount: 0,
  giftCardQuantity: 0,
  visible: true,
};

export default ConfirmationModal;
