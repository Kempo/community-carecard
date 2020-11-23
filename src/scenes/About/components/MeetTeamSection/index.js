import React from 'react';
import { useTranslation } from 'react-i18next';

import TeamMember from '../TeamMember';
import { teamMembers } from './teamMembers';
import './style.scss';

const MeetTeamSection = () => {
  const { t } = useTranslation();

  return (
    <div className="meet-team-section">
      <h2 className="section-title">{t('ABOUT.MEET_THE_TEAM')}</h2>
      <div className="team-members">
        {teamMembers(t).map(teamMember => (
          <TeamMember
            teamMember={teamMember}
            key={teamMember.name}
          />
        ))}
      </div>
    </div>
  );
};

export default MeetTeamSection;
