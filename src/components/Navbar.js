import React from 'react'
import { useState } from "react";
import logo from "../logo.png"
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";

function Navbar() {
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
      const [searchClicked, setSearchClicked] = useState(false);
      const aleart = () =>{
        alert('This section does not working at the moment!')
      }
  return (
    <div className="">
         <div className="busHour h-[40px] fixed bg-[grey] w-full leading-3 flex justify-center items-center z-[99] opacity-[0.95]">
          <p className="">
          <span className="text-[14px] text-center font-bold">Business Hour:</span>
<br />
          <span className="text-[11px]">Tuesday, Wednesday, Thursday, Saturday, Sunday: From <span className="font-bold">8h00 - 11h30AM</span> . Monday and Friday closed</span>
          </p>
          <button onClick={aleart} className="mx-[50px] button-23" role="button">BOOK TICKET</button>
          

        </div>
        <div
          className={
            "navbar fixed h-[70px] mt-[40px] w-full bg-[#82173b] flex-col opacity-75 " +
            (searchClicked && "active")
          }
        >
          <div className="links h-[70px] text-white flex items-center justify-center  ">
            <a href="."><img src={logo} alt="" className="h-[50px] mx-[20px]" /></a>
            <a
              onClick={aleart}
              href="#"
              className="link mx-[20px] font-bold hover:opacity-75 ease-linear duration-300"
            >
              About us
            </a>
            <a
              onClick={aleart}
              href="#"
              className="link mx-[20px] font-bold hover:opacity-75 ease-linear duration-300"
            >
              Exhibition
            </a>
            <a
              onClick={aleart}
              href="#"
              className="link mx-[20px] font-bold hover:opacity-75 ease-linear duration-300"
            >
              3D Tour
            </a>
            
            <a
              onClick={aleart}
              href="#"
              className="link mx-[20px] font-bold hover:opacity-75 ease-linear duration-300"
            >
              Library
            </a>
            <a
              onClick={aleart}
              href="#"
              className="link mx-[20px] font-bold hover:opacity-75 ease-linear duration-300"
            >
              Supports
            </a>
            <a
              onClick={aleart}
              href="#"
              className="link mx-[20px] font-bold hover:opacity-75 ease-linear duration-300"
            >
              Contact
            </a>
            <SearchIcon
              className="s cursor-pointer hover:opacity-75 duration-300 ease-linear"
              onClick={() => {
                setSearchClicked(true);
              }}
            ></SearchIcon>
          </div>
          <div
            className={
              "Search mt-[6px] flex items-center justify-center w-full absolute opacity-[1] "
            }
          >
            <input
              type="text"
              placeholder="Search something..."
              className="w-[740px] rounded-lg border-black border-2 h-[30px] "
            />
            <CloseIcon
              className="hover:scale-[1.2] duration-300 ease-linear cursor-pointer"
              onClick={() => {
                setSearchClicked(false);
              }}
            ></CloseIcon>

          </div>
        </div>
    </div>
  )
}

export default Navbar