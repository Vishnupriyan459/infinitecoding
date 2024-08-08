import React from 'react'

const Banner = () => {
  return (
    <div className='w-[88%] mx-auto'>
            <div className='text-[#fff] mx-3 md:mx-3 mt-[2rem] md:mt-[4.5rem]'>
                <div className='font-extrabold md:mx-2 text-[10.50px] leading-[15.80px] md:text-[16px] md:leading-[18px]'>Coding Your Future</div>
                <div className='font-[300] text-[20px] leading-[26px] md:text-[36px] md:leading-[50px] lg:text-[66px] lg:leading-[85px] xl:leading-[126px] xl:text-[86px] '>We empower your future through expert-led technical education.</div>
                <div className='flex justify-between items-center w-[90%] '>
                    <p className='w-[40%] font-[400] text-[5px] leading-[8px] md:text-[9px] md:leading-[16px] lg:text-[16px] lg:leading-[23px]'>Infinite Coding is a premier technical teaching agency. We propel our students forward by delivering the highest quality coding education, 
                    specializing in Java and other programming languages.</p>
                    <div className='flex items-strech   '>
                        <button className='bg-[#fff] rounded-md md:rounded-2xl  w-[10px] h-[10px] md:w-[40px] md:h-[40px] flex justify-center items-center'><img src="downarrow.svg" alt="" className='w-[6px] h-[6px] md:w-[12px] md:h-[12px]'/></button>
                        <button className='bg-[#fff] rounded-md md:rounded-2xl text-[#1B238D] flex justify-center items-center  text-center w-[29px] h-[10px] text-[4px] md:text-[12px] md:w-[100.6px]  md:h-[40px]'>Learn more</button>
                        
                    </div>
                </div>
            </div>
            <div className=''>
                <img src="banner.svg" alt="" />
                <div className='flex justify-around opacity-[0.5] mt-9 gap-3 '>
                    <img src="company/coinbase.svg" alt="" className='w-[37px] h-[10px] md:w-[134px] md:h-[24px] lg:w-[190px] lg:h-[54px]'/>
                    <img src="company/dropbox.svg" alt="" className='w-[37px] h-[10px] md:w-[134px] md:h-[24px] lg:w-[190px] lg:h-[54px]'/>
                    <img src="company/slack.svg" alt="" className='w-[37px] h-[10px] md:w-[134px] md:h-[24px] lg:w-[190px] lg:h-[54px]'/>
                    <img src="company/spotify.svg" alt="" className='w-[37px] h-[10px] md:w-[134px] md:h-[24px] lg:w-[190px] lg:h-[54px]'/>
                    <img src="company/webflow.svg" alt="" className='w-[37px] h-[10px] md:w-[134px] md:h-[24px] lg:w-[190px] lg:h-[54px]'/>
                    <img src="company/zoom.svg" alt="" className='w-[37px] h-[10px] md:w-[134px] md:h-[24px] lg:w-[190px] lg:h-[54px]'/>
                </div>
            </div>
        </div>
  )
}

export default Banner