import React from 'react';

const Vision = () => {
  return (
    <div className="bg-[#1B238D] w-full lg:h-[500px] xl:h-[600px] rounded-3xl p-4 relative mt-10 ">
      <img src="visionimg.svg" alt="" className="absolute -bottom-1 -right-1 z-10 w-[140px] h-[99px] md:w-[340px] md:h-[240px] lg:w-[540px] lg:h-[380px] xl:w-auto xl:h-auto" />
      <div className='w-[50%] md:w-[80%] h-full mx-3 md:mx-auto flex items-center'>
        <div className=" w-full md:w-[50%] text-[#fff] space-y-4 lg:space-y-8">
          <p>
            <ul className='list-disc list-inside'>
              <li className='font-[800] text-[6px] md:text-[9px] md:leading-[7px] lg:text-[16px] '>Our Vision</li>
            </ul>
          </p>
          <h1 className="font-[300] text-[12px] leading-[14px] md:text-[37px] md:leading-[40px] lg:leading-[67px] lg:text-[67.5px] z-20">The Coding Revolution</h1>
          <p className="font-[400] text-[8px] leading-[9px] md:text-[12px] md:leading-[14px] lg:text-[16px] lg:leading-[23px] w-[90%] ">
            The tech world is evolving. Professionals need to be fast, knowledgeable, and adaptable. Coding expertise allows you to innovate, build smarter, and scale your career effectively.
          </p>
          <div className="flex items-stretch h-4 md:h-6 lg:h-9 mt-8">
      <button className="bg-white rounded-md md:rounded-lg lg:rounded-xl px-1 md:px-2">
        <img src="plus.svg" alt="Plus icon" className='w-[7px] h-[7px] md:w-[10px] md:h-[10px] lg:w-[15px] lg:h-[15px] '/>
      </button>
      <button className="bg-white rounded-xl text-[#1B238D] px-1 md:px-3 lg:px-5 text-center font-[400] text-[6px] leading-[6px] lg:text-base  lg:leading-base">
        More about coding
      </button>
    </div>
        </div>
      </div>
    </div>
  );
}

export default Vision;
