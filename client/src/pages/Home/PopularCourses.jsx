import React from "react";
import SectionTitle from "../../components/SectionTitle";
import coursesInformation from "../../data/courses";
import ViewMore from "../../components/ViewMore";
const Popular_courses = ({ course_img, course_name, course_desc }) => {
  return (
    <>
      <div className="popular_courses">
        <div className="course_img">
          <img src={course_img} alt="Image for a course" />
        </div>
        <h2>{course_name}</h2>
        <p>{course_desc}</p>
      </div>
    </>
  );
};
const PopularCourses = () => {
  return (
    <div className="popuparCourseSect">
      <SectionTitle title={"Popular Courses"} />
      <div className="popuparCourse">
        {coursesInformation.map((course, i) => (
          <Popular_courses
            course_img={course.courseImg}
            course_name={course.courseName}
            course_desc={course.courseDesc}
          />
        ))}
      </div>
      <ViewMore />
    </div>
  );
};

export default PopularCourses;
