import "./login.css";
import { json, Link, Navigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";

import * as Yup from "yup";
import { useEffect } from "react";

const Sign_up = () => {
  const formValidations = Yup.object({
    firstName: Yup.string()
      .required("First name is required.")
      .min(4, "First name should have a minimum of 4 characters.")
      .max(10, "First name should have atleast less than 10 characters"),
    lastName: Yup.string()
      .required("Last name is required.")
      .min(4, "Last name should have a minimum of 4 characters.")
      .max(10, "Last name should have atleast less than 10 characters"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email address required."),
    password: Yup.number()
      .typeError("Password must be a number")
      .integer("Password must be a number")
      .required("Password is reqired.")
      .min(4, "Password should not be less than 4 numbers")
  });


 const handleSubmit = async (values) => {
      try{
          const createNewUser = await axios
            .post("http://localhost:3000/learn/register",{
              firstName: values.firstName,
              lastName: values.lastName,
              email: values.email,
              password: parseInt(values.password)
            })
            .then((response) => console.log(response))
            .catch((error) => console.log(error));

          console.log(createNewUser)
      }catch(err){
        console.log(err)
      }

  }

  useEffect(()=> {
handleSubmit()
  },[])

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    onSubmit: handleSubmit,
    validationSchema: formValidations,
  });
  return (
    <div className="sign_in_sect">
      <h1>Create accout with us.</h1>
      <p>Learn on your own time from top universities tutors on your pace.</p>
      <div className="inputs">
        <form onSubmit={formik.handleSubmit}>
          <div className="login">
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <p> {formik.errors.firstName}</p>
            )}
          </div>
          <div className="login">
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              values={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <p>{formik.errors.lastName}</p>
            )}
          </div>
          <div className="login">
            <input
              type="text"
              placeholder="Email address"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <p>{formik.errors.email}</p>
            )}
          </div>
          <div className="login">
            <input
              type="text"
              placeholder="Password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.touched.password && formik.errors.password && (
              <p>{formik.errors.password}</p>
            )}
          </div>

          <button type="submit">Sign in </button>

          <div className="instructions">
            <p>
              Already on <span>Great tutors?</span>{" "}
              <Link to={"/sign_in"}>Sing in</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sign_up;
