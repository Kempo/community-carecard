import React from 'react';
import PropTypes from 'prop-types';
import { Popover } from 'antd';
import SocialShareButtons from '../SocialShareButtons';
import './style.scss';

const ShareButton = (props) => {
  const { children, message, url } = props;

  return (
    <Popover
      className="share-button"
      content={(
        <div className="social-buttons-popover">
          <SocialShareButtons message={message} url={url} />
        </div>
      )}
      placement="topRight"
    >
      {children}
    </Popover>
  );
};

ShareButton.propTypes = {
  children: PropTypes.node.isRequired,
  message: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default ShareButton;
