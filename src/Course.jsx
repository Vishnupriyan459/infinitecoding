import React, { useState } from "react";
import { IoMdArrowForward } from "react-icons/io";
import Coursechild from "./Coursechild";

const Course = () => {
  const [data, setData] = useState([
    {
      mode: "online",
      detail: "A comprehensive bootcamp designed to take beginners to advanced Java developers.",
      title: "Java Bootcamp",
      bg: "bg-java",
      tools: ["Eclipse", "Spring boot", "Jenkins"],
      duration: 8
    },
    {
      mode: "online",
      detail: "An immersive program covering front-end and back-end development.",
      title: "Full-Stack Development Program",
      bg: "bg-FullStack",
      tools: ["Vscode", "PostMan", "GitHub"],
      duration: 12
    },
    {
      mode: "online",
      detail: "A practical course focused on automating testing using Python.",
      title: "Automation with Python",
      bg: "bg-Automation",
      tools: ["vscode", "GitHub", "Selenium"],
      duration: 5
    },
    {
      mode: "online",
      detail: "A practical course focused on AI and GenAI using Python with AI.",
      title: "AI with Python",
      bg: "bg-ai",
      tools: ["GitHub Copilot", "GitHub", "ChatGPT"],
      duration: 10
    }
  ]);

  return (
    <>
      <div className="w-full h-[853.7px] mt-[10rem] relative bg-[#1B238D] rounded-t-2xl rounded-bl-2xl">
        <div className="w-[209px] h-[44.4px] absolute -top-[2.8rem] left-[1rem] flex content-end items-end">
          <div className="w-[42px] h-[42px] bg-[#1B238D]">
            <div className="w-[100%] h-[100%] bg-[#fff] rounded-br-2xl"></div>
          </div>
          <div className="w-[125px] h-[44.4px] bg-[#1B238D] flex justify-center items-center rounded-t-2xl">
            <ul className="list-disc list-inside">
              <li className="font-[800] text-[16px] text-[#fff] leading-[18px]">
                <span>Course</span>
              </li>
            </ul>
          </div>
          <div className="w-[42px] h-[42px] bg-[#1B238D]">
            <div className="w-[100%] h-[100%] bg-[#fff] rounded-bl-2xl"></div>
          </div>
        </div>
        <div className="p-9">
          <div className="w-full px-2 flex gap-5 overflow-x-auto overflow-y-hidden scroll-smooth snap-x py-4 mx-auto delay-400 scroll-container">
            {data.map((course) => (
              <Coursechild key={course.title} course={course} />
            ))}
          </div>
        </div>
      </div>

      <div className="w-full h-[100.46px] flex">
        <div className="w-[85%] bg-[#1B238D]">
          <div className="bg-[#ffff] w-full h-full rounded-tr-2xl"></div>
        </div>
        <div className="w-[15%] bg-[#ffff] cursor-pointer">
          <div className="bg-[#1B238D] w-full h-full rounded-b-3xl flex justify-center items-center">
            <div className="bg-[#d1d5db] rounded-xl w-[50px] h-[45px] relative">
              <IoMdArrowForward className="text-[#1B238D] text-[45px] absolute -right-[1rem] bg-[#fff] rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Course;
