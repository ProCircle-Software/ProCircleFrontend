"use client";
import { useState, useEffect } from "react";
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
  const [showFloatingNav, setShowFloatingNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollingDown, setScrollingDown] = useState(true);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine scroll direction
      const isScrollingDown = currentScrollY > lastScrollY;
      setScrollingDown(isScrollingDown);
      setLastScrollY(currentScrollY);

      // Get the header element's position
      const headerElement = document.querySelector("header");

      if (headerElement) {
        // Get the bottom position of the header
        const headerBottom = headerElement.getBoundingClientRect().bottom;

        // Show floating nav when we've scrolled past the header AND we're scrolling down
        // Hide it when scrolling up
        setShowFloatingNav(headerBottom <= 0 && isScrollingDown);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <nav className="nav">
        <p className="logo">ProCircle</p>
        <NavLinks />
        <button className="nav-button primary-button">Explore</button>
      </nav>

      {showFloatingNav && (
        <div className={`floating-nav ${scrollingDown ? "show" : "hide"}`}>
          <NavLinks />
        </div>
      )}
    </>
  );
};

export default NavBar;
