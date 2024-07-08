import "./courseInfor.css";
import TopNavigation from "../../components/TopNavigation.jsx";
import { LiaCertificateSolid } from "react-icons/lia";
import { IoCheckmark } from "react-icons/io5";
import { MdOutlineAttachMoney } from "react-icons/md";
import SectionTitle from "../../components/SectionTitle";
import Tutors_ from "../../components/Tutors_";
import tutors from "../../data/tutors";
import Top_courses from "../../components/Top_Courses";
import { IoMdStar } from "react-icons/io";
import reviewerImg from "../../assets/curious.jpg";
import reviwers from "../../data/reviewers.js";
import Footer from "../../components/Footer.jsx";
import top_courses from "../../data/top_courses.js";
import { useAsyncError, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../utils/config.js";
import { Link } from "react-router-dom";

const User_ratings = ({ rv_img, rv_name, rv_desc, rv_rating }) => {
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
};

const CourseInfor = () => {
  const { courseId } = useParams();
  const [courseInfo, setCourseInfo] = useState([]);
  const [relatedCourses, setRelatedCourses] = useState([]);
  const [tutor, setTutor] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [reviewer, setReviewer] = useState([]);

    const courseInfor = async () => {
      setLoading(true);
      setError(false);
      try {
        const getInfor = await axios(`${API_URL}/course/${courseId}`);
        setCourseInfo(getInfor.data.data);
      } catch (error) {
        console.log(error);
        setError(error)
      } finally{
        setLoading(false)
      }
    };
 


    const fetchRelatedCourses = async () => {
      setLoading(true);
      setError(false);
      try {
        const fetchCourses = await axios
          .get(`${API_URL}/course`)
          .catch((error) => {
            console.log(error);
          });

        const courses = fetchCourses.data.data;
        setRelatedCourses(courses);
      } catch (error) {
        console.log(error);
        setError(error)
      } finally{
        setLoading(false)
      }
    };




    const fetchTutors = async () => {
      setLoading(true);
      setError(false);
      try {
        const getTutors = await axios.get(`${API_URL}/tutor`);

        const result = getTutors.data.data;
        setTutor(result);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    const fetchReviwers = async () => {
      setLoading(true)
      setError(false)
      try{

        const getReviwers = await axios.get(`${API_URL}/reviewer`);
        setReviewer(getReviwers.data.data)
      } catch(error) {
        console.log(error)
        setError(error)
      } finally{
        setLoading(false)
      }
    }

    useEffect(()=> {
    fetchRelatedCourses();
    courseInfor();
    fetchTutors();
    fetchReviwers()
    },[])

  return (
    <>
      <div className="degreeSect">
        <TopNavigation />

        <div className="course_desc">
          <div className="course_infor">
            <h1>{courseInfo.courseName}</h1>
            <h3>{courseInfo.courseDesc}</h3>

            <p>{courseInfo.courseDuration} Months</p>

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
            <Link to={`/contact_us/${courseInfo.course_id}`}>
              <button>Start Learning</button>
            </Link>
          </div>
        </div>

        <SectionTitle title={"Course Tutors"} />
        <div className="tutors">
          {tutor.map((tutors, i) => (
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
          {relatedCourses.length > 0 ? (
            relatedCourses.map((top_course, i) => (
              <Link
                className="top_courses"
                to={`/course_info/${top_course.course_id}`}
              >
                <Top_courses
                  id={top_course.course_id}
                  course_category={top_course.courseCartegory}
                  course_name={top_course.courseName}
                  course_desc={top_course.courseDesc}
                  course_duration={top_course.courseDuration}
                  course_rating={top_course.courseRating}
                />
              </Link>
            ))
          ) : (
            <p>Loading courses ...</p>
          )}
        </div>

        <SectionTitle title={"Course ratings"} />
        <div className="course_ratings">
          <div className="gen_rating">
            <IoMdStar className="icon" />
            <h3>4.9</h3>
            <p>({courseInfo.courseRating} reviews)</p>
          </div>
          <div className="stud_reviews">
            {reviewer.map((reviewer, i) => (
              <User_ratings
                rv_img={reviewer.img}
                rv_name={reviewer.reviewerName}
                rv_desc={reviewer.reviewerComment}
                rv_rating={reviewer.reviewerRating}
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
