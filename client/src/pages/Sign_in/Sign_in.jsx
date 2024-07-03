import "./login.css";
import { FaGoogle } from "react-icons/fa";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="sign_in_sect">
      <h1>Sing in to your account</h1>
      <p className="welcome">Welcome back</p>

      <div className="inputs">
        <form action="post">
          <div className="login">
            <input type="text" placeholder="Email address" />
          </div>
          <div className="login">
            <input type="text" placeholder="Password" />
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
