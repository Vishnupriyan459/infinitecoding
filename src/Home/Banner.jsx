import React from 'react'

const Banner = () => {
  return (
    <div className='w-[88%] mx-auto'>
            <div className='text-[#fff] mx-3 mt-[4.5rem]'>
                <div className='font-extrabold mx-2'>Coding Your Future</div>
                <div className='font-[300] text-[86px] leading-[126px]'>We empower your future through expert-led technical education.</div>
                <div className='flex justify-between items-center'>
                    <p className='w-[30%]'>Infinite Coding is a premier technical teaching agency. We propel our students forward by delivering the highest quality coding education, 
                    specializing in Java and other programming languages.</p>
                    <div className='flex items-strech  h-9'>
                        <button className='bg-[#fff] rounded-xl px-2'><img src="downarrow.svg" alt="" /></button>
                        <button className='bg-[#fff] rounded-xl text-[#1B238D] px-5 text-center'>Learn more</button>
                        
                    </div>
                </div>
            </div>
            <div className=''>
                <img src="banner.svg" alt="" />
                <div className='flex justify-around opacity-[0.5] mt-9'>
                    <img src="company/coinbase.svg" alt="" />
                    <img src="company/dropbox.svg" alt="" />
                    <img src="company/slack.svg" alt="" />
                    <img src="company/spotify.svg" alt="" />
                    <img src="company/webflow.svg" alt="" />
                    <img src="company/zoom.svg" alt="" />
                </div>
            </div>
        </div>
  )
}

export default Banner