import React from 'react'
import toast, { Toaster } from "react-hot-toast";
function Booking() {
  return (
    <div className="min-h-[100vh] relative  ">
      <Toaster className="" />
      <div className="top-[120px] 2xl:top-[250px] absolute w-[75vw] mx-[12.5vw] h-[40vh] z-[0]">
        <h1 className="font-bold text-[crimson] text-[40px] 2xl:text-[60px] text-center mt-[30px]">
          Booking
        </h1>
        
      </div>
    </div>
  )
}

export default Booking