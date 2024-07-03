import React from "react";
import "./degrees.css";
import Banner from "../../components/Banner";
import SectionTitle from "../../components/SectionTitle";
import { GiDuration } from "react-icons/gi";
import { IoIosPricetag } from "react-icons/io";
import degree_programs from "../../data/degree_programs";
import ViewMore from '../../components/ViewMore'
import AdverBanner from "./AdvertBanner";
import Footer from '../../components/Footer'
const Degree_programs_card = ({
  dg_img,
  dg_name,
  dg_desc,
  dg_period,
  dg_prev_price,
  dg_cur_price,
  dg_rating,
}) => {
  return (
    <>
      
        <div className="degree">
          <div className="dg_img">
            <img src={dg_img} alt="" />
          </div>
          <div className="about_dg">
            <h2>{dg_name}</h2>
            <h4>{dg_desc}</h4>
            <div className="period">
              <GiDuration />
              <p>{dg_period} months</p>
            </div>
            <div className="dg_price">
              <IoIosPricetag />
              <p className="red">{dg_prev_price}$</p>
              <span>Now</span>
              <b>{dg_cur_price} $</b>
            </div>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>({dg_rating})
          </div>
          <div className="bottom">
            <p>More Infor</p>
            <button>Apply</button>
          </div>
        </div>
    </>
  );
};
const Degrees = () => {
  return (
    <div>
      <Banner
        dg_title={
          "Apply and get to learn your preffered degree program with us"
        }
        dg_desc={
          "Get to learn with us and improve your career with our accreditted degree programs which are recognized world wide by different companies."
        }
      />

      <div className="degree_programs">
        <SectionTitle title={"View some of our degree programs."} />
        <div className="degree_desc">
          <div className="dg_info">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
              officia ipsam tempore distinctio voluptatum corporis ullam? Modi
              ratione vel pariatur repudiandae, ab culpa rem harum molestias
              iste eveniet vero dolorum!
            </p>
          </div>
          <div className="dg_info">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
              officia ipsam tempore distinctio voluptatum corporis ullam? Modi
              ratione vel pariatur repudiandae, ab culpa rem harum molestias
              iste eveniet vero dolorum!
            </p>
          </div>
          <div className="dg_info">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
              officia ipsam tempore distinctio voluptatum corporis ullam? Modi
              ratione vel pariatur repudiandae, ab culpa rem harum molestias
              iste eveniet vero dolorum!
            </p>
          </div>
          <div className="dg_info">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
              officia ipsam tempore distinctio voluptatum corporis ullam? Modi
              ratione vel pariatur repudiandae, ab culpa rem harum molestias
              iste eveniet vero dolorum!
            </p>
          </div>
        </div>

        <div className="programs">
          <SectionTitle title={"Our Degree programs"} />
          <div className="dg_programs">
            {degree_programs.map((programs, i) => (
              <Degree_programs_card
                dg_img={programs.dgImg}
                dg_name={programs.dgName}
                dg_desc={programs.dgDesc}
                dg_prev_price={programs.dgPrevPrice}
                dg_period={programs.dgPeriod}
                dg_cur_price={programs.dgCurPrice}
                dg_rating={programs.dgRating}
              />
            ))}
          </div>
        </div>
      </div>
      
      <ViewMore />
      <AdverBanner/>
      <Footer/>
    </div>
  );
};

export default Degrees;
