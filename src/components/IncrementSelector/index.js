import React from 'react';
import { InputNumber } from 'antd';
import PropTypes from 'prop-types';
import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import './style.scss';

const IncrementSelector = (props) => {
  const { value, onChange } = props;

  const decrement = () => value > 1 && onChange(value - 1);
  const increment = () => onChange(value + 1);

  const handleChange = v => v && v >= 1 && onChange(v);

  return (
    <div className="increment-selector">
      <MinusCircleOutlined
        className="decrement-button"
        onClick={decrement}
      />
      <InputNumber
        className="number-input"
        type="number"
        value={value}
        min={0}
        onChange={handleChange}
      />
      <PlusCircleOutlined
        className="increment-button"
        onClick={increment}
      />
    </div>
  );
};

IncrementSelector.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default IncrementSelector;
