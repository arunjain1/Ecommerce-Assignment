import React from 'react'
import "./Styling/Banner.css";
import bannerImg from "../asset/banner.jpg"
function Banner(){
    return (
        <div className='banner'>
         <img 
         className='banner_poster'
         src={bannerImg}/>
        </div>
    );
}

export default Banner