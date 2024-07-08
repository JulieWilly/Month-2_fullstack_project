import React, { useEffect, useState } from "react";
import "./home.css";
import SectionTitle from "../../components/SectionTitle";
import tutors from "../../data/tutors";
import Tutors_ from "../../components/Tutors_";

import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { API_URL} from '../../utils/config'
import axios from 'axios'

const Tutors = () => {
  const [tutor, setTutor] = useState([]);
  const [loading, setLoading] = useState()
  const [error, setError] = useState()
  useEffect(() => {
    const fetchTutors = async () => {
      setLoading(true)
      setError(false)
      try {
        const getTutors = await axios.get(`${API_URL}/tutor`);

        const result = getTutors.data.data;
        setTutor(result);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      } 
    }

    fetchTutors();
  },[])

  return (
    <div className="tutorsSect">
      <SectionTitle title={"Our qualified tutors"} />

      <div className="tutors_sect">
        <GrPrevious className="navigate" />
        
        { tutor.length > 0 ? (
          tutor.map((tutors, i) => (
          <Tutors_
            tutors_img={tutors.tutorsImg}
            tutors_name={tutors.tutorsName}
            tutors_desc={tutors.tutorsDesc}
            tutors_courses={tutors.tutorsCourses}
            twitter={tutors.twitterIcon}
            facebook={tutors.facebookIcon}
            instagram={tutors.insgramIcon}
            linkedIn={tutors.linkedInIcon}
          />
        ))
        ):(
          <p>Loading data .....</p>
        )
        }
        {error && <p>{error}</p>}
        <GrNext className="navigate" />
      </div>
    </div>
  );
};

export default Tutors;
