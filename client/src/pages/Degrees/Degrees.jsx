import React from "react";
import "./degrees.css";
import Banner from "../../components/Banner";
import SectionTitle from '../../components/SectionTitle'

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
      </div>
    </div>
  );
};

export default Degrees;
