import React from "react";

const Service = () => {
  return (
    <div className="w-[90%] mx-auto  ">
      <div className="flex w-full">
        <ul className="list-disc list-inside w-1/2">
          <li className="font-[800] text-[16px] text-[#1B238D] leading-[18px]">
            <span className="text-[#000]">Services</span>
          </li>
        </ul>
        <ul className="list-disc list-inside grid grid-cols-3 w-1/2">
            <li>Live code session</li>
            <li>80 hrs class</li>
            <li>Project review</li>
            <li>Problem solving</li>
        </ul>
      </div>
      <div className="flex gap-5 -mt-3">
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
