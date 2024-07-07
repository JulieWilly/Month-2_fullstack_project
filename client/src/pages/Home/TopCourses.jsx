import React, { useEffect, useState } from "react";
import "./home.css";
import ViewMore from "../../components/ViewMore";
import SectionTitle from "../../components/SectionTitle";
import top_courses from "../../data/top_courses";
import Top_courses from "../../components/Top_Courses";
import axios from "axios";
import { API_URL } from "../../utils/config";

const TopCourses = () => {
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [course, setCourse] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const fetchCourses = await axios
          .get(`${API_URL}/course`)
          .catch((error) => {
            console.log(error);
          });

        const courses = fetchCourses.data.data;

        setCourse(courses);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div>
      <div className="top_couserseSect">
        <SectionTitle title={"Top courses"} />

        <div className="top_courses">
          {/*  */}

          {course.map((top_course, i) => (
            <Top_courses
              course_category={top_course.courseCartegory}
              course_name={top_course.courseName}
              course_desc={top_course.courseDesc}
              course_duration={top_course.courseDuration}
              course_rating={top_course.courseRating}
            />
          ))}
        </div>

        <ViewMore />
      </div>
    </div>
  );
};

export default TopCourses;
