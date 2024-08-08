import React from "react";

const Feedback = ({ details }) => {
  return (
    <div className="w-[20em] h-[18em] md:w-[25.25em] md:h-[250px] rounded-3xl bg-[#ffff] p-5 space-y-[2rem]">
      <div className="font-[400] text-[10px] leading-[15px] md:text-[16px] md:leading-[23.5px] text-[#1B238D]">
        {details.body}
      </div>
      <div className="flex gap-2 items-center">
        <div
          className={`rounded-full w-[25px] h-[25px] md:w-[50px] md:h-[50px] bg-cover bg-center ${details.img}`}
          // Assuming details.img contains the class name for the background image
          aria-label={details.name} // For accessibility, label the profile image
        ></div>
        <div>
          <h1 className="text-[#1B238D] text-[14px] md:text-[21px]">{details.name}</h1>
          <p className="text-[8px] md:text-[14px]">{details.title}</p>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
