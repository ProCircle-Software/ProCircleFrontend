/* eslint-disable @next/next/no-img-element */
import React from "react";
import "./about.css";

const AboutList = ({ item }) => {
  return (
    <div className="about-list">
      <img
        src="https://res.cloudinary.com/dzohnw8e5/image/upload/v1745659668/check_w7lzuv.svg"
        alt="checkIcon"
      />
      <p>{item}</p>
    </div>
  );
};

const About = () => {
  return (
    <section className="about">
      <img
        src="https://res.cloudinary.com/dzohnw8e5/image/upload/v1745588947/AboutImg_aljyzr.png"
        alt="about image"
        className="about-img"
      />
      <div className="about-right">
        <div className="about-right__heading">
          <span>No one gets left behind.</span>
          <h1>A Circle That Keeps You Inspired and Accountable</h1>
        </div>
        <div className="about-right__lists">
          <AboutList
            item={
              "Built for doers, dreamers, and professionals who want real progress. We turn goals into action through structure and support."
            }
          />
          <AboutList
            item={
              "Accountability, mentorship, and community—all in one circle. Stay focused with regular check-ins and shared growth."
            }
          />
          <AboutList
            item={
              "Weekly check-ins keep you consistent, motivated, and on track. Progress is easier when someone’s walking with you."
            }
          />
          <AboutList
            item={
              "More than networking—a real support system for your growth. We celebrate wins, share insights, and lift each other up."
            }
          />
        </div>
        <button className="primary-button">Features</button>
      </div>
    </section>
  );
};

export default About;
