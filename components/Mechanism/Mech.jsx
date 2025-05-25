import React from "react";
import "./mech.css";

const MechCard = ({ cardNumber, heading, text }) => {
  return (
    <div className="mech-card">
      <h1>{cardNumber}</h1>
      <h3>{heading}</h3>
      <p>{text}</p>
    </div>
  );
};

const mechanisms = [
  {
    id: 1,
    cardNumber: "01",
    heading: "Apply",
    text: "Fill out a short form to share your goals and join the community.",
  },
  {
    id: 2,
    cardNumber: "02",
    heading: "Match",
    text: "We pair you with accountability partners who align with your focus.",
  },
  {
    id: 3,
    cardNumber: "03",
    heading: "Engage",
    text: "Join check-ins, attend events, and grow with your ProCircle peers.",
  },
];

const Mech = () => {
  return (
    <section className="mech" id="mechanism">
      <div className="mech-heading global-heading">
        <span>3 Step Process to Get Started</span>
        <h1>How It Works</h1>
      </div>
      <div className="mech-flex">
        {mechanisms.map((member, index) => (
          <MechCard
            key={index}
            cardNumber={member.cardNumber}
            heading={member.heading}
            text={member.text}
          />
        ))}
      </div>
    </section>
  );
};

export default Mech;
