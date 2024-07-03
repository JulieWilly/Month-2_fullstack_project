import "./contact.css";
import TopNavigation from '../../components/TopNavigation'
import React from "react";
import curious from '../../assets/curious.jpg'
import SectionTitle from '../../components/SectionTitle'
import { GrFormNext } from "react-icons/gr";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { MdOutlineRadioButtonChecked } from "react-icons/md";
const Contact = () => {
  return (
    <div className="learningSect">
      <TopNavigation />
      <SectionTitle title={"Lessons"} />
      <div className="learn_sect">
        <div className="lessons">
          <div className="Lesson_1">
            <GrFormNext className="icon" />
            <h3>Unit 1</h3>
          </div>
          <div className="units">
            <div className="Lesson_1">
              <MdOutlineRadioButtonChecked className="link" />
              <p>Unit 2</p>
            </div>
            <div className="Lesson_1">
              <MdOutlineRadioButtonChecked className="link" />
              <p>Unit 3</p>
            </div>
            <div className="Lesson_1">
              <MdOutlineRadioButtonUnchecked />
              <p>Unit 4</p>
            </div>
            <div className="Lesson_1">
              <MdOutlineRadioButtonUnchecked />
              <p>Unit 5</p>
            </div>
          </div>
          <div className="Lesson_1">
            <GrFormNext className="icon" />
            <h3>Unit 2</h3>
          </div>
          <div className="Lesson_1">
            <GrFormNext className="icon" />
            <h3>Unit 3</h3>
          </div>
        </div>

      <div className="learn">
        <div className="disp_img">
          <img src=   {curious} alt="" />
        </div>

        <div className="take_notes">
          <textarea name="users_notes" id="usersNotes" rows={10}  ></textarea>

          <button>Save notes</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Contact;
