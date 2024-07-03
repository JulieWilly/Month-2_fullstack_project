import { GrNext } from "react-icons/gr";
import './header.css'

const TopNavigation = () => {
  return (
    <div className="top_nav">
      <h2>Home</h2>
      <div className="next">
        <GrNext className="link" />
      </div>
      <p className="course_path">Course name</p>
    </div>
  );
};

export default TopNavigation;
