import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Row, Col } from 'antd';
import './style.scss';

const Testimonial = (props) => {
  const {
    business, image, owner, quote,
  } = props;

  return (
    <div className="testimonial">
      <Row className="container" justify="center">
        <Col
          xs={20}
          md={16}
        >
          <div className="quote">
            “
            {quote}
            “
          </div>
          <div className="user-info">
            <Avatar size={80} src={image} />
            <div className="user-names">
              <div className="owner-name">{owner}</div>
              <div className="business-name">{business}</div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

Testimonial.propTypes = {
  business: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
};

export default Testimonial;
