import React from "react";
import toast, { Toaster } from "react-hot-toast";
import thumbnail from "../thumbnail.png";
function About() {
  return (
    <div className="min-h-[1140px]">
      <Toaster className="" />
      <div className="  w-[75vw] mx-[12.5vw] h-[40vh] ">
        <div className="h-[120px]"></div>
        <h1 className="mt-[] font-bold text-[crimson] text-[40px] 2xl:text-[60px] text-center ">
          About
        </h1>
        <div className="mb-[20px] flex flex-col w-[60vw] ml-[7.25vw]">
          <div className="flex my-[20px] border-2 h-[200px] rounded-[1rem] box-shadow">
            <img src={thumbnail} className="w-[200px] h-[130px] mr-[300px] rounded-[1rem] ml-[30px] border-[grey] mt-[35px]" alt="" />
            <div className="flex flex-col mt-[35px]">
              <h1 className="font-bold md:text-[12px] xl:text-[20px]">Mission and Vision</h1>
              <span className="opacity-75">Posted 5/5/2022</span>
              <button className="button-5 ">Details</button>
            </div>
          </div>
          <div className="flex my-[20px] border-2 h-[200px] rounded-[1rem] box-shadow">
            <img src={thumbnail} className="w-[200px] h-[130px] mr-[300px] rounded-[1rem] ml-[30px] border-[grey] mt-[35px]" alt="" />
            <div className="flex flex-col mt-[35px]">
              <h1 className="font-bold md:text-[12px] xl:text-[20px]">History and Development</h1>
              <span className="opacity-75">Posted 5/5/2022</span>
           <button className="button-5 ">Details</button>
            </div>
          </div>
          <div className="flex my-[20px] border-2 h-[200px] rounded-[1rem] box-shadow">
            <img src={thumbnail} className="w-[200px] h-[130px] mr-[300px] rounded-[1rem] ml-[30px] border-[grey] mt-[35px]" alt="" />
            <div className="flex flex-col mt-[35px]">
              <h1 className="font-bold md:text-[12px] xl:text-[20px]">
                Greeting froflex flex-colm Ho Chi Minh Museum's Director
              </h1>
              <span className="opacity-75">Posted 5/5/2022</span>
              <button className="button-5  ">Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
