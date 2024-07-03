import React from "react";
import "./home.css";
import SectionTitle from "../../components/SectionTitle";
import tutors from "../../data/tutors";
import Tutors_ from "../../components/Tutors_";

import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";


const Tutors = () => {
  return (
    <div className="tutorsSect">
      <SectionTitle title={"Our qualified tutors"} />

      <div className="tutors_sect">
        <GrPrevious className="navigate" />
        {tutors.map((tutors, i) => (
          <Tutors_
            tutors_img={tutors.tutorsImg}
            tutors_name={tutors.tutorsName}
            tutors_desc={tutors.tutorsDesc}
            tutors_courses={tutors.tutorsCourses}
            twitter={tutors.twitterIcon}
            facebook={tutors.facebookIcon}
            instagram={tutors.insgramIcon}
            linkedIn={tutors.linkedInIcon}
          />
        ))}
        <GrNext className="navigate" />
      </div>
    </div>
  );
};

export default Tutors;
