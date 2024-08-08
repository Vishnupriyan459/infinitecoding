import React from 'react'

const ChatObj = () => {
  return (
    <>
      <div className="w-[20em] h-[18em] mx-auto max-sm:mt-5 md:w-[25.25em] md:h-[21.25em] rounded-3xl md:mx-2 flex gap-2 relative opacity-20">
        <div className="w-[12.4375em] h-full bg-[#64748b] rounded-l-3xl rounded-tr-3xl"></div>
        <div className="flex flex-col w-[13.8125em] h-full ">
          <div className="bg-[#64748b] w-full h-[10em] rounded-3xl rounded-br-3xl mb-2"></div>
          <div className="bg-[#64748b] w-full h-[13.5em] rounded-tl-3xl rounded-tr-3xl rounded-br-3xl"></div>
        </div>
        <div className="absolute w-[13em] h-[15em] md:w-[17em] md:h-[15em] bg-[#64748b] rounded-bl-3xl bottom-0 left-0"></div>
      </div>
    </>
  )
}

export default ChatObj
