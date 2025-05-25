/* eslint-disable @next/next/no-img-element */
import React from "react";
import "./footer.css";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer">
      <div className="col-1">
        <div className="col-1__top">
          <div className="col-1__top_pro">
            <img
              src="https://res.cloudinary.com/dzohnw8e5/image/upload/v1747058246/ProCitcleLogo_ulducf.png"
              alt="logo"
            />
            <p>ProCircle</p>
          </div>
          <p className="short-bio">
            A community where professionals thrive together.
          </p>
        </div>
        <Link href={""} className="secondary-button">
          Join Us
        </Link>
      </div>
      <div className="col-2 cols">
        <h3>Quick Links</h3>
        <div className="cols-links">
          <Link href={"#nav"}>Home</Link>
          <Link href={"#about"}>About</Link>
          <Link href={"#features"}>Features</Link>
          <Link href={"#mechanism"}>Mechanism</Link>
          <Link href={"#testimonials"}>Testimonials</Link>
        </div>
      </div>
      <div className="col-3 cols">
        <h3>Resources</h3>
        <div className="cols-links">
          <Link href={"#"}>Community Guide</Link>
          <Link href={"#"}>Workshops</Link>
          <Link href={"#"}>Partners</Link>
          <Link href={"#"}>FAQs</Link>
        </div>
      </div>
      <div className="col-4 cols">
        <h3>Legal</h3>
        <div className="cols-links">
          <Link href={"#"}>Privacy Policy</Link>
          <Link href={"#"}>Terms of Service</Link>
          <Link href={"#"}>Code of Conduct</Link>
          <Link href={"#"}>Cookie Policy</Link>
          <Link href={"#"}>Disclaimer</Link>
        </div>
      </div>
      <div className="col-5 cols">
        <div className="col-5__socials">
          <Link href={"/"}>
            <FaXTwitter className="social-icon"/>
          </Link>
          <Link href={"/"}>
            <FaLinkedinIn className="social-icon"/>
          </Link>
          <Link href={"/"}>
            <FaInstagram className="social-icon"/>
          </Link>
          <Link href={"/"}>
            <FaFacebookF className="social-icon"/>
          </Link>
        </div>
        <p>©{currentYear} ProCircle, All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
