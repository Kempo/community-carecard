import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import './style.scss';

const Section = ({ name, links }) => {
  return (
    <Row className="resource-section" justify="center">
      <Col span={18}>
        <h3>{name}</h3>
        {links.map(res => (
          <Row className="resource" key={res.link} justify="left">
            <Col>
              <a href={res.link} target="_blank" rel="noopener noreferrer">{res.name}</a>
              {
                res.desc && (
                  <p>{res.desc}</p>
                )
              }
            </Col>
          </Row>
        ))}
      </Col>
    </Row>
  );
};

Section.propTypes = {
  name: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired,
};

export default Section;
