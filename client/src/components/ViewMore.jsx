import './header.css' 
import { FaAngleDown } from "react-icons/fa6";
import React from 'react';


const ViewMore = () => {
    return (
      <div>
        <div className="see_more">
          <p>See more</p>
          {<FaAngleDown />} 
        </div>
      </div>
    );
}


export default ViewMore;