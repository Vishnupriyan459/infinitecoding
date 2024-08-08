import React from "react";

const Service = () => {
  return (
    <div className="w-[90%] mx-auto  ">
      <div className="lg:flex w-full">
        <ul className="list-disc list-inside lg:w-1/2">
          <li className="font-[800] text-[#1B238D] text-[12px] leading-[10px] md:text-[16px]  md:leading-[18px]">
            <span className="text-[#000]">Services</span>
          </li>
        </ul>
        <ul className="list-disc list-inside text-[10px] leading-[14px] md:text-[14px] md:leading-[16px] lg:leading-[20px] grid grid-cols-2 max-lg:py-2 lg:grid-cols-3 lg:w-1/2">
            <li>Live code session</li>
            <li>80 hrs class</li>
            <li>Project review</li>
            <li>Problem solving</li>
        </ul>
      </div>
      <div className="flex gap-5 lg:-mt-3">
            <div className="px-2 py-1 bg-[#fff] rounded-2xl">
                C++
            </div>
            <div className="px-2 py-1 bg-[#fff] rounded-2xl">
                Test
            </div>
            <div className="px-2 py-1 bg-[#fff] rounded-2xl">
                Live Code
            </div>
      </div>
    </div>
  );
};

export default Service;
