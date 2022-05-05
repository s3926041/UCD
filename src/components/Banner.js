import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner from '../banner.png'
import { BrowserRouter as Router, Route, Routes,Link} from "react-router-dom";
function Banner() {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        slidesToShow: 1,
        slidesToScroll: 1,
       
      };
  return (
    <Slider className="" {...settings}>
      <div className="">
        <Link to="/exhibition"><img src={banner} className="w-[100vw] h-[97vh]" alt="" /></Link>
      </div>
    
    <div>
    <img src="https://baotanghochiminh.vn/pic/banner/demo-anh_636838400585939931.jpg" alt="" className="w-[100vw] h-[97vh]" />
    </div>
    
    
    
  </Slider>
  )
}

export default Banner