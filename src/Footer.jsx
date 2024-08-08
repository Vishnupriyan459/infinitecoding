import React from "react";
import FloatingFooter from "./FloatingFooter";
import { FaDiamond } from "react-icons/fa6";
import { FaArrowDownLong } from "react-icons/fa6";
import "./App.css";
const Footer = () => {
  return (
    <div className="w-full rounded-t-2xl h-[55rem] bg-[#1B238D] pt-[1rem] flex flex-col justify-end gap-9 px-2 relative">
      <FloatingFooter />
      

      <div className="w-full h-3/4 bg-[#ffff] rounded-t-xl relative p-[2rem] space-y-6">
        <img
          src="Star.svg"
          alt=""
          className="hidden lg:block absolute -top-[7.5rem] left-[43%] w-[15rem] h-[15rem]"
        />
        <img src="blueLogo.svg" alt="" className="" />
        <div className="flex ">
          <form className="w-full lg:w-[65%] xl:w-[70%] space-y-7">
            <ul className="list-[#1B238D] flex items-center">
              <li className="font-[400] text-[1rem] md:text-[25px] lg:w-[30rem]">
                <span className="text-[1rem] md:text-[2rem] text-[#1B238D]">•</span>Want to
                receive Infinite Coding news and updates?
              </li>
            </ul>
            <div className="w-full md:w-[20rem] lg:w-[30rem] space-y-2">
              <input
                type="text"
                className="bg-[#000] text-[#fff] text-opacity-30 h-[34px] sm:h-[54px] sm:w-[320px]  lg:w-[437px] rounded-xl sm:rounded-2xl px-5"
                placeholder="Name"
              />
              <input
                type="tel"
                maxLength={13}
                className="bg-[#000] text-[#fff] text-opacity-30 h-[34px] sm:h-[54px] sm:w-[320px]  lg:w-[437px] rounded-xl sm:rounded-2xl px-5"
                placeholder="Phone"
              />
            </div>
            <div className="flex items-center space-x-2">
              <input type="radio" id="yes" name="news" className="h-5 w-5" />
              <label htmlFor="agree" className="">
                <span className="text-[#A4A5B2] ">I agree with the </span>
                <span className="text-[#1B238D]">privacy statement</span>
              </label>
            </div>
            <div className="flex items-stretch w-[278px] h-[35px]">
              <button className="bg-[#1B238D] rounded-xl px-2">
                <img src="pluswhite.svg" alt="Plus" />
              </button>
              <button className="bg-[#1B238D] text-white rounded-xl px-5 text-center">
                Contact us
              </button>
            </div>
          </form>
          <div className="hidden lg:block lg:w-[30%] xl:w-[30%] space-y-8">
            <div className="w-[20rem] h-full rounded-2xl bg-[#1B238D] p-4 text-[#ffff]">
              <form className="space-y-6">
                <div className="font-inter">
                  <p className="font-[500] text-[10px] leading-[14px] ">
                    Message
                  </p>
                  <h1 className="text-[28px] leading-[36px] font-[400]">
                    <span className="text-opacity-50 ">
                      Seeking for more info?
                    </span>
                    Write a message here
                  </h1>
                </div>
                <div className="space-y-3">
                  <div className="bg-[#1B238D] border border-[#ffff] border-opacity-50 rounded-2xl h-[3.5rem] w-full p-1 space-y-1 px-2 ">
                    <p className="text-white text-[12px] text-opacity-50">
                      YOUR NAME
                    </p>
                    <input
                      type="text"
                      className="bg-[#1B238D] text-[#fff] text-opacity-50 border-none w-full h-[20px] rounded-xl px-2 focus:outline-none hover:border-none"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="bg-[#1B238D] border border-[#ffff] border-opacity-50 rounded-2xl w-full p-2 space-y-1 overflow-hidden">
                    <p className="text-white text-[12px]  text-opacity-50 px-2 mb-1">
                      MESSAGE
                    </p>
                    <textarea
                      rows={3}
                      className="bg-[#1B238D] text-[#fff] text-opacity-50 border-none w-full rounded-xl px-2 py-1 focus:outline-none resize-none overflow-hidden"
                    />
                  </div>
                  <div className="flex items-strech  h-9 mt-8">
                    <button className="bg-[#fff] rounded-xl px-2">
                      <img src="plus.svg" alt="" />
                    </button>
                    <button className="bg-[#fff] rounded-xl text-[#1B238D] px-5 text-center">
                      Send the Message
                    </button>
                  </div>
                </div>
              </form>
              <p className=" text-white mt-4 text-opacity-50">Privacy</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between ">
          <div className="flex gap-4 items-center text-bg-opacity-60 text-[#6b7280]">
            <p className="flex items-center">
              © 2024 
              <FaDiamond className="w-[14px] h-[14px]" />
            </p>
            <p>Privacy Statement</p>
          </div>
          <div className="hidden lg:flex w-[3rem] h-[3rem] rounded-2xl bg-[#000] flex justify-center items-center">
            <FaArrowDownLong className="text-[#fff] -rotate-180" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
