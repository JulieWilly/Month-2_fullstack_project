import "./degrees.css";
import advertImg from "../../assets/curious.jpg";

const AdverBanner = () => {
  return (
    <div className="advert">
      <div className="advert_img">
        <img src={advertImg} alt="" />
      </div>
      <div className="advert_desc">
        <h2>Elevate your learning with us and get certified</h2>
        <button>View more programs.</button>
      </div>
    </div>
  );
};

export default AdverBanner;
