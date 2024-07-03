import React from "react";
import "./home.css";
import SectionTitle from "../../components/SectionTitle";
import tutors from "../../data/tutors";
import {Link} from 'react-router-dom'

import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

const Tutors_ = ({
  tutors_img,
  tutors_name,
  tutors_desc,
  tutors_courses,
  twitter,
  facebook,
  instagram,
  linkedIn,
}) => {
  return (
    <>
      <div className="tutor">
        <div className="tutor_img">
          <img src={tutors_img} alt="" />
        </div>
        <h2>{tutors_name}</h2>
        <p>{tutors_desc}</p>

        <div className="bottom">
          <h3>{tutors_courses}</h3>
          <div className="tutors_socials">
            {twitter && (
              <Link className="link" to={twitter}>
                {<FaXTwitter />}
              </Link>
            )}
            {facebook && (
              <Link className="link" to={facebook}>
                {<FaFacebookF />}
              </Link>
            )}
            {instagram && (
              <Link className="link" to={instagram}>
                {<FaInstagram />}
              </Link>
            )}
            {linkedIn && (
              <Link className="link" to={linkedIn}>
                {<FaLinkedinIn />}
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
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
