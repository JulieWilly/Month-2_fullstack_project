import React from "react";

import "./header.css";
import logo from "../assets/react.svg";
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";

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
        <Link to={"/sign_in"}>
          <button>Sign in </button>
        </Link>

        <Link to={"/sign_up"}>
          <button>Sign up</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
