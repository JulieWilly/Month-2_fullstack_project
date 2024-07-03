import React from "react";
import "./degrees.css";
import programImg from '../../assets/curious.jpg'
import Banner from "../../components/Banner";
import SectionTitle from '../../components/SectionTitle'
import { GiDuration } from "react-icons/gi";
import { IoIosPricetag } from "react-icons/io";
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
            <div className="degree">
              <div className="dg_img">
                <img src={programImg} alt="" />
              </div>
              <div className="about_dg">
                <h2>Degree program</h2>
                <h4>program description</h4>
                <div className="period">
                  <GiDuration />
                  <p>3 Months</p>
                </div>

                <div className="dg_price">
                  <IoIosPricetag />
                  <p className="red">200 $</p>
                  <span>Now</span>
                  <p>150$</p>
                </div>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
              </div>
              <div className="bottom">
                <p>More Infor</p>
                <button>Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Degrees;
