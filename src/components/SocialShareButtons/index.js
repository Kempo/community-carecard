import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { notification } from 'antd';
import {
  EmailIcon,
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import {
  FACEBOOK, TWITTER, WHATS_APP, EMAIL, COPY_LINK,
} from 'constants.js';
import { CopyLinkIcon } from 'components/customIcons';
import './style.scss';

const hashTag = 'ccarecard';
const atTag = 'cmtycarecard';

const SocialShareButtons = ({ message, platforms, url }) => {
  const buttonProps = {
    className: 'social-share-button',
    url,
  };

  const iconProps = {
    round: true,
    size: 30,
  };

  const {
    showFacebook, showTwitter, showWhatsApp, showEmail, showCopyLink,
  } = useMemo(() => ({
    showFacebook: platforms.includes(FACEBOOK),
    showTwitter: platforms.includes(TWITTER),
    showWhatsApp: platforms.includes(WHATS_APP),
    showEmail: platforms.includes(EMAIL),
    showCopyLink: platforms.includes(COPY_LINK),
  }), [platforms]);

  const handleCopy = () => {
    notification.open({
      description: 'Link copied to clipboard',
      placement: 'bottomRight',
    });
  };

  return (
    <div className="social-share-buttons">
      {showFacebook && (
        <div title={FACEBOOK}>
          <FacebookShareButton
            {...buttonProps}
            quote={`${message} - ${url}`}
            hashtag={`#${hashTag}`}
          >
            <FacebookIcon {...iconProps} />
          </FacebookShareButton>
        </div>
      )}
      {showTwitter && (
        <div title={TWITTER}>
          <TwitterShareButton
            {...buttonProps}
            title={`${message} @${atTag}`}
            hashtags={[hashTag]}
          >
            <TwitterIcon {...iconProps} />
          </TwitterShareButton>
        </div>
      )}
      {showWhatsApp && (
        <div title={WHATS_APP}>
          <WhatsappShareButton
            {...buttonProps}
            title={`${message}`}
            separator=" - "
          >
            <WhatsappIcon {...iconProps} />
          </WhatsappShareButton>
        </div>
      )}
      {showEmail && (
        <div title={EMAIL} className="social-share-button">
          <a
            href={`mailto:?body=${message}%0A${url}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <EmailIcon {...iconProps} />
          </a>
        </div>
      )}
      {showCopyLink && (
        <div title={COPY_LINK} className="social-share-button">
          <CopyToClipboard
            text={url}
            onCopy={handleCopy}
          >
            <CopyLinkIcon className="custom-icon" />
          </CopyToClipboard>
        </div>
      )}
    </div>
  );
};

SocialShareButtons.propTypes = {
  message: PropTypes.string.isRequired,
  platforms: PropTypes.arrayOf(PropTypes.string),
  url: PropTypes.string.isRequired,
};

SocialShareButtons.defaultProps = {
  platforms: [FACEBOOK, TWITTER, WHATS_APP, EMAIL, COPY_LINK],
};

export default SocialShareButtons;
