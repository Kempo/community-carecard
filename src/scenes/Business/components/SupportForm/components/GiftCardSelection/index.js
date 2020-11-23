import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Radio } from 'antd';
import IncrementSelector from 'components/IncrementSelector';
import './style.scss';

const GiftCardSelection = (props) => {
  const { t } = useTranslation();
  const { onSelect } = props;

  const [amount, setAmount] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (onSelect) onSelect(amount, quantity);
  }, [onSelect, amount, quantity]);

  const handleChangeAmount = e => setAmount(Math.trunc(e.target.value));
  const handleChangeQuantity = q => setQuantity(q);

  return (
    <div className="gift-card-selection">
      <div className="amount-description">
        {t('PAYMENT.GIFT_CARD_AMOUNT_DESCRIPTION')}
      </div>
      <Radio.Group className="amount-selection" onChange={handleChangeAmount}>
        <Radio.Button value={5}>$5</Radio.Button>
        <Radio.Button value={10}>$10</Radio.Button>
        <Radio.Button value={25}>$25</Radio.Button>
        <Radio.Button value={50}>$50</Radio.Button>
      </Radio.Group>
      <div className="quantity-selection">
        <IncrementSelector
          value={quantity}
          onChange={handleChangeQuantity}
        />
      </div>
    </div>
  );
};

GiftCardSelection.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default GiftCardSelection;
