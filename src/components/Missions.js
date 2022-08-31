import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <>
        <Title headline="Missões" />
        <div data-testid="missions" className="missions-container">
          {missions.map((mission) => (<MissionCard
            name={ mission.name }
            year={ mission.year }
            country={ mission.country }
            destination={ mission.destination }
            key={ mission.name }
          />))}
        </div>
      </>
    );
  }
}

export default Missions;
