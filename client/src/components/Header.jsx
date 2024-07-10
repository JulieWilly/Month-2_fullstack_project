import React, { useEffect, useState } from "react";

import "./header.css";
import logo from "../assets/react.svg";
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../utils/config";

const Header = () => {
  const [name, setName] = useState([]);

  useEffect(() => {
      const fetchName = async () => {
        try{
          const getName = await axios.get(`${API_URL}/learn/login`);
          console.log(getName.data);

        } catch(error) {
          console.log(error)
        }
      }
      fetchName()
  }, [])
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
        <Link to={"/"}>{/* <button>Sign in </button> */}</Link>

        <Link to={"/sign_up"}>{/* <button>Sign up</button> */}</Link>
      </div>
      <p>Welcome back ! {}</p>
    </div>
  );
};

export default Header;
