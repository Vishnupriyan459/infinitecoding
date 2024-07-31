import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center'>
            <img src="icon.svg" alt="" />
            <div className='text-[#1B238D] bg-[#ffff] w-[171px] text-center py-1  rounded-xl '>
            <ul className='list-disc list-inside'>
            <li className='font-[800] text-[16px]'>Contact Us</li>
          </ul>
            </div>
    </div>
  )
}

export default Navbar