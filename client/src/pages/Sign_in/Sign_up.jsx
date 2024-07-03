import './sign_up.css'
import { FaGoogle } from "react-icons/fa";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";   

const Sign_up = () => {
    return (
      <div className="sign_in_sect">
        <h1>Create accout with us.</h1>
        <p>Learn on your own time from top universities tutors on your pace.</p>
        <div className="inputs">
          <form action="post">
            <div className="login">
              <input type="text" placeholder="First Name" />
            </div>
            <div className="login">
              <input type="text" placeholder="Last Name" />
            </div>
            <div className="login">
              <input type="text" placeholder="Email address" />
            </div>
            <div className="login">
              <input type="text" placeholder="Password" />
            </div>

            <button>Sign in </button>
            <div className="instructions">
              <p>
                Already on  <span>Great tutors?</span> <a href="#">Sing in</a>
             </p>
            </div>
          </form>
        </div>
      </div>
    );
}


export default Sign_up;