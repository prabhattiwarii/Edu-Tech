import React from 'react';
import "./Banner.css";
import arrow from "../../assets/dark-arrow.png"

const Banner = () => {
  return (
    <div className='banner container'>
        <div className="banner-text">
            <h1 className='heading'>We Ensure better education for a better world</h1>
            <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
            <button className='btn'>Explore More <img src={arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Banner