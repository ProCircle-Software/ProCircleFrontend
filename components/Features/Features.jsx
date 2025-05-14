/* eslint-disable @next/next/no-img-element */
import React from "react";
import "./features.css";
import { featuresData } from "./featuresData";

const FeatureCard = ({ icon, heading, text }) => {
  return (
    <div className="feature-card">
      <img src={icon} alt="icon" />
      <h4>{heading}</h4>
      <p>{text}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section className="features" id="features">
      <div className="features-heading global-heading">
        <span>Features That Drive Results</span>
        <h1>We Keep You Focused, You Keep Winning</h1>
      </div>
      <div className="features-grid">
        {featuresData.map((member, index) => (
          <FeatureCard
            key={index}
            icon={member.icon}
            heading={member.heading}
            text={member.text}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
