import "./header.css";

import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import logoImg from "../assets/react.svg";
import { Link } from "react-router-dom";

import NavLinks from "../components/NavLinks";
const Footer = () => {
  return (
    <>
      <div className="footerSect">
        <div className="logo_sect">
          <img src={logoImg} alt="" />
          <h1>Great tutors</h1>
        </div>

        <div className="navigation_sect">
          <h2>Navigation Links</h2>
          <NavLinks className="nav_links" />
        </div>
        <div className="social_links">
          <h2>Social Links</h2>
          <div className="accounts">
            <div className="social_link">
              <FaXTwitter />
            </div>
            <div className="social_link">
              <FaFacebookF />
            </div>
            <div className="social_link">
              <FaInstagram />
            </div>
            <div className="social_link">
              <FaLinkedinIn />
            </div>
          </div>
        </div>
      </div>

      <p className="bottom_text">
        {" "}
        Month 2 Online Learning project. Developed by Wilfred Muchire. All
        rights reserved.
      </p>
    </>
  );
};

export default Footer;
