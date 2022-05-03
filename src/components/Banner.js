import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
      <img src="https://baotanghochiminh.vn/pic/banner/Anh2-chup_637238721338045237.jpg" alt="" className="w-[100vw] h-[97vh]" />
    </div>
    <div>
    <img src="https://baotanghochiminh.vn/pic/banner/demo-anh_636838400585939931.jpg" alt="" className="w-[100vw] h-[97vh]" />
    </div>
    <div>
    <img src="https://baotanghochiminh.vn/pic/banner/anhb_636838400314811455.jpg" alt="" className="w-[100vw] h-[97vh]" />
    </div>
    <div>
    <img src="https://baotanghochiminh.vn/pic/banner/636550803_636589817116186361.jpg" alt="" className="w-[100vw] h-[97vh]" />
    </div>
  </Slider>
  )
}

export default Banner