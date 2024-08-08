import React from 'react';

const Outcome = () => {
  return (
    <div className='w-[98%] mx-auto rounded-xl bg-[#1B238D] p-6 mt-[10vh]'>
      <div className='w-[80%] mx-auto my-5 text-white'>
        <p className='font-[400] text-[25px] leading-[30px] md:text-[35px] md:leading-[40px] lg:text-[50px] lg:leading-[55px]  mb-4'>The outcome</p>
        <div className='flex items-end justify-between space-x-4'>
          <div className=''>
            <p className='font-[200] leading-[18px] md:leading-[23px] font-[400] text-[8px] md:text-[16px]   md:w-[30rem]'>
              By the end of this course, you will have a robust understanding of C++ and be able to develop complex applications. You will be well-equipped to tackle challenges in software development and have the skills necessary to advance your career.
            </p>
          </div>
          <div className=' flex justify-center'>
            <div className=' flex items-center  '>
              <button className='bg-white rounded-xl w-[25px] h-[25px] md:w-[45px] md:h-[39px] p-2 flex items-center justify-center'>
                <img src="downarrow.svg" alt="Down arrow" />
              </button>
              <button className='bg-white flex items-center justify-center text-[#1B238D] w-[60px] h-[20px] md:w-[120px] md:h-[30px] lg:w-[140px] lg:h-[39px] rounded-xl text-[10px] lg:text-[18px] md:px-3 lg:px-5 py-2'>
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='flex gap-4 justify-center'>
            <img src="outcome1.svg" alt="" className='w-[150px] h-[150px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[600px] xl:h-[600px]'/>
            <img src="outcome2.svg" alt="" className='w-[150px] h-[150px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[600px] xl:h-[600px]'/>

      </div>
    </div>
  );
};

export default Outcome;
