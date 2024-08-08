import React from "react";

const Contact = () => {
  return (
    <div className="h-[30vh] md:h-[70vh] lg:h-[90vh]">
    <div className="w-[98%]   mx-auto flex items-center justify-between relative">
      <img src="Coding.svg" alt="" className="w-[130px] md:w-[243px] md:h-[145x] lg:w-[450px] lg:h-[273px] xl:w-[460px] xl:h-[280px]  absolute top-0 left-0" />
      <div className="flex justify-end items-center w-[40rem] md:w-1/2 absolute top-[1rem] md:top-[6rem] lg:top-[8rem] right-0 py-9">
        <div className="space-y-2 md:space-y-3 lg:space-y-4 xl:space-y-5 h-[100px] md:h-[200px]">
          <ul className="list-disc list-inside">
            <li className="font-bold text-[#1B238D] text-[8px] leading-[12px] md:text-[10px] md:leading-[14px] lg:text-[14px] lg:leading-[16px] xl:text-[16px] xl:leading-[18px]">
              <span className="text-black">Contact</span>
            </li>
          </ul>
          <h1 className="font-light text-[12px] max-md:w-[90%] leading-[25px] md:text-[30px] md:leading-[35px] lg:text-[30px] lg:leading-[45px] xl:text-[50px] xl:leading-[55px]">
            Want to know more about our way of working?
          </h1>
          <div className="flex items-center ">
            <button className="bg-[#1B238D] rounded-lg md:rounded-xl p-2 flex items-center justify-center">
              <img src="pluswhite.svg" alt="Plus Icon" className="w-[10px] h-[10px] md:w-[15px] md:h-[15px] lg:w-[20px] lg:h-[20px] xl:w-[26px] xl:h-[26px]"/>
            </button>
            <button className=" bg-[#1B238D] text-white rounded-lg md:rounded-xl p-2 font-[400] text-[5px]  md:text-[10px] lg:text-[16px] xl:text-[19px]">
              Contact Owner name
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
