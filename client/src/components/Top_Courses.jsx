import '../pages/Home/home.css'


const Top_courses = ({
  course_img,
  course_category,
  course_name,
  course_desc,
  course_duration,
}) => {
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
};


export default Top_courses;