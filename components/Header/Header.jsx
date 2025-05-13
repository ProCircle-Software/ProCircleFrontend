/* eslint-disable @next/next/no-img-element */
import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="header-left__auto">
          <div className="header-left__auto-contents">
            <div className="header-left__auto-contents_headings">
              <span>A Professional Family That Holds You to Greatness.</span>
              <h1>Excel Faster with a Community in Your Corner</h1>
            </div>
            <p>
              Join a community where goals turn into achievements through
              collaboration, mentorship, and unwavering support.
            </p>
          </div>
          <div className="header-left__auto-buttons">
            <button className="primary-button">Join Us</button>
            <button className="secondary-button">Learn More</button>
          </div>
        </div>
        <img
          src="https://res.cloudinary.com/dzohnw8e5/image/upload/v1745542143/Compressed_People_mpyt01.png"
          alt="compressed people"
          className="compressed-people"
        />
      </div>
      <div className="header-right">
        <img
          src="https://res.cloudinary.com/dzohnw8e5/image/upload/v1745534251/HeroImg_djn8qk.png"
          alt="hero image"
        />
      </div>
    </header>
  );
};

export default Header;
