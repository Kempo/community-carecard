import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Row } from 'antd';

import FeaturedBusiness from '../FeaturedBusiness';
import { mockBusinesses } from './mockBusinesses';
import { NUM_BUSINESSES_SHOWN } from './constants';
import featuredIconOrange from '../../../../images/home/featured-biz-arrow-orange.png';
import featuredIconPink from '../../../../images/home/featured-biz-arrow-pink.png';
import featuredIconYellow from '../../../../images/home/featured-biz-arrow-yellow.png';
import './style.scss';

const icons = [
  featuredIconYellow,
  featuredIconPink,
  featuredIconOrange,
];

const FeaturedSection = () => {
  const { t } = useTranslation();

  const businesses = useMemo(() => (
    mockBusinesses(t)
      .sort(() => Math.random() - Math.random())
      .slice(0, NUM_BUSINESSES_SHOWN)
  ), [t]);

  return (
    <div className="featured-section container">
      <h2 className="section-title">{t('HOME.FEATURED_BUSINESSES')}</h2>
      <Row
        className="business-list"
        justify="center"
      >
        {businesses.map((business, index) => (
          <Col
            className="business"
            xs={20}
            md={8}
            lg={7}
            key={business.title}
          >
            <FeaturedBusiness
              business={business}
              icon={<img src={icons[index]} alt="" />}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FeaturedSection;
