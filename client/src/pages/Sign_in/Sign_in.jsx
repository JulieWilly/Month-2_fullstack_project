import "./login.css";
import { FaGoogle } from "react-icons/fa";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
  const formValidationShema = Yup.object({
    email: Yup.string()
      .email("Invalid email address format")
      .required("Email address is required."),
    password: Yup.number()
      .integer("A number inputs allowed only.")
      .required("Password is required."),
  });

  // initialize useFormik and the initial values.
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: formValidationShema,
    
    onSubmit: (formstate) => {
      console.log(formstate)
    }
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
