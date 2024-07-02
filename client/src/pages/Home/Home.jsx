import React from 'react';
import Heros from './Heros';
import Banner from './Banner';
import PopularCourses from './PopularCourses';
import './home.css'
import TopCourses from './TopCourses';
const Home = () => {
    return <div>
        <Heros/>
        <Banner/>
        <PopularCourses/>
        <TopCourses/>
    </div>;
}


export default Home;