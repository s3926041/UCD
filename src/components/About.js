import React from 'react'
import toast, { Toaster } from 'react-hot-toast';

function About() {
  return (
    <div className=" h-[100vh] relative ">
      <Toaster className="" />
      <div className="top-[120px] absolute w-[75vw] mx-[12.5vw] h-full">
        <h1 className="font-bold text-[crimson] text-[40px] text-center mt-[30px]">
          About
        </h1>
        <div className="">
            <div className=""><img src="" alt="" /><h2></h2></div>
            <div className=""><img src="" alt="" /><h2></h2></div>
            <div className=""><img src="" alt="" /><h2></h2></div>
        </div>
        </div>
    </div>
  )
}

export default About