import "./courseInfor.css";
import TopNavigation from "../../components/TopNavigation.jsx";
import { LiaCertificateSolid } from "react-icons/lia";
import { IoCheckmark } from "react-icons/io5";
import { MdOutlineAttachMoney } from "react-icons/md";
import SectionTitle from '../../components/SectionTitle'
import Tutors_ from "../../components/Tutors_";
import tutors from "../../data/tutors";
import Top_courses from "../../components/Top_Courses";
import { IoMdStar } from "react-icons/io";
import reviewerImg from '../../assets/curious.jpg'
import reviwers from "../../data/reviewers.js"; 
 import Footer from '../../components/Footer.jsx'
 import top_courses from '../../data/top_courses.js'

const User_ratings = ({rv_img, rv_name, rv_desc, rv_rating}) => {
  return (
    <>
      <div className="user_ratings">
        <div className="user_reviews">
          <div className="reviewer_img">
            <img src={rv_img} alt="Reviewers images" />
          </div>
          <h2>{rv_name}</h2>
          <div className="rating_review">
            <p>Rating ({rv_rating})</p>
            <p>{rv_desc}</p>
          </div>
        </div>
      </div>
    </>
  );
}


const CourseInfor = () => {
  return (
    <>
      <div className="degreeSect">
        <TopNavigation />

        <div className="course_desc">
          <div className="course_infor">
            <h1>Course Name</h1>
            <h3>Course desc</h3>

            <p>3 Months</p>

            <div className="price">
              <MdOutlineAttachMoney className="icon" />
              <h3>12/= </h3>
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
          <div className="start_course">
            <div className="img">
              <img src={reviewerImg} alt="" />
            </div>

            <button>Pay for access</button>
            <button>Start Learning</button>
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
          {top_courses.map((top_course, i) => (
            <Top_courses
              course_img={top_course.courseImg}
              course_category={top_course.courseCartegory}
              course_name={top_course.courseName}
              course_desc={top_course.courseDesc}
              course_duration={top_course.courseDuration}
            />
          ))}
        </div>

        <SectionTitle title={"Course ratings"} />
        <div className="course_ratings">
          <div className="gen_rating">
            <IoMdStar className="icon" />
            <h3>4.9</h3>
            <p>(20 reviews)</p>
          </div>
          <div className="stud_reviews">
            {reviwers.map((reviewer, i) => (
              <User_ratings
                rv_img={reviewer.img}
                rv_name={reviewer.name}
                rv_desc={reviewer.desc}
                rv_rating={reviewer.rating}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CourseInfor;