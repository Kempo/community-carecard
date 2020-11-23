import React from 'react';
import { Avatar, Row, Col } from 'antd';
import { PropTypes } from 'prop-types';

import './style.scss';

const TeamMember = ({ teamMember }) => {
  return (
    <Row className="team-member" justify="center">
      <Avatar className="member-image" src={teamMember.image} size={250} />
      <Col className="member-info" xs={16} md={12}>
        <h5 className="member-name">{teamMember.name}</h5>
        <p className="location">{teamMember.location}</p>
        <p className="role">{teamMember.role}</p>
        <p className="blurb">{teamMember.blurb}</p>
      </Col>
    </Row>
  );
};

TeamMember.propTypes = {
  teamMember: PropTypes.shape().isRequired,
};

export default TeamMember;
