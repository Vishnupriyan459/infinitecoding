import React from 'react';
import { IoMdArrowForward } from "react-icons/io";

const Services = () => {
  return (
    <div className="w-full h-[80vh] md:h-[90vh] lg:h-[110vh] relative mt-10 ">
      <div className="w-[209px] h-[44.4px] absolute -top-[2.75em] left-[1rem] flex content-end items-end">
        <div className="w-[15px] h-[15px] md:w-[42px] md:h-[42px] bg-[#ffff]">
          <div className="w-full h-full bg-[#1B238D] rounded-br-md md:rounded-br-2xl"></div>
        </div>
        <div className="w-[45px] h-[16px] md:w-[125px] md:h-[44.4px] bg-[#fff] flex justify-center items-center rounded-t-md md:rounded-t-2xl">
          <ul className="list-disc list-inside">
            <li className="font-[800] text-[6px] leading-[7px] md:text-[16px] text-[#1B238D] md:leading-[18px]">
              <span className="text-[#6B6B68]">Services</span>
            </li>
          </ul>
        </div>
        <div className="w-[15px] h-[15px] md:w-[42px] md:h-[42px] bg-[#ffff]">
          <div className="w-full h-full bg-[#1B238D] rounded-bl-md md:rounded-bl-2xl"></div>
        </div>
      </div>
      <div className="w-full h-[60px] md:h-[137.46px] flex">
        <div className="w-[70%] bg-[#1B238D] ">
          <div className="bg-[#ffff] w-full h-full rounded-tr-2xl"></div>
        </div>
        <div className="w-[30%] bg-[#ffff]">
          <div className="bg-[#1B238D] w-full h-full rounded-b-2xl"></div>
        </div>
      </div>
      <div className=" w-[90%] max-md:left-[6%] mt-[4rem] md:mt-[6.7rem] lg:mt-[8rem] md:left-[5%] absolute -top-9 ">
        <h1 className="w-[65%] md:w-[70%] xl:w-[65%] font-[300] text-[15px] leading-[15.7px] md:text-[30px] md:leading-[27px] lg:text-[50.4px] lg:leading-[55.44px]">
          Master coding with expert-led courses, develop real-world projects, and leverage automation tools to streamline development processes.
        </h1>
        <div className="py-5 flex gap-5 justify-center items-center flex-col md:flex-row">
          <div className="h-[108px] w-full md:w-[515px] md:h-[204.92px] rounded-xl md:rounded-3xl border border-e-black flex justify-center items-center">
            <div className="w-[90%] h-[80%] m-3 space-y-4">
              <h1 className="font-[300] text-[24px] leading-[17px] md:text-[33px] md:leading-[34px] lg:text-[43px] lg:leading-[50.4px]">
                Learn
              </h1>
              <div className="flex flex-col lg:flex-row md:gap-5">
                <div className="font-[400] text-[12px] leading-[13px] md:text-[14px] md:leading-[14.5px] lg:text-[16px] lg:leading-[23px]">
                  Master coding with our expert-led courses that put practical skills at the core of the learning process.
                </div>
                <IoMdArrowForward className="self-end cursor-pointer text-[10px] md:text-[30px] lg:text-[70px] opacity-70" />
              </div>
            </div>
          </div>
          <div className="h-[108px] w-full md:w-[515px] md:h-[204.92px] rounded-xl md:rounded-3xl border border-e-black flex justify-center items-center">
            <div className="w-[90%] h-[80%] m-3 space-y-4">
              <h1 className="font-[300] text-[24px] leading-[17px] md:text-[33px] md:leading-[34px] lg:text-[43px] lg:leading-[50.4px]">
                Build
              </h1>
              <div className="flex flex-col lg:flex-row md:gap-5">
                <div className="font-[400] text-[12px] leading-[13px] md:text-[14px] md:leading-[14.5px] lg:text-[16px] lg:leading-[23px]">
                  Develop real-world projects that you can manage and showcase.
                </div>
                <IoMdArrowForward className="self-end cursor-pointer text-[10px] md:text-[30px] lg:text-[70px] opacity-70" />
              </div>
            </div>
          </div>
          <div className="h-[108px] w-full md:w-[515px] md:h-[204.92px] rounded-xl md:rounded-3xl border border-e-black flex justify-center items-center">
            <div className="w-[90%] h-[80%] m-3 space-y-4">
              <h1 className="font-[300] text-[24px] leading-[17px] md:text-[33px] md:leading-[34px] lg:text-[43px] lg:leading-[50.4px]">
                Automate
              </h1>
              <div className="flex flex-col lg:flex-row md:gap-5">
                <div className="font-[400] text-[12px] leading-[13px] md:text-[14px] md:leading-[14.5px] lg:text-[16px] lg:leading-[23px]">
                  Understand and leverage automation tools to streamline your development processes.
                </div>
                <IoMdArrowForward className="self-end cursor-pointer text-[10px] md:text-[30px] lg:text-[70px] opacity-70" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
