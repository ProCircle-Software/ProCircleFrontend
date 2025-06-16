/* eslint-disable @next/next/no-img-element */
import React from "react";
import "./team.css";
import Link from "next/link";

export const TEAM_ROLES = {
  CORE_TEAM: "Core Team",
  PAIRING_TEAM: "Accountability & Pairing Team",
  TECH_PLATFORM: "Tech and Platform",
  TALENT_ACQUISITION: "Talent Acquisition",
  ADMIN_COORDINATORS: "Admin & Coordinators",
};

export const TeamMember = ({ image, name, role }) => {
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

export const teamMemberData = [
  {
    image:
      "https://res.cloudinary.com/dzohnw8e5/image/upload/v1745921979/Xrole_km1erp.png",
    name: "Xrole Diamond",
    role: TEAM_ROLES.CORE_TEAM,
  },
  {
    image:
      "https://res.cloudinary.com/dzohnw8e5/image/upload/v1748193263/ChatGPT_Image_May_25_2025_06_05_04_PM_ek9evq.png",
    name: "Gift Okoro",
    role: TEAM_ROLES.ADMIN_COORDINATORS,
  },
  {
    image:
      "https://res.cloudinary.com/dzohnw8e5/image/upload/v1745921984/Fortune_jhwygm.png",
    name: "Theo Fortune",
    role: TEAM_ROLES.TECH_PLATFORM,
  },
  {
    image:
      "https://res.cloudinary.com/dzohnw8e5/image/upload/v1745921980/Wani_c3ryd2.png",
    name: "Wani Dara",
    role: TEAM_ROLES.ADMIN_COORDINATORS,
  },
  {
    image:
      "https://res.cloudinary.com/dzohnw8e5/image/upload/v1750082514/ChatGPT_Image_May_26_2025_12_48_44_PM_ntwoo6.png",
    name: "Samson Akande",
    role: TEAM_ROLES.PAIRING_TEAM,
  },
  {
    image:
      "https://res.cloudinary.com/dzohnw8e5/image/upload/v1750082556/ChatGPT_Image_May_26_2025_01_07_56_PM_ibkhdt.png",
    name: "Ibe, Ebere kelechi",
    role: TEAM_ROLES.PAIRING_TEAM,
  },
  {
    image:
      "https://res.cloudinary.com/dzohnw8e5/image/upload/v1750109760/ChatGPT_Image_Jun_3_2025_11_40_41_PM_gveeu8.png",
    name: "Kabirat",
    role: TEAM_ROLES.TALENT_ACQUISITION,
  },
  {
    image:
      "https://res.cloudinary.com/dzohnw8e5/image/upload/v1750082569/ChatGPT_Image_May_26_2025_07_38_26_PM_lsw0po.png",
    name: "Michael Alo",
    role: TEAM_ROLES.CORE_TEAM,
  },
  {
    image:
      "https://res.cloudinary.com/dzohnw8e5/image/upload/v1750082559/ChatGPT_Image_May_28_2025_05_54_40_PM_h9ym9o.png",
    name: "Chiamaka Rita",
    role: TEAM_ROLES.TECH_PLATFORM,
  },
  {
    image:
      "https://res.cloudinary.com/dzohnw8e5/image/upload/v1750082513/Confident_Man_in_Modern_Hallway_ghmftn.png",
    name: "Alowooja Femi ",
    role: TEAM_ROLES.TALENT_ACQUISITION,
  },
  {
    image:
      "https://res.cloudinary.com/dzohnw8e5/image/upload/v1750082581/Warm_Portrait_of_a_Young_Man_fomgko.png",
    name: "Hezron Ojeka",
    role: TEAM_ROLES.TECH_PLATFORM,
  },
  {
    image:
      "https://res.cloudinary.com/dzohnw8e5/image/upload/v1750103023/ChatGPT_Image_Jun_16_2025_08_42_53_PM_d0thbw.png",
    name: "Ifeoluwa Koleoso",
    role: TEAM_ROLES.TECH_PLATFORM,
  },
  {
    image:
      "https://res.cloudinary.com/dzohnw8e5/image/upload/v1750082521/Confident_Smile_and_Stylish_Vibes_k1j8fm.png",
    name: "Chiamaka Blessing",
    role: TEAM_ROLES.CORE_TEAM,
  },
  {
    image:
      "https://res.cloudinary.com/dzohnw8e5/image/upload/v1750110380/ChatGPT_Image_Jun_3_2025_11_44_04_PM_nfb8eo.png",
    name: "Abiola Balogun",
    role: TEAM_ROLES.TALENT_ACQUISITION,
  },
  {
    image:
      "https://res.cloudinary.com/dzohnw8e5/image/upload/v1750082557/ChatGPT_Image_May_26_2025_01_10_31_PM_dakhdb.png",
    name: "Iwuorieh Albbany",
    role: TEAM_ROLES.CORE_TEAM,
  },
];

export const TeamHeading = () => {
  return (
    <div className="team-heading global-heading">
      <span>Meet the Team Behind ProCircle</span>
      <h1>Leadership with Purpose</h1>
    </div>
  );
};
const Team = () => {
  return (
    <section className="team" id="team">
      <img
        src="https://res.cloudinary.com/dzohnw8e5/image/upload/v1745915288/circles_swhnqf.svg"
        alt="circular"
        className="circular"
      />
      <div className="team-header">
        <TeamHeading />
        <Link href={"/team"} className="primary-button">
          See All
        </Link>
      </div>
      <div className="team-flex">
        {teamMemberData.slice(0, 3).map((member, index) => (
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
