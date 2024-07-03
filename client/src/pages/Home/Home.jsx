import React from "react";
import Heros from "./Heros";
import Banner from "./Banner";
import PopularCourses from "./PopularCourses";
import "./home.css";
import TopCourses from "./TopCourses";
import Tutors from "./Tutors";
import Subscribe from "./Subscribe";
const Home = () => {
  return (
    <div>
      <Heros />
      <Banner />
      <PopularCourses />
      <TopCourses />
      <Tutors />
      <Subscribe />
    </div>
  );
};

export default Home;
