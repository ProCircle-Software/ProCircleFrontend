"use client";
import { useState, useEffect } from "react";
import "./navbar.css";
import { RiMenu3Fill } from "react-icons/ri";
import { FaXmark, FaCheck } from "react-icons/fa6";
import axios from "axios";

const NavLinks = ({ isMobile = false }) => {
  const [activeLink, setActiveLink] = useState("nav");

  const handleClick = (link) => {
    setActiveLink(link);
  };

  const [pairing, setPairing] = useState(false);

  const handlePairing = async () => {
    try {
      setPairing(true)
      const signUpRes = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_API}/auth/signin`, {
        identifier: process.env.NEXT_PUBLIC_IDENTIFIER,
        password: process.env.NEXT_PUBLIC_PASSWORD,
      })
      const adminToken = signUpRes.data.data.token

      await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API}/goal/pair/user`, {
        headers: {
          Authorization: `Bearer ${adminToken}`
        }
      })
      setPairing(false)
      alert('Goal paired successfully');
    } catch (error) {
      setPairing(false)
      alert('Error pairing goal');
    }
  };

  return (
    <div className={`nav-links ${isMobile ? "mobile-nav-links" : ""}`}>
      <a
        href="#nav"
        className={activeLink === "nav" ? "active" : ""}
        onClick={() => handleClick("nav")}
      >
        Home
        {isMobile && activeLink === "nav" && <FaCheck />}
      </a>
      <a
        href="#about"
        className={activeLink === "about" ? "active" : ""}
        onClick={() => handleClick("about")}
      >
        About
        {isMobile && activeLink === "about" && <FaCheck />}
      </a>
      <a
        href="#features"
        className={activeLink === "features" ? "active" : ""}
        onClick={() => handleClick("features")}
      >
        Features
        {isMobile && activeLink === "features" && <FaCheck />}
      </a>
      <a
        href="#team"
        className={activeLink === "team" ? "active" : ""}
        onClick={() => handleClick("team")}
      >
        Team
        {isMobile && activeLink === "team" && <FaCheck />}
      </a>
      <button onClick={handlePairing} disabled={pairing} className="primary-button" style={{ borderRadius: '8px', padding: '8px 40px', color: 'black' }}>
        {pairing ? 'Pairing...' : 'Pair Goal'}</button>
    </div>
  );
};

const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="mobile-menu">
      <div className="mobile-menu-top">
        <div className="mobile-menu__nav">
          <button className="primary-button">Explore</button>
          <button className="close-button" onClick={onClose}>
            <FaXmark />
          </button>
        </div>
        <NavLinks isMobile={true} />
      </div>
      <button className="primary-button primary-button-join">Join Us</button>
    </div>
  );
};

const NavBar = () => {
  const [showFloatingNav, setShowFloatingNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollingDown, setScrollingDown] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      <nav className="nav" id="nav">
        <p className="logo">ProCircle</p>
        <NavLinks />
        <div className="nav-btns">
          <button className="nav-button primary-button">Explore</button>
          <RiMenu3Fill
            className="menu-icon"
            onClick={() => setIsMobileMenuOpen(true)}
          />
        </div>
      </nav>

      {showFloatingNav && (
        <div className={`floating-nav ${scrollingDown ? "show" : "hide"}`}>
          <NavLinks />
        </div>
      )}

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};

export default NavBar;
