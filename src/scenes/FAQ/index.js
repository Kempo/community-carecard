import React from 'react';
import { Link } from 'react-router-dom';
import { Row } from 'antd';
import Section from './components/Section';
import './style.scss';

const TYPES = ["General", "Businesses", "Supporters"];

const Faq = () => {

  return (
    <div className="faq container">
      <h2>Frequently Asked Questions</h2>
      <div className="nav">
        {TYPES.map(t => <p className="links"><a href={`#${t}`}>{t}</a></p>)}
      </div>
      {TYPES.map(t =>
        <div id={t}> <Section type={t.toUpperCase()} /> </div>
      )}
      <Row className="bottom" justify="center">
        <h6> Still have a question? <Link to="/contact">Contact us!</Link> </h6>
      </Row>
    </div>
  )
};

export default Faq;
