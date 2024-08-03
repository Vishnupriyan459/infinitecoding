import React from 'react';
import  './Process.css';
import { FaArrowDownLong } from "react-icons/fa6";
const Process = () => {
  return (
    <div className='w-[90%] mx-auto py-[5rem] space-y-4 overflow-hidden'>
        <h1 className='font-[300] text-[50px] leading-[55.5px]'>Our process</h1>
        <div className='flex items-start h-[165px] font-[400] text-[16px] justify-between '>
            <div className='w-[30rem]'>
              Collaborative Learning: Our teaching approach encourages collaboration and creativity. Students work on projects that mimic real-world scenarios, fostering a deep understanding of the material.
            </div>
            <div className='w-1/2 h-full'>
              Expert Guidance: Our instructors are industry professionals with extensive experience in C++. They provide personalized feedback and support to help you succeed.
            </div>
        </div>
        <div className='flex gap-4 overflow-x-auto hide-scrollbar'>
          <div className='min-w-[350px]'><img src="Process1.svg" alt="" /></div>
          <div className='min-w-[350px]'><img src="Process2.svg" alt="" /></div>
          <div className='min-w-[350px]'><img src="Process3.svg" alt="" /></div>
          <div className='min-w-[350px]'><img src="Process4.svg" alt="" /></div>
        </div>
        <div className="  w-[3rem] h-[3rem] rounded-2xl bg-[#fff] bg-opacity-50  float-right relative mr-3">
          <div className='w-full h-full rounded-2xl bg-[#ffff] absolute -right-2 flex justify-center items-center'>
            <FaArrowDownLong className="text-[#000] -rotate-90  " />

          </div>
          </div>
    </div>
  )
}

export default Process;
