import React from "react";

const Banner = () => {
  return (
    <div className="w-[90%] mx-auto space-y-5 my-5">
      <ul className="list-disc list-inside">
        <li className="font-[800] text-[16px] text-[#1B238D] leading-[18px]">
          <span className="text-[#000]">Hybrid</span>
        </li>
      </ul>
      <div className="w-[90%] text-[72px] font-[300] leading-[77px]">
        Master C++ for a successful software development career, with hands-on
        learning from basic to advanced concepts.
      </div>
      <div className="bg-Infobanner w-full h-[500px] relative">
        <div className="absolute top-0 left-0  ">
          <div className="relative">
            <ul className="list-disc list-inside w-[184px] h-[67.19px] bg-[#F3EFEF] rounded-br-2xl flex justify-center items-center">
              <li className="text-[16px] text-[#1B238D] leading-[18px] bg-[#ffff] rounded-xl flex justify-center items-center w-3/4 mx-auto py-1">
                <span className="text-[#000]">Period 7 weeks</span>
              </li>
            </ul>
            <img src="/info/clippath.svg" alt="" className="absolute -top-[0.3rem] -right-[1.9rem]"/>
            <img src="/info/clippath.svg" alt="" className="absolute -bottom-[1.9rem] -left-[0.3rem]"/>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Banner;
