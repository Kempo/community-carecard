import React from 'react';
import AboutSection from './components/AboutSection';
import MeetTeamSection from './components/MeetTeamSection';
import OurValuesSection from './components/OurValuesSection';

import './style.scss';

const About = () => (
  <div className="about container">
    <AboutSection />
    <MeetTeamSection />
    <OurValuesSection />
  </div>
);

export default About;
