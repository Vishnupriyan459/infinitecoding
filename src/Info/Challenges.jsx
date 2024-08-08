import React from 'react'

const Challenges = () => {
  return (
    <div className='w-[90%] mx-auto py-[1rem] lg:py-[5rem] space-y-3'>
        <h1 className='font-[300] text-[30px] leading-[45px] md:text-[50px] md:leading-[55.5px]'>Challenge & approach</h1>
        <div className='max-lg:space-y-[2rem] lg:flex items-start  font-[400] text-[16px] lg:gap-5 '>
            <div className='text-[16px] leading-[20px]  lg:w-1/2'>
            Our course is designed to be immersive and hands-on. By focusing on real-world applications, we ensure that students not only understand the theory but also how to implement it effectively. The curriculum is structured to build your skills progressively, with plenty of opportunities for practical coding experience.
            </div>
            <div className='text-[16px] leading-[20px]  lg:w-1/2'>
            Additionally, our course emphasizes a project-based learning approach. Students will work on meaningful projects throughout the course, applying their knowledge to solve practical problems and build portfolio-worthy applications. This hands-on experience not only reinforces learning but also prepares students for real-world challenges they may encounter in their careers as C++ developers.
            </div>
        </div>
    </div>
  )
}

export default Challenges