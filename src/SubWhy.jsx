import React from 'react';

const SubWhy = ({ item }) => {
  const { title, description } = item; // Destructure item to get title and description

  return (
    <div className="w-[592.8px] h-[120.44px] bg-[#cbd5e1] bg-opacity-10 rounded-3xl border border-e-black flex px-5 items-center">
      <div>
        <h1 className="font-[300] text-[33px] leading-[40px]">{title}</h1>
        
          <div className="font-[400] text-[#222222] text-[16px] leading-[25px] text-opacity-60">{description}</div>
      </div>
    </div>
  );
};

export default SubWhy;
