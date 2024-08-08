import React from "react";

const Banner = () => {
  return (
    <div className="w-[90%] mx-auto space-y-5 my-5">
      <ul className="list-disc list-inside">
        <li className="font-[800] text-[#1B238D] text-[10px] leading-[12px] md:text-[12px] md:leading-[14px] lg:text-[14px] lg:leading-[16px] xl:text-[16px] xl:leading-[18px]">
          <span className="text-[#000]">Hybrid</span>
        </li>
      </ul>
      <div className="w-full md:w-[90%] font-[300] text-[40px] leading-[42px] md:text-[52px] md:leading-[54px] lg:text-[60px] lg:leading-[64px] xl:text-[72px] xl:leading-[77px]">
        Master C++ for a successful software development career, with hands-on
        learning from basic to advanced concepts.
      </div>
      <div className="bg-Infobanner w-full h-[200px] md:h-[300px] lg:h-[400px] xl:h-[500px] relative">
        <div className="absolute top-0 left-0  ">
          <div className="relative">
            <ul className="list-disc list-inside w-[124px] h-[46px] md:w-[164px] md:h-[56px] lg:w-[184px] lg:h-[67.19px] bg-[#F3EFEF] rounded-br-2xl flex justify-center items-center">
              <li className="text-[#1B238D] text-[12px] leading-[14px] md:text-[14px] md:leading-[16px] lg:text-[16px]  lg:leading-[18px] bg-[#ffff] rounded-xl flex justify-center items-center w-3/4 mx-auto py-1">
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
