import React from 'react';
import { PropTypes } from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Trans } from 'react-i18next';
import { EnvironmentOutlined } from '@ant-design/icons';

import { businessPagePath } from 'services/urlHelper';
import './style.scss';

const FeaturedBusiness = ({ business, icon }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(businessPagePath(business.googlePlaceId));
  };

  return (
    <div className="featured-business" onClick={handleClick}>
      <div
        className="image"
        style={{ backgroundImage: `url(${business.image})` }}
      />
      <div className="business-info">
        <div className="business-text">
          <h5>{business.title}</h5>
          <div className="location">
            <EnvironmentOutlined />
            <p>{business.loc}</p>
          </div>
          <p>{business.subText}</p>
        </div>
        <div className="business-link">
          <div className="business-link-text">
            <Trans i18nKey={business.linkID} />
          </div>
          <div className="icon">
            {icon}
          </div>
        </div>
      </div>
    </div>
  );
};

FeaturedBusiness.propTypes = {
  business: PropTypes.shape().isRequired,
  icon: PropTypes.element.isRequired,
};

export default FeaturedBusiness;
