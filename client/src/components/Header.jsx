import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to={"/"}> Home</Link>
            </li>
            <li>
              <Link to={"/degrees"}>Degrees</Link>
            </li>
            <li>
              <Link to={"/about_us"}>About us</Link>
            </li>
            <li>
              <Link to={"/contact_us"}>Contact us</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
}

export default Header;