"use client"
import React, { useState } from "react";
import { NavBar } from "../../../components";
import {
  TeamHeading,
  TeamMember,
  teamMemberData,
  TEAM_ROLES,
} from "../../../components/Team/Team";
import "./team.css";

const Page = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredMembers =
    activeTab === "All"
      ? teamMemberData
      : teamMemberData.filter((member) => member.role === activeTab);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="team-page">
      <NavBar />
      <div className="team-container">
        <TeamHeading />
        <div className="team-container__content">
          <div className="team-container__content-tabs">
            <button
              className={
                activeTab === "All" ? "primary-button" : "secondary-button"
              }
              onClick={() => handleTabClick("All")}
            >
              All
            </button>
            <button
              className={
                activeTab === TEAM_ROLES.CORE_TEAM
                  ? "primary-button"
                  : "secondary-button"
              }
              onClick={() => handleTabClick(TEAM_ROLES.CORE_TEAM)}
            >
              Core Team
            </button>
            <button
              className={
                activeTab === TEAM_ROLES.PAIRING_TEAM
                  ? "primary-button"
                  : "secondary-button"
              }
              onClick={() => handleTabClick(TEAM_ROLES.PAIRING_TEAM)}
            >
              Pairing Team
            </button>
            <button
              className={
                activeTab === TEAM_ROLES.TECH_PLATFORM
                  ? "primary-button"
                  : "secondary-button"
              }
              onClick={() => handleTabClick(TEAM_ROLES.TECH_PLATFORM)}
            >
              Tech and Platform
            </button>
            <button
              className={
                activeTab === TEAM_ROLES.TALENT_ACQUISITION
                  ? "primary-button"
                  : "secondary-button"
              }
              onClick={() => handleTabClick(TEAM_ROLES.TALENT_ACQUISITION)}
            >
              Talent Acquisition
            </button>
            <button
              className={
                activeTab === TEAM_ROLES.ADMIN_COORDINATORS
                  ? "primary-button"
                  : "secondary-button"
              }
              onClick={() => handleTabClick(TEAM_ROLES.ADMIN_COORDINATORS)}
            >
              Admin & Coordinators
            </button>
          </div>
          <div className="team-container__content-team">
            {filteredMembers.map((member, index) => (
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

export default Page;
