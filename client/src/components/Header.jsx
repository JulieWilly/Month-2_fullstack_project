import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import logo from "../assets/react.svg";

const Header = () => {
  return (
    <div className="headerSect">
      <div className="header-logo">
        <div className="logo_img">
          <img src={logo} alt="" />
        </div>
        <h1>Great tutors</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link className="link" to={"/"}>
              {" "}
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to={"/degrees"}>
              Degrees
            </Link>
          </li>
          <li>
            <Link className="link" to={"/about_us"}>
              About us
            </Link>
          </li>
          <li>
            <Link className="link" to={"/contact_us"}>
              Contact us
            </Link>
          </li>
        </ul>
      </nav>

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
