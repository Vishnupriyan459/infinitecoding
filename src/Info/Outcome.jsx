import React from 'react';

const Outcome = () => {
  return (
    <div className='w-[98%] mx-auto rounded-xl bg-[#1B238D] p-6 mt-[10vh]'>
      <div className='w-[80%] mx-auto my-5 text-white'>
        <p className='text-[50px] leading-[55px] font-[300] mb-4'>The outcome</p>
        <div className='flex items-end space-x-4'>
          <div className='w-[40rem]'>
            <p className='leading-[23px] font-[400] text-[16px]   w-[30rem]'>
              By the end of this course, you will have a robust understanding of C++ and be able to develop complex applications. You will be well-equipped to tackle challenges in software development and have the skills necessary to advance your career.
            </p>
          </div>
          <div className='w-1/2 flex justify-center'>
            <div className='flex items-center '>
              <button className='bg-white rounded-xl p-2 flex items-center justify-center'>
                <img src="downarrow.svg" alt="Down arrow" />
              </button>
              <button className='bg-white text-[#1B238D] rounded-xl px-5 py-2'>
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='flex gap-4 justify-center'>
            <img src="outcome1.svg" alt="" className='w-[600px] h-[600px]'/>
            <img src="outcome2.svg" alt="" className='w-[600px] h-[600px]'/>

      </div>
    </div>
  );
};

export default Outcome;
