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
        <a href="#">
          <Link to={"/sign_in"}>
            <button>Sing in </button>
          </Link>
        </a>

        <a href="#">
          <Link to={"/sign_up"}>
            <button>Sing up</button>
          </Link>
        </a>
      </div>
    </div>
  );
};

export default Header;
