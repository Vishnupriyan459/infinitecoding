import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row mx-auto w-[90%] gap-5 justify-between my-20">
      <div className="relative py-[5rem] lg:py-0">
        <img src="Vector.svg" alt="Background graphic" />
        <img 
          src="founder.svg" 
          alt="Founder image"  
          className="absolute top-[10rem] max-md:w-[8rem] md:top-[6rem] max-sm:left-[9rem] max-md:left-[12rem] md:right-[-3rem] lg:w-[12rem] h-auto md:w-[8rem] lg:top-0 lg:w-[12rem] lg:h-[16rem] xl:w-[15rem] xl:h-[20rem]"
        />
        <div className="text-white absolute top-[45vh] sm:top-[45vh] md:top-[29vh] lg:top-[54%] xl:top-[59%] left-5 font-medium">
          <h1 className="text-[12px] leading-[14px] md:text-[16px] md:leading-[19px] lg:text-[20px] lg:leading-[25px] xl:text-[25px] xl:leading-[30px] w-1/2">Alex Thompson</h1>
          <p className="text-sm leading-5">Founder & CTO</p>
        </div>
      </div>
      <div className="flex flex-col gap-3 justify-end md:ms-20">
        <ul className="list-none flex items-center">
          <li className="font-extrabold text-lg">
            <span className="text-blue-900 text-3xl">•</span> Contact Us
          </li>
        </ul>
        <h1 className="font-light leading-[55px] text-5xl w-[80%]">
          Want to know more about our way of working?
        </h1>
        <div className="flex items-stretch w-[278px] h-[35px] gap-2">
          <button className="bg-blue-900 rounded-xl px-2 py-1">
            <img src="pluswhite.svg" alt="Plus icon" />
          </button>
          <button className="bg-blue-900 text-white rounded-xl px-5 py-1">
            Contact Owner Name
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
