import React from "react";
import { NavBar } from "../../../components";
import { TeamHeading, TeamMember, teamMemberData } from "../../../components/Team/Team";
import "./team.css";

const page = () => {
  return (
    <div className="team-page">
      <NavBar />
      <div className="team-container">
        <TeamHeading />
        <div className="team-container__content">
          <div className="team-container__content-tabs">
            <button className="primary-button">All</button>
            <button className="secondary-button">Core Team</button>
            <button className="secondary-button">Pairing Team</button>
            <button className="secondary-button">Tech and Platform</button>
            <button className="secondary-button">Talent Acquisition</button>
            <button className="secondary-button">Admin & Coordinators</button>
          </div>
          <div className="team-container__content-team">
            {teamMemberData.map((member, index) => (
              <TeamMember
                key={index}
                image={member.image}
                role={member.role}
                name={member.name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
