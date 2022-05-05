import React from 'react'
import { useState } from "react";
import logo from "../logo.png"
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import toast, { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Route, Routes,Link} from "react-router-dom";

function Navbar() {
  const err = () => toast.error('This section is currently not available');
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
      
  return (
    <div className="">
         <div className="busHour h-[45px] fixed bg-[grey] w-full leading-3 flex justify-center items-center  opacity-[0.95] z-[20]">
          <p className="ml-[50px]">
          <span className="text-[18px] text-center font-bold">Business Hour:</span>
<br />
          <span className="text-[13px]">Tuesday, Wednesday, Thursday, Saturday, Sunday: From <span className="font-bold">8h00 - 11h30AM</span> . Monday and Friday closed</span>
          </p>
          <Link to="/booking"><button className="ml-[10px] button-23" role="button">BOOK TICKET</button></Link>
          

        </div>
        <div
          className={
            "navbar fixed h-[70px] mt-[40px] w-full bg-[#82173b] flex-col opacity-[0.95] " +
            (searchClicked && "active")
          }
        >
          <div className="links h-[70px] text-white flex items-center justify-center  ">
            <Link to='/'><img src={logo} alt="" className="h-[50px] mx-[20px]" /></Link>
            <Link to='/about'
              className="link mx-[20px] font-bold hover:opacity-75 ease-linear duration-300 text-[20px]"
            >
              About us
            </Link>
            <Link to='/exhibition'
              
             
              className="link mx-[20px] font-bold hover:opacity-75 ease-linear duration-300 text-[20px] cursor-pointer"
            >
              Exhibition
            </Link>
            <a
              onClick={err}
             
              className="link mx-[20px] font-bold hover:opacity-75 ease-linear duration-300 text-[20px] cursor-pointer"
            >
              3D Tour
            </a>
            
            <a
              onClick={err}
             
              className="link mx-[20px] font-bold hover:opacity-75 ease-linear duration-300 text-[20px] cursor-pointer"
            >
              Library
            </a>
            <a
              onClick={err}
             
              className="link mx-[20px] font-bold hover:opacity-75 ease-linear duration-300 text-[20px] cursor-pointer"
            >
              Supports
            </a>
            
            <SearchIcon
              className="s cursor-pointer hover:opacity-75 duration-300 ease-linear text-[20px] "
              onClick={() => {
                setSearchClicked(!searchClicked);
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