import React from 'react';
import './home.css'

const Banner = () => {
    return (
      <div className="bannerSect">
        <div className="banner_txt">
          <div className="courses">
            <h2>50K +</h2>
            <p>Courses</p>
          </div>
          <hr />
        </div>
        <div className="banner_txt">
          <div className="courses">
            <h2>30K +</h2>
            <p>Students</p>
          </div>
          <hr />
        </div>

        <div className="banner_txt">
          <div className="courses">
            <h2>10K +</h2>
            <p>Skilled tutors</p>
          </div>
          <hr />
        </div>
        <div className="banner_txt">
          <div className="courses">
            <h2>20K +</h2>
            <p>Degree Programs</p>
          </div>
        
        </div>
      </div>
    );
}


export default Banner;