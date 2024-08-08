import React from 'react';

const SubWhy = ({ item }) => {
  const { title, description } = item; // Destructure item to get title and description

  return (
    <div className="w-[350px] h-[163px] md:w-[340px] md:h-[100px] lg:w-[452px] lg:h-[100px] xl:w-[592.8px] xl:h-[120.44px] bg-[#cbd5e1] bg-opacity-10 rounded-3xl border border-e-black flex px-5 items-center">
      <div>
        <h1 className="font-[300] text-[22px] md:leading-[30px] lg:text-[33px] lg:leading-[40px]">{title}</h1>
        
          <div className="font-[400] text-[12px] md:leading-[19px] lg:text-[#222222] lg:text-[16px] lg:leading-[25px] text-opacity-60">{description}</div>
      </div>
    </div>
  );
};

export default SubWhy;
