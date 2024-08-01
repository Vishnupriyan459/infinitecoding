import React from 'react'

const Services = () => {
  return (
    <div className="w-[100%] h-[653.7px] relative">
        <div className="w-[209 px] h-[44.4px] absolute -top-[2.8rem] left-[1rem] flex  content-end items-end">
          <div className="w-[42px] h-[42px] bg-[#ffff]">
            <div className="w-[100%] h-[100%] bg-[#1B238D] rounded-br-2xl"></div>
          </div>
          <div className="w-[125px] h-[44.4px] bg-[#fff] flex justify-center items-center rounded-t-2xl ">
            <ul className="list-disc list-inside  ">
              <li className="font-[800] text-[16px] text-[#1B238D] leading-[18px]">
                <span className="text-[#6B6B68]">Services</span>
              </li>
            </ul>
          </div>
          <div className="w-[42px] h-[42px] bg-[#ffff]">
            <div className="w-[100%] h-[100%] bg-[#1B238D] rounded-bl-2xl"></div>
          </div>
        </div>
        <div className="w-[100%] h-[137.46px] flex">
          <div className="w-[60%] bg-[#1B238D]">
            <div className="bg-[#ffff] w-[100%] h-[100%]  rounded-tr-2xl"></div>
          </div>
          <div className="w-[40%]  bg-[#ffff]">
            <div className="bg-[#1B238D] w-[100%] h-[100%]  rounded-b-2xl"></div>
          </div>
        </div>
        <div className="w-[90%] mx-auto absolute top-[6rem] left-[5%]">
          <h1 className="w-[70%]   font-[300] text-[50.4px] leading-[55.44px] ">
            Master coding with expert-led courses, develop real-world projects,
            and leverage automation tools to streamline development processes.
          </h1>
          <div className="py-5 flex gap-5 justify-center items-center">
            <div className="w-[515px] h-[204.92px] rounded-3xl border border-e-black flex justify-center items-center ">
              <div className="w-[90%] h-[80%]  flex flex-col gap-9  ">
                <h1 className="font-[300] text-[43px] leading-[50.4px]">
                  Learn
                </h1>
                <div className="flex   gap-5">
                  <div className="font-[400] text-[16px] leading-[23px]  ">
                    Master coding with our expert-led courses that put practical
                    skills at the core of the learning process.
                  </div>
                  
                    <img src="arrowright.svg" alt="" className="self-end cursor-pointer" />
                  
                </div>
              </div>
            </div>
            <div className="w-[515px] h-[204.92px] rounded-3xl border border-e-black flex justify-center items-center">
              <div className="w-[90%] h-[80%]  flex flex-col gap-9 ">
                <h1 className="font-[300] text-[43px] leading-[50.4px]">
                    Build
                </h1>
                <div className="flex   gap-5">
                  <div className="font-[400] text-[16px] leading-[23px]  ">
                  Develop real-world projects that you can manage and showcase.
                  </div>
                  
                    <img src="arrowright.svg" alt="" className="self-end cursor-pointer" />
                  
                </div>
              </div>
            </div>
            <div className="w-[515px] h-[204.92px] rounded-3xl border border-e-black flex justify-center items-center">
              <div className="w-[90%] h-[80%]  flex flex-col gap-9 ">
                <h1 className="font-[300] text-[43px] leading-[50.4px]">
                    Automate
                </h1>
                <div className="flex   gap-5">
                  <div className="font-[400] text-[16px] leading-[23px]  ">
                    Understand and leverage automation tools to streamline your development processes.
                  </div>
                  
                    <img src="arrowright.svg" alt="" className="self-end cursor-pointer" />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Services