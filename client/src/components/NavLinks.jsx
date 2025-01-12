import { Link } from "react-router-dom";
import "./header.css";
const NavLinks = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link className="link" to={"/home"}>
            {" "}
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to={"/degrees"}>
            Degrees
          </Link>
        </li>
        <li>
          <Link className="link" to={"/about_us"}>
            Create a new course
          </Link>
        </li>
        {/* <li>
          <Link className="link" to={"/contact_us"}>
            Contact us
          </Link>
        </li>
        <li>
          <Link className="link" to={"/courseInfor"}>
            Course Infor
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default NavLinks;
