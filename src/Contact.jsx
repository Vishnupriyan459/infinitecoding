import React from "react";

const Contact = () => {
  return (
    <div className="flex mx-auto w-[90%] gap-5 justify-between my-[5rem] ">
      <div className="relative">
        <img src="Vector.svg" alt="" />
        <img src="founder.svg" alt=""  className="absolute top-0 -right-5 w-[15rem] h-[20rem]"/>
        <div className="text-[#fff] absolute top-[59%] left-5 font-[400] ">
            <h1 className="text-[25px] leading-[30px] w-1/2">Alex Thompson</h1>
            <p className="text-[14px] leading-[20px]">Founder & CTO</p>
        </div>

      </div>
      <div className="ms-[15rem] flex flex-col gap-3 justify-end  ">
        <ul className=" list-[#1B238D] flex items-center">
          <li className="font-[800] text-[16px]">
            <span className="text-[#1B238D] text-[2rem] ">•</span>Contact Us
          </li>
        </ul>
        <h1 className="font-[300] leading-[55px] text-[50px]">
          Want to know more about our way of working?
        </h1>
        <div className="flex items-strech w-[278px]  h-[35px]">
          <button className="bg-[#1B238D] rounded-xl px-2 ">
            <img src="pluswhite.svg" alt="" />
            
          </button>
          <button className="bg-[#1B238D] text-[#ffff] rounded-xl text-[#1B238D] px-5 text-center">
            Contact Owner name
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
