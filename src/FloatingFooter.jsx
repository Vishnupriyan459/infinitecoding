import React from "react";

const FloatingFooter = () => {
  return (
    <>
    <div className="w-full h-[10rem] flex items-center gap-6 z-30">
      <div className="flex items-strech font-[400] h-6 md:h-9 ">
        <button className="bg-[#fff] rounded-xl px-2">
          <img src="plus.svg" alt="" className="w-[20px] h-[20px] md:w-[45px] md:h-[45px]"/>
        </button>
        <button className="bg-[#fff] rounded-xl text-[6px] md:text-[18px] text-[#1B238D] px-5 text-center">
          Get in touch
        </button>
      </div>
      <div className="flex items-center text-[20px] md:text-[50px] text-[#ffff]">
        <img src="pluswhite.svg" alt="Plus Icon" className="w-[25px] h-[25px] md:w-[45px] md:h-[45px]"/>
        <div>Ready to move faster?</div>

      </div>
    </div>
    
    </>
  );
};

export default FloatingFooter;
