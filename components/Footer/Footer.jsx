/* eslint-disable @next/next/no-img-element */
import React from "react";
import "./footer.css";
import Link from "next/link";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="foot">
      <div className="foot-links">
        <div className="foot-links__left">
          <Link href={"#"}>Support</Link>
          <Link href={"#"}>Policy</Link>
          <Link href={"#"}>Terms</Link>
        </div>
        <p className="foot-links__left-logo">ProCircle</p>
        <div className="foot-links__right">
          <Link href={"#"}>Home</Link>
          <Link href={"#"}>About</Link>
          <Link href={"#"}>Features</Link>
        </div>
      </div>
      <p className="foot-work">
        ProCircle is a vibrant professional community where accountability,
        collaboration, and growth thrive. We empower members to achieve career
        milestones through structured goal-setting, skill-building workshops,
        and meaningful networking—all while fostering wellness and camaraderie.
        Join a tribe that celebrates progress and supports every step of your
        journey.
      </p>
      <div className="foot-down">
        <p className="foot-down__left">
          ©{currentYear} ProCircle, All rights reserved
        </p>
        <p className="foot-down-links__left-logo">ProCircle</p>
        <div className="foot-down-links__right">
          <Link href={"#"}>
            <img
              src="https://res.cloudinary.com/dzohnw8e5/image/upload/v1746117546/x-twitter_smj82x.svg"
              alt="x"
            />
          </Link>
          <Link href={"#"}>
            <img
              src="https://res.cloudinary.com/dzohnw8e5/image/upload/v1746117544/linkedin-in-_qd6t9n.svg"
              alt="linked"
            />
          </Link>
          <Link href={"#"}>
            <img
              src="https://res.cloudinary.com/dzohnw8e5/image/upload/v1746117546/ig_c961te.svg"
              alt="instagram"
            />
          </Link>
          <Link href={"#"}>
            <img
              src="https://res.cloudinary.com/dzohnw8e5/image/upload/v1746117545/facebook-f_cewgnb.svg"
              alt="instagram"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
