import React from "react";
import ChatTrigger from "./ChatTrigger";

const Testamonials = () => {
  return (
    <div className="w-[100%] h-[671px] bg-[#F3EFEF] rounded-3xl p-3">
      <div className="w-[95%] h-full mx-auto grid grid-flow-col justify-stretch">
        <div className="flex justify-around  flex-col">
          <ul className=" list-[#1B238D] flex items-center">
            <li className="font-[800] text-[16px] text-[#1B238D] ">
              <span className="text-[2rem] ">•</span>Testamonial
            </li>
          </ul>
          <div>
            <h1>Don't just take our word for it</h1>
            <p>Read what our clients have to say</p>
          </div>
          <div className="flex items-strech w-[278px]  h-[35px]">
          <button className="bg-[#1B238D] rounded-xl px-2 ">
            <img src="pluswhite.svg" alt="" />
            
          </button>
          <button className="bg-[#1B238D] text-[#ffff] rounded-xl text-[#1B238D] px-5 text-center">
            Scroll for more
          </button>
        </div>
        </div>
        <div className="grid grid-flow-col justify-strech">
          <ChatTrigger />
          <ChatTrigger />
        </div>
        
        
      </div>
    </div>
  );
};

export default Testamonials;
