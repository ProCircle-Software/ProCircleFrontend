/* eslint-disable @next/next/no-img-element */
import React from "react";
import "./join.css";
import Link from "next/link";

const Join = () => {
  return (
    <section className="join">
      <div className="join-left">
        <div className="join-left__details">
          <div className="join-left__details-heading">
            <span>Ready to Start</span>
            <h1>
              Join a Circle That Moves You Forward and Helps You Stay on Track
            </h1>
          </div>
          <p>
            Join ProCircle and become part of a supportive, goal-driven
            community. Get matched with accountability partners, attend
            impactful sessions, and stay on track with every step. Let’s grow
            together
          </p>
        </div>
        <div className="join-action">
          <Link href={"#"} className="primary-button">
            Join Now
          </Link>
          <Link href={"#"} className="secondary-button">
            <img
              src="https://res.cloudinary.com/dzohnw8e5/image/upload/v1746101447/catppuccin_pdf_dt4oz4.svg"
              alt="resources"
            />
            <p>Download Guide</p>
          </Link>
        </div>
      </div>
      <img
        src="https://res.cloudinary.com/dzohnw8e5/image/upload/v1746100201/Subtract_s7lipc.png"
        alt="join us"
      />
    </section>
  );
};

export default Join;
