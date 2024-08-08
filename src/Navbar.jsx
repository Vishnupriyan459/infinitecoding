import React from 'react';
import { useLocation } from 'react-router-dom';
// import blueLogo from '../public/blueLogo.svg'

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  console.log(currentPath);
  

  return (
    <div className='flex justify-between items-center'>
      <div>
        {currentPath === '/info/' ? (
          <img src="blueLogo.svg" alt="Logo" className='w-[104px] h-[22.5px] md:w-[204px] md:h-[45px]'/>
        ) : (
          <img src="icon.svg" alt="Icon" className='w-[104px] h-[22.5px] md:w-[204px] md:h-[45px]'/>
        )}
      </div>
      <div className='text-[#1B238D] bg-[#ffff] w-[40px] md:w-[100px] lg:w-[171px] text-center py-1 rounded-xl'>
        <ul className='list-disc list-inside'>
          <li className='font-[800] text-[4px] md:text-[8px] lg:text-[16px]'>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
