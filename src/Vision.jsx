import React from 'react'

const Vision = () => {
  return (
    <div className="bg-[#1B238D] w-full  h-[600px] rounded-3xl p-2 relative">
    <img src="visionimg.svg" alt="" className="absolute -bottom-1 -right-1 " />
    <div className="w-[600px] mx-[5rem] my-[6rem] text-[#fff]">
        <p>
            <ul className='list-disc list-inside'>
                <li className='font-[800] text-[16px] '>Our Vision</li>
            </ul>
        </p>
        <h1 className="font-[300] text-[67.5px] ">The Coding Revolution</h1>
        <p className="font-[400] text-[16px] leading-[23px] w-3/4 ">The tech world is evolving. Professionals need to be fast, knowledgeable, and adaptable. Coding expertise allows you to innovate, build smarter, and scale your career effectively.</p>
        <div className='flex items-strech  h-9 mt-8'>
                    <button className='bg-[#fff] rounded-xl px-2'><img src="plus.svg" alt="" /></button>
                    <button className='bg-[#fff] rounded-xl text-[#1B238D] px-5 text-center' >More about coding</button>
                    
        </div>
    </div>
  </div>
  )
}

export default Vision