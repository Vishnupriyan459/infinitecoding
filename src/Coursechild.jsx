import React from "react";
import { IoMdArrowForward } from "react-icons/io";

const Coursechild = ({ course }) => {
  return (
    <div className="w-[430.33px] h-[744.41px] flex-shrink-0 relative group">
      <div className="absolute -top-1 -right-1 rounded-bl-xl bg-[#1B238D] w-[62px] h-[42px] flex justify-center items-center z-20">
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

      <div className={`h-[644.37px] rounded-2xl ${course.bg} relative`}>
        {/* Glass effect block for tools */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 p-4 bg-[#0f172a] bg-opacity-60 text-[#fff] rounded-xl backdrop-blur-lg z-10 w-[90%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bocker font-[400] text-[24px] leading-[27px]">
            <span className="block font-semibold text-lg mb-2 ">Tools</span>
            <ul className="pl-5 flex gap-3 items-center">
              {course.tools.map((tool, index) => (
                <li key={index} className="text-sm px-4 py-1 rounded-2xl bg-[#000] text-[18px] leading-[20px]">
                  {tool}
                </li>
              ))}
            </ul>

            <div className="flex justify-between mt-4">
              <div>
                <div className="block font-semibold text-lg mb-2">Duration</div>
                <p className="text-[18px] leading-[20px] px-4 py-1 rounded-2xl bg-[#000] text-center ">
                  {course.duration} Weeks
                </p>
              </div>
              <div className="bg-[#1B238D] rounded-xl w-[168px] py-2 self-end flex justify-center items-center cursor-pointer text-[18px] leading-[18px]">
                Learn More <IoMdArrowForward className="-rotate-45" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[100.4px] text-[#fff] p-4">
        <h1 className="font-[400] text-[24px] leading-[27px]">
          {course.detail}
        </h1>
        <p className="font-[400] text-[14px] leading-[20px] text-[#F3EFEF] text-opacity-60">
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
    tools: [], // Default to an empty array if no tools are provided
  }
};

export default Coursechild;
