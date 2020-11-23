import React from 'react';
import PropTypes from 'prop-types';
import { Affix, Alert as AntdAlert } from 'antd';

const Alert = props => (
  <Affix offsetTop={64}>
    <AntdAlert
      {...props}
      closable
      showIcon
    />
  </Affix>
);

Alert.propTypes = {
  description: PropTypes.string,
  message: PropTypes.string,
  type: PropTypes.string,
};

Alert.defaultProps = {
  description: '',
  message: '',
  type: 'success',
};

export default Alert;
