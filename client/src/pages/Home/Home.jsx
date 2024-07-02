import React from 'react';
import Heros from './Heros';
import Banner from './Banner';
import PopularCourses from './PopularCourses';
import './home.css'
const Home = () => {
    return <div>
        <Heros/>
        <Banner/>
        <PopularCourses/>
    </div>;
}


export default Home;