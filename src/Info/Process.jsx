import React, { useRef } from 'react';
import './Process.css';
import { FaArrowDownLong } from "react-icons/fa6";

const Process = () => {
  const scrollableDivRef = useRef(null);

  const handleScrollRight = () => {
    if (scrollableDivRef.current) {
      scrollableDivRef.current.scrollBy({
        left: 300, // Adjust the scroll amount as needed
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='w-[90%] mx-auto py-[5rem] space-y-4 overflow-hidden'>
      <h1 className='font-[300] text-[50px] leading-[55.5px]'>Our process</h1>
      <div className='max-md:space-y-5 md:flex items-start md:h-[165px] font-[400] text-[16px] justify-between gap-[1rem]'>
        <div className='lg:w-[30%]'>
          Collaborative Learning: Our teaching approach encourages collaboration and creativity. Students work on projects that mimic real-world scenarios, fostering a deep understanding of the material.
        </div>
        <div className='lg:w-[30%] h-full'>
          Expert Guidance: Our instructors are industry professionals with extensive experience in C++. They provide personalized feedback and support to help you succeed.
        </div>
      </div>
      <div 
        className='flex gap-4 overflow-x-auto hide-scrollbar' 
        ref={scrollableDivRef}
      >
        <div className='min-w-[250px] md:min-w-[350px]'><img src="Process1.svg" alt="" /></div>
        <div className='min-w-[250px] md:min-w-[350px]'><img src="Process2.svg" alt="" /></div>
        <div className='min-w-[250px] md:min-w-[350px]'><img src="Process3.svg" alt="" /></div>
        <div className='min-w-[250px] md:min-w-[350px]'><img src="Process4.svg" alt="" /></div>
      </div>
      <div 
        className="hidden md:block w-[3rem] h-[3rem] rounded-2xl bg-[#fff] bg-opacity-50 float-right relative mr-3"
        onClick={handleScrollRight}
      >
        <div className='w-full h-full rounded-2xl bg-[#ffff] absolute -right-2 flex justify-center items-center'>
          <FaArrowDownLong className="text-[#000] -rotate-90" />
        </div>
      </div>
    </div>
  );
};

export default Process;
