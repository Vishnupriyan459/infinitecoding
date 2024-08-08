import React from "react";
import { IoMdArrowForward } from "react-icons/io";
import { useLocation } from "react-router-dom";

const Coursechild = ({ course }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="w-[235px] h-[448px] md:w-[350px] md:h-[610px] lg:w-[430.33px] lg:h-[744.41px] flex-shrink-0 relative group">
      <div
        className={`absolute -top-1 -right-1 rounded-bl-xl ${
          isHome ? "bg-[#1B238D]" : "bg-[#F3EFEF]"
        } w-[62px] h-[42px] flex justify-center items-center z-20`}
      >
        <div className="relative">
          <img
            src="Course/Corner.svg"
            alt="Corner Decoration"
            className="absolute -top-[0.7rem] -left-[2.4rem]"
          />
          <p className="bg-black text-[#fff] rounded-xl px-1 mx-auto font-[400] text-[14px] leading-[20px] my-1/2">
            {course.mode}
          </p>
          <img
            src="Course/Corner.svg"
            alt="Corner Decoration"
            className="absolute -bottom-[2.6rem] -right-[0.49rem]"
          />
        </div>
      </div>

      <div className={`h-[347px]  md:h-[522px] lg:h-[544.37px]  rounded-2xl ${course.bg} relative`}>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 p-4 bg-[#0f172a] bg-opacity-60 text-[#fff] rounded-xl backdrop-blur-lg z-10 w-[90%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="block font-[400] text-[12px] leading[14px] md:text-[18px] md:leading-[20px] lg:text-[24px] lg:leading-[27px]">
            <span className="block font-semibold text-[12px] md:text-[18px] lg:text-[24px] mb-2">Tools</span>
            <ul className="pl-5 flex gap-3 items-center">
              {course.tools.length > 0 ? (
                course.tools.map((tool, index) => (
                  <li key={index} className="text-[300] px-2 md:px-4 md:py-1 rounded-2xl bg-[#000] text-[6px] leading[10px] md:text-[12px] md:leading-[14px] lg:text-[18px] lg:leading-[20px]">
                    {tool}
                  </li>
                ))
              ) : (
                <li className="text-sm px-4 py-1 rounded-2xl bg-[#000] text-[18px] leading-[20px]">
                  No tools listed
                </li>
              )}
            </ul>

            <div className="flex justify-between mt-4">
              <div>
                <div className="block font-[400px] text-sm md:text-md lg:text-lg md:mb-2">Duration</div>
                <p className="text-[6px] leading[10px] md:text-[12px] md:leading-[14px] lg:text-[18px] lg:leading-[20px]  md:px-4 md:py-1 rounded-2xl bg-[#000] text-center">
                  {course.duration} Weeks
                </p>
              </div>
              <div className="bg-[#1B238D] rounded-xl w-[100px] md:w-[168px] md:py-2 self-end flex justify-center items-center cursor-pointer text-[9px] md:text-[18px] md:leading-[18px]">
                Learn More <IoMdArrowForward className="-rotate-45" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[100.4px] p-4">
        <h1 className={`font-[400] text-[12px] leading-[14px] md:text-[18px] md:leading-[21px] lg:text-[24px] lg:leading-[27px] ${isHome ? "text-[#fff]" : "text-[#000]"}`}>
          {course.detail}
        </h1>
        <p className={`font-[400] text-[14px] leading-[20px] ${isHome ? "text-[#F3EFEF] text-opacity-60" : "text-black"}`}>
          {course.title}
        </p>
      </div>
    </div>
  );
};

Coursechild.defaultProps = {
  course: {
    mode: "online",
    detail: "A comprehensive bootcamp designed to take beginners to advanced Java developers.",
    title: "Java Bootcamp",
    bg: "bg-java",
    tools: [],
    duration: "8"
  }
};

export default Coursechild;
