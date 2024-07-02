import React from 'react';
import './home.css'
import  herosimg from '../../assets/heros2.jpg'


const Heros = () => {
    return (
      <div>
        <div className="goals">
          <p>Learn and get certified</p>
          <p>Build your career</p>
        </div>
        <div className="herosSect">
          <div className="heros_img">
            <img src={herosimg} alt="" />
          </div>

          <div className="heros_message">
            <div className="message">
              <h1>
                Our mission is to provide <strong>high quality</strong>{" "}
                education that foster <strong>personal growth</strong>.
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                scelerisque a lorem vitae hendrerit. Nullam et ligula tristique,
                consectetur mi eu, consectetur dolor.
              </p>

              <div className="nav_links">
                <a href="#">
                  <button>View Courses</button>
                </a>
                <a href="#">
                  <button>About us</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}


export default Heros;