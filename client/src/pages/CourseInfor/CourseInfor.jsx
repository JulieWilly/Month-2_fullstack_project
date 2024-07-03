import "./courseInfor.css";
import { GrNext } from "react-icons/gr";
import { LiaCertificateSolid } from "react-icons/lia";
import { IoCheckmark } from "react-icons/io5";
import { MdOutlineAttachMoney } from "react-icons/md";
import SectionTitle from '../../components/SectionTitle'
import Tutors_ from "../../components/Tutors_";
import tutors from "../../data/tutors";
import TopCourses from "../Home/TopCourses";
import { IoMdStar } from "react-icons/io";

const CourseInfor = () => {
  return (
    <div className="degreeSect">
      <div className="top_nav">
        <h2>Home</h2>
        <div className="next">
          <GrNext className="link" />
        </div>
        <p className="course_path">Course name</p>
      </div>

      <div className="course_infor">
        <h1>Course Name</h1>
        <h3>Course desc</h3>

        <p>3 Months</p>

        <div className="price">
          <MdOutlineAttachMoney className="icon" />
          <h3>12</h3>
        </div>

        <div className="certificate">
          <LiaCertificateSolid className="icon" />
          <p>Earn a certificate upon completion </p>
        </div>

        <p className="content">Course Content</p>
        <div className="course_content">
          <div className="lesson">
            <IoCheckmark />
            <p>lesson 1</p>
          </div>
          <div className="lesson">
            <IoCheckmark />
            <p>lesson 1</p>
          </div>{" "}
          <div className="lesson">
            <IoCheckmark />
            <p>lesson 1</p>
          </div>{" "}
          <div className="lesson">
            <IoCheckmark />
            <p>lesson 1</p>
          </div>{" "}
          <div className="lesson">
            <IoCheckmark />
            <p>lesson 1</p>
          </div>
        </div>
      </div>

      <SectionTitle title={"Course Tutors"} />
      <div className="tutors">
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
      </div>

      <SectionTitle title={"Related courses"} />
      <div className="related_courses">
        <TopCourses />
      </div>

      <SectionTitle title={"Course ratings"} />
      <div className="course_ratings">
        <div className="gen_rating">
          <IoMdStar className="icon" />
          <h3>4.9</h3>
          <p>(20 reviews)</p>
        </div>

        <div className="user_reviews">
            <div className="reviewer_img">
                <img src="" alt="" />
            </div>
            <h2>Reviewers name</h2>
            <div className="rating_review">
                <p>(4.8)</p>
                <p>Reviews Description</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInfor;
