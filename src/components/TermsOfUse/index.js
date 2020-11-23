import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Modal } from 'antd';
import Terms from './components/Terms';
import './style.scss';

const TermsOfUseModal = (props) => {
  const { visible, onCancel } = props;
  const { t } = useTranslation();

  return (
    <Modal
      className="terms-of-use-modal"
      visible={visible}
      onCancel={onCancel}
      footer={null}
      title={t('SHARED.TOS')}
      width="95%"
    >
      <Terms />
    </Modal>
  );
};

TermsOfUseModal.propTypes = {
  onCancel: PropTypes.func,
  visible: PropTypes.bool,
};

TermsOfUseModal.defaultProps = {
  onCancel: () => {},
  visible: true,
};

export default TermsOfUseModal;
