import "./about.css";
import "../Sign_in/login.css";
import Banner from "../../components/Banner";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../utils/config";

const About = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const formValidations = Yup.object({
    courseCategory: Yup.string().required("Course Category is required."),
    courseName: Yup.string().required("Course name is required."),
    courseDesc: Yup.string().required("Course description required."),
    courseDuration: Yup.number()
      .typeError("Duration must be a number")
      .required("Duration is reqired."),

    courseRating: Yup.number()
      .required("Course rating is required.")
      .typeError("Rating must be a number"),
  });

  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      setError(false);
      const createNewCourse = await axios
        .post(`${API_URL}/course/add`, {
          courseCategory: values.courseCategory,
          courseName: values.courseName,
          courseDesc: values.courseDesc,
          courseDuration: values.courseDuration,
          courseRating: values.courseRating,
        })
        .catch((error) => {
          setError(error);
        });

      console.log(createNewCourse);

      if (createNewCourse.status == 200) {
        alert("course created successfully");
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const formik = useFormik({
    initialValues: {
      courseCategory: "",
      courseName: "",
      courseDesc: "",
      courseDuration: "",
      courseRating: "",
    },
    onSubmit: handleSubmit,
    validationSchema: formValidations,
  });

  return (
    <>
      <Banner
        dg_title={"Create a new course"}
        dg_desc={
          "In this section the administrator is reqired to add a new course and provide all the required details."
        }
      />
      <div className="sign_in_sect">
        <div className="inputs">
          <form onSubmit={formik.handleSubmit}>
            <div className="login">
              <input
                type="text"
                placeholder="Course category"
                name="courseCategory"
                value={formik.values.courseCategory}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.courseCategory &&
                formik.errors.courseCategory && (
                  <p> {formik.errors.courseCategory}</p>
                )}
            </div>
            <div className="login">
              <input
                type="text"
                placeholder="Course Name"
                name="courseName"
                values={formik.values.courseName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.courseName && formik.errors.courseName && (
                <p>{formik.errors.courseName}</p>
              )}
            </div>
            <div className="login">
              <input
                type="text"
                placeholder="Course description"
                name="courseDesc"
                value={formik.values.courseDesc}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.courseDesc && formik.errors.courseDesc && (
                <p>{formik.errors.courseDesc}</p>
              )}
            </div>
            <div className="login">
              <input
                type="number"
                max={10}
                placeholder="Course duration"
                name="courseDuration"
                value={formik.values.courseDuration}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {formik.touched.courseDuration &&
                formik.errors.courseDuration && (
                  <p>{formik.errors.courseDuration}</p>
                )}
            </div>

            <div className="login">
              <input
                type="number"
                placeholder="Course Ratings"
                name="courseRating"
                value={formik.values.courseRating}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.courseRating && formik.errors.courseRating && (
                <p>{formik.errors.courseRating}</p>
              )}
            </div>

            <button type="submit">
              {loading ? " Creating course..." : "Save course"}{" "}
            </button>
            {error && <p>{error}</p>}
          </form>
        </div>
      </div>
    </>
  );
};

export default About;
