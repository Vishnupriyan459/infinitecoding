import React from "react";
import ChatTrigger from "./ChatTrigger";
import ChatTrigger2 from "./ChatTrigger2";

const Testimonials = () => {
  return (
    <div className="w-[100%] h-[671px] bg-[#F3EFEF] rounded-3xl p-3 \">
      <div className="w-[95%] h-full mx-auto flex">
        <div className="flex justify-center space-y-[5rem] flex-col w-[30%]">
          <ul className="list-[#1B238D] flex items-center">
            <li className="font-[800] text-[16px] text-[#1B238D]">
              <span className="text-[2rem]">•</span> Testimonial
            </li>
          </ul>
          <div className="text-[#1B238D]">
            <h1 className="font-[300] text-[50px] leading-[55px] w-[15rem]">Don't just take our word for it</h1>
            <p className="font-[400] text-[16px] leading-[23px]">Read what our clients have to say</p>
          </div>
          <div className="flex items-stretch w-[278px] h-[35px]">
            <button className="bg-[#1B238D] rounded-xl px-2">
              <img src="pluswhite.svg" alt="Plus" />
            </button>
            <button className="bg-[#1B238D] text-white rounded-xl px-5 text-center">
              Scroll for more
            </button>
          </div>
        </div>
        <div className="relative w-[60%] flex items-center overflow-hidden  ">
          
            <ChatTrigger />
            <ChatTrigger2 />
          
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
