import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner from '../banner.png'
import { BrowserRouter as Router, Route, Routes,Link} from "react-router-dom";
import image1 from '../images1.jpg'
import image2 from '../images2.jpg'
import image3 from '../images3.jpg'
import image4 from '../images4.jpg'
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
      
    
    <div>
    <img src={image1} alt="" className="w-[100vw] h-[97vh]" />
    </div>
    <div className="">
    <img src={image4} alt=""className="w-[100vw] h-[97vh]" />
    </div>
    <div className="">
    <img src={image2} alt=""className="w-[100vw] h-[97vh]" />
    </div>
    <div className="">
    <img src={image3} alt=""className="w-[100vw] h-[97vh]" />
    </div>
    
    <div className="">
        <Link to="/exhibition"><img src={banner} className="w-[100vw] h-[97vh]" alt="" /></Link>
      </div>
    
    
  </Slider>
  )
}

export default Banner