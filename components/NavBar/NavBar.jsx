import React from "react";
import "./navbar.css";

const NavLinks = () => {
  return (
    <div className="nav-links">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#features">Features</a>
      <a href="#team">Team</a>
    </div>
  );
};

const NavBar = () => {
  return (
    <nav className="nav">
      <p className="logo">ProCircle</p>
      <NavLinks />
      <button className="nav-button primary-button">Explore</button>
    </nav>
  );
};

export default NavBar;
