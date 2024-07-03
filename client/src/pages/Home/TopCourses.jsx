import React from "react";
import "./home.css";
import ViewMore from "../../components/ViewMore";
import SectionTitle from "../../components/SectionTitle";
import top_courses from "../../data/top_courses";
import Top_courses from "../../components/Top_Courses";
const TopCourses = () => {
  return (
    <div>
      <div className="top_couserseSect">
        <SectionTitle title={"Top courses"} />
        <div className="top_courses">
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

        <ViewMore />
      </div>
    </div>
  );
};

export default TopCourses;
