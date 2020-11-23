import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { InputNumber } from 'antd';
import './style.scss';

const DonationSelection = (props) => {
  const { onChange, amount: amountProp } = props;

  const { t } = useTranslation();
  const [amount, setAmount] = useState(amountProp);
  useEffect(() => setAmount(amountProp), [amountProp]);
  console.log('amount', amount);

  const handleChange = (amt) => {
    if (amt >= 0) {
      setAmount(amt);
      onChange(amt);
    }
  };

  return (
    <div className="donation-selection">
      <div className="donation-description">
        {t('PAYMENT.DONATION_AMOUNT_DESCRIPTION')}
      </div>
      <div className="currency-sign">$</div>
      <InputNumber
        className="donation-input"
        type="number"
        value={amount}
        onChange={handleChange}
        placeholder="0.00"
        precision={2}
        step="any"
        parser={value => value.replace(/\$\s?|(,*)/g, '')}
        min={0}
      />
    </div>
  );
};

DonationSelection.propTypes = {
  amount: PropTypes.number,
  onChange: PropTypes.func,
};

DonationSelection.defaultProps = {
  amount: null,
  onChange: () => {},
};

export default DonationSelection;
