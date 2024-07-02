import React from 'react'

const TierColumnHeader = ({title, containerStyles}: {title: string; containerStyles?: string;}) => {
  return (
    <div className={`w-[250px] h-fit mx-auto my-3 py-[6px] px-[15px] text-[18px] z-50 cursor-pointer font-bold tracking-wide bg-[#2a2b3c] sticky top-[80px] left-0 rounded-md max-md:w-full max-md:!top-[150px] focus:!bg-green-600 ${containerStyles ? containerStyles : ""}`} role='columnheader'>
      {title}
      
    </div>
  )
}

export default TierColumnHeader
