import './login.css'
import { FaGoogle } from "react-icons/fa";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
const Login = () => {
    return (
      <div className="sign_in_sect">
        <h1>Sing in to your account</h1>
        <p>Welcome back</p>
        <div className="inputs">
          <div className="login">
            <input type="text" placeholder="Email address" />
          </div>
          <div className="login">
            <input type="text" placeholder="Password" />
          </div>

          <button>Sign in </button>
          <p>Continue with </p>
          <div className="social_accounts">
            <div className="icons">
              <FaGoogle />
              <p>Continue with google</p>
            </div>
            <div className="icons">
              <PiMicrosoftOutlookLogoFill />
              <p>Continue with outlook</p>
            </div>
            <div className="icons">
              <PiMicrosoftOutlookLogoFill />
              <p>Continue with outlook</p>
            </div>

            <FaFacebookF />
          </div>
        </div>
      </div>
    );
}


export default Login;