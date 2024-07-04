import React from "react";

import "./header.css";
import logo from "../assets/react.svg";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <div className="headerSect">
      <div className="header-logo">
        <div className="logo_img">
          <img src={logo} alt="" />
        </div>
        <h1>Great tutors</h1>
      </div>

      <NavLinks />

      <div className="signUp_signIn">
        <a href="#">
          <button>Sing in </button>
        </a>

        <a href="#">
          <button>Sing up</button>
        </a>
      </div>
    </div>
  );
};

export default Header;
