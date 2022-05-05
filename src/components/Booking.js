import React from 'react'
import toast, { Toaster } from "react-hot-toast";
function Booking() {
  return (
    <div className="min-h-[1000px] relative  ">
      <Toaster className="" />
      <div className="top-[140px] absolute w-[75vw] mx-[12.5vw] h-[40vh] z-[0]">
        {/* <h1 className="font-bold text-[crimson] text-[40px] 2xl:text-[60px] text-center mt-[30px]">
          Booking
        </h1> */}
        <div className="w-[60vw] mx-[7.25vw] ">
          <h1 className='text-[red] font-bold text-[40px]'>Ho Chi Minh Museum</h1>
          <h2 className='font-bold text-[30px]'>Opening hour</h2>
        <p className='text-[20px] my-4'  >8:30 - 17:00 from Tuesdays through Sundays, except Mondays and Tet Holidays.</p>
        <h2 className='font-bold text-[30px]'>Entrance Tickets</h2>
        <div className="grid grid-cols-2">
          <p className='text-[20px] my-4' >Adults:</p> <p className='text-[20px] my-4 text-[red] font-bold ml-[200px]' >40.000 VND</p>
          <p className='text-[20px] my-4' >College and University students (with cards issued by Vietnamese higher education institutions only):</p> <p className='text-[20px] my-4 text-[red] font-bold ml-[200px]'>20.000 VND</p>
          <p className='text-[20px] my-4' >Children between the ages of 6 and 16:</p> <p className='text-[20px] my-4 text-[red] font-bold ml-[200px]'> 10.000 VND</p>
          <p className='text-[20px] my-4' >Disabled people and children under 6 years old</p> <p className='text-[20px] my-4 text-[red] font-bold ml-[200px]'>Free</p>
        </div>
        <h2 className='font-bold text-[20px]'>To buy tickets to the Museum, please contact the phone number: 024 - 3755 8688. Sincerely thank you!</h2>
        </div>
        
      </div>
      
    </div>
  )
}

export default Booking