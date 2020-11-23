import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Form, Collapse, Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { HeartFilled, CreditCardFilled } from '@ant-design/icons';
import { useScript } from 'hooks/useScript';
import TermsOfUseModal from 'components/TermsOfUse'
import GiftCardSelection from './components/GiftCardSelection';
import DonationSelection from './components/DonationSelection';
import ConfirmationModal from './components/ConfirmationModal';
import { createCheckoutUrl, stripeApiUrl } from '../../../../services/urlHelper';
import { dollarFormat } from '../../../../services/Numbers';
import { STRIPE_KEY } from '../../../../constants';
import './style.scss';

const SupportForm = (props) => {
  const { businessName, businessId, onError } = props;

  useScript(stripeApiUrl());

  const { t } = useTranslation();
  const [submitting, setSubmitting] = useState(false);
  const [giftCardAmount, setGiftCardAmount] = useState(null);
  const [giftCardQuantity, setGiftCardQuantity] = useState(1);
  const [donationAmount, setDonationAmount] = useState(null);
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const [termsModalOpen, setTermsModalOpen] = useState(false);

  const handleDonationSelect = amount => setDonationAmount(amount);
  const handleGiftCardSelect = (amount, quantity) => {
    setGiftCardAmount(amount);
    setGiftCardQuantity(quantity);
  };

  const giftCardTotal = useMemo(() => (
    giftCardAmount * giftCardQuantity
  ), [giftCardAmount, giftCardQuantity]);

  const total = useMemo(() => (
    giftCardTotal + donationAmount
  ), [giftCardTotal, donationAmount]);

  const submitDisabled = () => giftCardTotal === 0;
  const handleForm = () => setConfirmationModalOpen(true);

  const handleClickTerms = () => {
    setConfirmationModalOpen(false);
    setTermsModalOpen(true);
  };

  const handleCloseTermsModal = () => {
    setTermsModalOpen(false);
    setConfirmationModalOpen(true);
  };

  const handleModalOk = (result) => {
    setSubmitting(true);
    const {
      hasTeamTip,
      totalBeforeFee,
      processingFee,
      customerEmail,
    } = result;

    const order = {
      contribution: (hasTeamTip ? 1 : 0),
      currency: 'USD',
      customerEmail,
      orderLine: [
        {
          businessId,
          businessName,
          items: [
            {
              quantity: giftCardQuantity,
              unitPrice: giftCardAmount,
            },
          ],
          tip: donationAmount || 0,
        },
      ],
      processingFee: parseFloat(processingFee),
      total: parseFloat(dollarFormat(totalBeforeFee)),
    };

    const stripe = window.Stripe(STRIPE_KEY);
    axios.post(createCheckoutUrl, order)
      .then(res => res.data)
      .then(res => stripe.redirectToCheckout({
        sessionId: res.sessionId,
      }))
      .then((res) => {
        setConfirmationModalOpen(false);
        setSubmitting(false);
        onError(res.error); 
      })
      .catch((err) => {
        setConfirmationModalOpen(false);
        setSubmitting(false);
        onError(err);
      });
  };

  return (
    <div className="support-form">
      <Form
        name="support"
        onFinish={handleForm}
      >
        <Collapse bordered={false} defaultActiveKey={['gift-card']}>
          <Collapse.Panel header={t('PAYMENT.ADD_GIFT_CARD')} key="gift-card" extra={<CreditCardFilled />}>
            <div className="selection-panel" key="gift-card">
              <GiftCardSelection
                onSelect={handleGiftCardSelect}
                amount={giftCardAmount}
                quantity={giftCardQuantity}
              />
            </div>
          </Collapse.Panel>
          <Collapse.Panel header={t('PAYMENT.ADD_DONATION')} extra={<HeartFilled />}>
            <div className="selection-panel">
              <DonationSelection
                onChange={handleDonationSelect}
                amount={donationAmount}
              />
            </div>
          </Collapse.Panel>
        </Collapse>
        <div className="total-section">
          <div>
            <div className="total-description">
              {t('PAYMENT.CONTRIBUTION_AMOUNT')}
            </div>
            <div className="total">
              ${dollarFormat(total)} USD
            </div>
          </div>
          <div>
            {submitDisabled() && (
              <div className="disabled-text">
                {t('BUSINESS.DISABLED_TEXT')}
              </div>
            )}
            <Button htmlType="submit" disabled={submitDisabled()}>
              {t('PAYMENT.CONTINUE')}
            </Button>
          </div>
        </div>
      </Form>

      <ConfirmationModal
        visible={confirmationModalOpen}
        submitting={submitting}
        giftCardAmount={giftCardAmount}
        giftCardQuantity={giftCardQuantity}
        donationAmount={donationAmount}
        businessName={businessName}
        total={total}
        onOk={handleModalOk}
        onCancel={() => setConfirmationModalOpen(false)}
        onClickTerms={handleClickTerms}
      />
      <TermsOfUseModal
        visible={termsModalOpen}
        onCancel={handleCloseTermsModal}
      />
    </div>
  );
};

SupportForm.propTypes = {
  businessName: PropTypes.string.isRequired,
  businessId: PropTypes.string.isRequired,
  onError: PropTypes.func,
};

SupportForm.defaultProps = {
  onError: () => {},
};

export default SupportForm;
