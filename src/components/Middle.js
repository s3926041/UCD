import React from "react";
import thumbnail from "../thumbnail.png";
import toast, { Toaster } from 'react-hot-toast';

function Middle() {
    const err = () => toast.error('This section is currently not available');
  return (
    <div className="w-[75vw]">
      <div className="flex w-[75vw] mx-[12.5vw] ">
        <div className=" w-[24vw]  ">
          <h1 className="font-bold text-[crimson] text-[30px] cursor-pointer" onClick={err}>News</h1>
          <div className="first">
            <div className="flex mt-6 mb-11">
              <img src={thumbnail} className="w-[30%]" alt="" />
              <h3 className="ml-[4px] text-[12px] xl:text-[16px]  font-[900]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h3>
            </div>
            <div className="flex mt-6 mb-11">
              {" "}
              <img src={thumbnail} className="w-[30%]" alt="" />
              <h3 className="ml-[4px] text-[12px] xl:text-[16px]  font-[900]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h3>
            </div>
            <div className="flex mt-6 mb-11">
              {" "}
              <img src={thumbnail} className="w-[30%]" alt="" />
              <h3 className="ml-[4px] text-[12px] xl:text-[16px]  font-[900]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h3>
            </div>
            <div className="flex mt-6 mb-6">
              {" "}
              <img src={thumbnail} className="w-[30%]" alt="" />
              <h3 className="ml-[4px] text-[12px] xl:text-[16px]  font-[900]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h3>
            </div>
          </div>
          <a  className="text-[red] font-bold cursor-pointer"onClick={err}>
            Findmore...
          </a>
        </div>
        <div className="w-[24vw] ml-[1vw] ">
          <h1 className="font-bold text-[crimson] text-[30px] cursor-pointer" onClick={err}>Education</h1>
          <div className="first">
            <div className="flex mt-6 mb-11">
              {" "}
              <img src={thumbnail} className="w-[30%]" alt="" />
              <h3 className="ml-[4px] text-[12px] xl:text-[16px]  font-[900]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h3>
            </div>
            <div className="flex mt-6 mb-11">
              {" "}
              <img src={thumbnail} className="w-[30%]" alt="" />
              <h3 className="ml-[4px] text-[12px] xl:text-[16px]  font-[900]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h3>
            </div>
            <div className="flex mt-6 mb-11">
              {" "}
              <img src={thumbnail} className="w-[30%]" alt="" />
              <h3 className="ml-[4px] text-[12px] xl:text-[16px]  font-[900]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h3>
            </div>
            <div className="flex mt-6 mb-6">
              {" "}
              <img src={thumbnail} className="w-[30%]" alt="" />
              <h3 className="ml-[4px] text-[12px] xl:text-[16px]  font-[900]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h3>
            </div>
          </div>
          <a  className="text-[red] font-bold cursor-pointer"onClick={err}>
            Findmore...
          </a>
        </div>
        <div className="w-[24vw] ml-[1vw] ">
          <h1 className="font-bold text-[crimson] text-[30px] cursor-pointer" onClick={err}>Research</h1>
          <div className="">
            <div className="flex mt-6 mb-11">
              {" "}
              <img src={thumbnail} className="w-[30%]" alt="" />
              <h3 className="ml-[4px] text-[12px] xl:text-[16px]  font-[900]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h3>
            </div>
            <div className="flex mt-6 mb-11">
              {" "}
              <img src={thumbnail} className="w-[30%]" alt="" />
              <h3 className="ml-[4px] text-[12px] xl:text-[16px]  font-[900]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h3>
            </div>
            <div className="flex mt-6 mb-11">
              {" "}
              <img src={thumbnail} className="w-[30%]" alt="" />
              <h3 className="ml-[4px] text-[12px] xl:text-[16px]  font-[900]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h3>
            </div>
            <div className="flex mt-6 mb-6">
              {" "}
              <img src={thumbnail} className="w-[30%]" alt="" />
              <h3 className="ml-[4px] text-[12px] xl:text-[16px]  font-[900]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h3>
            </div>
          </div>
          <a  className="text-[red] font-bold cursor-pointer"onClick={err}>
            Findmore...
          </a>
        </div>
      </div>
      <div className="mb-[80px] mt-[60px] flex  ml-[12.5vw] w-[75vw]">
        <div className="grid grid-cols-3 w-[60vw]">
          <a href='/UCD/contact' className="border-2 mx-4 my-4 font-bold text-[12px] xl:text-[20px] grid place-items-center rounded-[1rem] bg-transparent translate-y-[20px] hover:translate-y-1 duration-200 box-shadow cursor-pointer text-center ">
            Contact
          </a>
          <div onClick={err} className="border-2 mx-4 my-4 font-bold text-[12px] xl:text-[20px] grid place-items-center rounded-[1rem] bg-transparent translate-y-[20px] hover:translate-y-1 duration-200 box-shadow cursor-pointer text-center ">
            Museum System
          </div>
          <div onClick={err} className="border-2 mx-4 my-4 font-bold text-[12px] xl:text-[20px] grid place-items-center rounded-[1rem] bg-transparent translate-y-[20px] hover:translate-y-1 duration-200 box-shadow cursor-pointer text-center ">
            Volunteer Club
          </div>
          <div onClick={err} className="border-2 mx-4 my-4 font-bold text-[12px] xl:text-[20px] grid place-items-center rounded-[1rem] bg-transparent translate-y-[20px] hover:translate-y-1 duration-200 box-shadow cursor-pointer text-center ">
          Audio Guide
          </div>
          <div onClick={err} className="border-2 mx-4 my-4 font-bold text-[12px] xl:text-[20px] grid place-items-center rounded-[1rem] bg-transparent translate-y-[20px] hover:translate-y-1 duration-200 box-shadow  cursor-pointer text-center">
            Museum Services
          </div>
          <div onClick={err} className="border-2 mx-4 my-4 font-bold text-[12px] xl:text-[20px] grid place-items-center rounded-[1rem] bg-transparent translate-y-[20px] hover:translate-y-1 duration-200 box-shadow cursor-pointer text-center">
            Museum Shop
          </div>
        </div>
        <iframe
          width="373"
          height="210"
          src="https://www.youtube.com/embed/GkRnyQTE-ZI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        className="ml-[4vw] rounded-[1rem] translate-y-[20px] box-shadow"
          allowfullscreen
        ></iframe>
      </div>
      <Toaster
      position="top-right"/>
    </div>
  );
}

export default Middle;
