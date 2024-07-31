// src/components/Whycompo.js

import React from "react";
import SubWhy from "./SubWhy";

const items = [
  {
    title: "Build",
    description:
      "Develop real-world projects that you can manage and showcase.",
  },
  {
    title: "Explore",
    description:
      "Discover new technologies and enhance your skills with hands-on experience.",
  },
  {
    title: "Collaborate",
    description:
      "Work with others to solve problems and create innovative solutions.",
  },
  {
    title: "Learn",
    description:
      "Continuously improve your skills through learning and practice.",
  },
  {
    title: "Innovate",
    description: "Apply creativity and knowledge to develop unique solutions.",
  }
];

const Whycompo = () => {
  return (
    <div className="mx-auto w-[90%] m-5">
      {" "}
      {/* Center the grid container and set its width */}
      <div className="grid grid-cols-2 gap-5 justify-items-center">
        <div className="w-[592.8px] h-[120.44px]  flex px-5 items-center">
          <div className=" font-[300] text-[67px] leading-[67px]">
          • Why <br />
          Infinite Coding?
          </div>
        </div>
        {/* Center items within the grid */}
        {items.map((item, index) => (
          <SubWhy key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Whycompo;
