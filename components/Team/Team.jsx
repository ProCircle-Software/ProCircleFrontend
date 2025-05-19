/* eslint-disable @next/next/no-img-element */
import React from "react";
import "./team.css";
import Link from "next/link";

const TeamMember = ({ image, name, role }) => {
  return (
    <div className="team-member">
      <div
        className="team-member-image"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="social-icons">
          <Link href="#" className="icon">
            <img
              src="https://res.cloudinary.com/dzohnw8e5/image/upload/v1745924584/x-twitter_fpqyrx.svg"
              alt="icon"
            />
          </Link>
          <Link href="#" className="icon">
            <img
              src="https://res.cloudinary.com/dzohnw8e5/image/upload/v1745924586/linkedin-in_kfbhgp.svg"
              alt="icon"
            />
          </Link>
          <Link href="#" className="icon">
            <img
              src="https://res.cloudinary.com/dzohnw8e5/image/upload/v1745924586/instagram_rmcqfu.svg"
              alt="icon"
            />
          </Link>
          <Link href="#" className="icon">
            <img
              src="https://res.cloudinary.com/dzohnw8e5/image/upload/v1745924583/facebook-f_t3hduo.svg"
              alt="icon"
            />
          </Link>
        </div>
      </div>
      <div className="team-member-details">
        <p>{name}</p>
        <span>{role}</span>
      </div>
    </div>
  );
};

const teamMemberData = [
  {
    image:
      "https://res.cloudinary.com/dzohnw8e5/image/upload/v1745921979/Xrole_km1erp.png",
    name: "Xrole Diamond",
    role: "Core Team Lead",
  },
  {
    image:
      "https://res.cloudinary.com/dzohnw8e5/image/upload/v1745921980/Wani_c3ryd2.png",
    name: "Wani Dara",
    role: "Admin / Coordinators",
  },
  {
    image:
      "https://res.cloudinary.com/dzohnw8e5/image/upload/v1745921984/Fortune_jhwygm.png",
    name: "Theo Fortune",
    role: "Tech and Platform",
  },
];

const Team = () => {
  return (
    <section className="team" id="team">
      <img
        src="https://res.cloudinary.com/dzohnw8e5/image/upload/v1745915288/circles_swhnqf.svg"
        alt="circular"
        className="circular"
      />
      <div className="team-header">
        <div className="team-heading global-heading">
          <span>Meet the Team Behind ProCircle</span>
          <h1>Leadership with Purpose</h1>
        </div>
        <button className="primary-button">See All</button>
      </div>
      <div className="team-flex">
        {teamMemberData.map((member, index) => (
          <TeamMember
            key={index}
            image={member.image}
            role={member.role}
            name={member.name}
          />
        ))}
      </div>
    </section>
  );
};

export default Team;
