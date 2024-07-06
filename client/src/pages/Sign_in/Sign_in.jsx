import "./login.css";
import { FaGoogle } from "react-icons/fa";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
import { Link, useNavigate} from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import axios from "axios";
import { API_URL } from "../../utils/config";
const Login = () => {
  const [loading, setLoading ] = useState()
  const [error, setError] = useState()
  const navigate = useNavigate()


  const formValidationShema = Yup.object({
    email: Yup.string()
      .email("Invalid email address format")
      .required("Email address is required."),
    password: Yup.string()
      // .integer("A number inputs allowed only.")
      .required("Password is required."),
  });


  const handleSubmit = async(values) => {
    try{
      setLoading(true)
      setError(false)

      const authUser = await axios.post(`${API_URL}/learn/login`, {
        email:values.email,
        password: values.password
      },
      {
        withCredentials:true
      }
    ).catch(error => console.log(error))

      if(authUser.status === 200) {
        alert("Login successful")
        navigate('/')
      } else {
        alert("Something went wrong!!")
      }

    } catch(err) {
      setError(err.message)

    }finally{
      setLoading(false)
    }
  }
  // initialize useFormik and the initial values.
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: formValidationShema,
    
    onSubmit: handleSubmit
  });
  return (
    <div className="sign_in_sect">
      <h1>Sing in to your account</h1>
      <p className="welcome">Welcome back</p>

      <div className="inputs">
        <form action="post" onSubmit={formik.handleSubmit}>
          <div className="login">
            <input
              type="text"
              placeholder="Email address"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.touched.email && formik.errors.email && <p>{formik.errors.email}</p>}
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

            { formik.touched.password && formik.errors.password && <p>{formik.errors.password}</p>}
          </div>

          <button>Sign in </button>
          <div className="instructions">
            <p>
              New to <span>Great tutors?</span>{" "}
              <Link to={"/sign_up"}>Sing up</Link>
            </p>
            <h2>Or</h2>
            <p>Continue with </p>
          </div>
          <div className="social_accounts">
            <div className="Lesson_1">
              <FaGoogle className="link" />
              <p>Continue with google</p>
            </div>
            <div className="Lesson_1">
              <PiMicrosoftOutlookLogoFill className="link" />
              <p>Continue with outlook</p>
            </div>
            <div className="Lesson_1">
              <FaFacebookF className="link" />
              <p>Continue with outlook</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
