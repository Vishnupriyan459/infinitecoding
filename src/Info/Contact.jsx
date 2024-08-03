import React from "react";

const Contact = () => {
  return (
    <div className="w-[98%]  mx-auto flex items-center justify-between">
      <img src="Coding.svg" alt="" className=" h-auto object-cover" />
      <div className="flex justify-end items-center w-1/2">
        <div className="space-y-5 h-[200px]">
          <ul className="list-disc list-inside">
            <li className="font-bold text-[16px] text-[#1B238D] leading-[18px]">
              <span className="text-black">Contact</span>
            </li>
          </ul>
          <h1 className="font-light text-[50px] leading-[55px]">
            Want to know more about our way of working?
          </h1>
          <div className="flex items-center ">
            <button className="bg-[#1B238D] rounded-xl p-2 flex items-center justify-center">
              <img src="pluswhite.svg" alt="Plus Icon" />
            </button>
            <button className="bg-[#1B238D] text-white rounded-xl p-2 font-[400] text-[19px]">
              Contact Owner name
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
