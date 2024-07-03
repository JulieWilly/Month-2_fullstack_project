import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";


const Tutors_ = ({
  tutors_img,
  tutors_name,
  tutors_desc,
  tutors_courses,
  twitter,
  facebook,
  instagram,
  linkedIn,
}) => {
  return (
    <>
      <div className="tutor">
        <div className="tutor_img">
          <img src={tutors_img} alt="" />
        </div>
        <h2>{tutors_name}</h2>
        <p>{tutors_desc}</p>

        <div className="bottom">
          <h3>{tutors_courses}</h3>
          <div className="tutors_socials">
            {twitter && (
              <Link className="link" to={twitter}>
                {<FaXTwitter />}
              </Link>
            )}
            {facebook && (
              <Link className="link" to={facebook}>
                {<FaFacebookF />}
              </Link>
            )}
            {instagram && (
              <Link className="link" to={instagram}>
                {<FaInstagram />}
              </Link>
            )}
            {linkedIn && (
              <Link className="link" to={linkedIn}>
                {<FaLinkedinIn />}
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Tutors_;
