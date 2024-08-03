import React from 'react';
import { useLocation } from 'react-router-dom';
// import blueLogo from '../public/blueLogo.svg'

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className='flex justify-between items-center'>
      <div>
        {currentPath === '/info' ? (
          <img src="blueLogo.svg" alt="Logo" />
        ) : (
          <img src="icon.svg" alt="Icon" />
        )}
      </div>
      <div className='text-[#1B238D] bg-[#ffff] w-[171px] text-center py-1 rounded-xl'>
        <ul className='list-disc list-inside'>
          <li className='font-[800] text-[16px]'>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
