import React from 'react';
import './home.css'
import ViewMore from '../../components/ViewMore'
import SectionTitle from '../../components/SectionTitle'
import top_courses from '../../data/top_courses';
const Top_courses = ({course_img, course_category, course_name, course_desc, course_duration}) => {
    return (
      <>
        <div className="top_course">
          <div className="top_course_img">
            <img src={course_img} alt="Top course Image" />
          </div>
          <div className="about_course">
            <div className="top">
              <p className="cartegory">{course_category}</p>
              <div className="ratings">
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
              </div>
            </div>
            <h2>{course_name}</h2>
            <p className="desc">{course_desc}</p>
            <p className="duration">{course_duration}</p>
          </div>
          <div className="bottom">
            <p>More Infor</p>
            <button>Apply</button>
          </div>
        </div>
      </>
    );
}
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

          <ViewMore/>
        </div>
      </div>
    );
}

export default TopCourses;