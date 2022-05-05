import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import trip from "../trip.png";
import toast,{Toaster} from "react-hot-toast";
function Footer() {
  const success = () => toast.success('Submitted')
  return (
    <footer className="h-[200px] w-full bg-[#c2c1c0] ">
      <div className="flex w-[75vw] h-full mx-[12.5vw] ">
        <div className="information w-[25vw] p-20px mt-[20px]">
          <h1 className="font-bold text-[20px]">Ho Chi Minh Museum</h1>
          <p className="mt-3"><span className="">19 Ngoc Ha, Ba Dinh, Hanoi</span> <br />
          <span>024 3846 37 57, Fax: 024 3846 37 57</span> <br />
          <span>truyenthong.bthcm@gmail.com</span> <br />
          <span>www.baotanghochiminh.vn</span></p>
          
        </div>
        <div className="email w-[25vw] p-20px mt-[20px] flex flex-col">
          <h1 className="font-bold text-[20px]">SIGN UP FOR THE NEWSLETTER</h1>
          <input
            type="text"
            placeholder="Enter your email"
            className="w-[300px] rounded-md mt-3 "
          />
          <button
            className="button-5 sew"
            role="button"
            onClick={success}
          >
            Submit
          </button>
        </div>
        <div className="socialNet w-[25vw] p-20px mt-[20px]">
          <h1 className="font-bold text-[20px] ml-10">SOCIAL NETWORKS</h1>
          <div className="ml-10 mt-3 grid grid-cols-2 ">
            <a href='https://www.facebook.com/HoChiMinhMuseum/?eid=ARAgzRJDdsK5aGH3zpvHZ2_0JORnn2sbN4t-msGliQ6wTahttuYLwgKXba5vxQiqnjEhDkCjcCYD0P8p&hc_ref=ARTGYAJsy3kZScK3MJej868q9Gf0euBzPVsIFU2-6gIaR3O28jMEbbCE7zwu2op49QE&fref=nf&__xts__[0]=68.ARA4qCwSqtpJw-8N-f8vqiKmTIb_FQ64R4yuLWpOPiKdV2BQGIXTtotUbdj5KL8Iuwk1epgOjlIYoHA3niETyEI2zjy4TbBTbWV0XKbshancf9XN3HR-6DGbHuLascis9m8yTLVIg1xgHZgWEUfwLSRVLDJ54YoJzNBUkXDfnjI3SNgbjzrwlh1XSS6mRF_R8aQhCJVNCRIv5QOMySiWs0nrN0k2pGCtnWGIm9KvK2vzJV-BIaUnTXGA7x72TiV9Xy8-mR4-jd8OEefC-hWgtehpho6HKdzqxlAFauYxCEaziXmj13nkFIwxOCc9NW0ud4Mmy38i4qFL_FG_pDdoxshBK3wewuNUXsiu_r6m'className="flex items-center mb-4">
              <FacebookIcon className="w-[30px] h-[30px] "></FacebookIcon>
              <h2 className="text-[15px] ml-2">Facebook</h2>
            </a>
            <a href='https://www.youtube.com/channel/UCdOEYAP9PDDKfbeOyZaRGJw/videos' className="flex items-center mb-4">
              <YouTubeIcon className="w-[30px] h-[30px] "></YouTubeIcon>
              <h2 className="text-[15px] ml-2">YouTube</h2>
            </a>
            <a href='' className="flex items-center">
              <InstagramIcon className="w-[30px] h-[30px]"></InstagramIcon>
              <h2 className="text-[15px] ml-2">Instagram</h2>
            </a>
            <a href='https://www.tripadvisor.com.vn/Attraction_Review-g293924-d311066-Reviews-Ho_Chi_Minh_Museum-Hanoi.html' className="flex items-center">
              <img src={trip} alt="" className="w-[30px] h-[30px]" />
              <h2 className="text-[15px] ml-2">Tripadvisor</h2>
            </a>
          </div>
        </div>
      </div>
      <div className="bottom-0 h-[40px] bg-[crimson] w-full">
        <div className="w-[75vw] mx-[12.5vw] grid place-items-end items-center"></div>
      </div>
    </footer>
  );
}

export default Footer;
