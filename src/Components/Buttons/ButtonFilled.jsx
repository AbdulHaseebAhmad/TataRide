import React from 'react'

export default function ButtonFilled({value,onClick,disabled}) {
  return (
    <div className="font-sans text-[16px] md:text-[13px] lg:text-[15px] xl:text-[17px]  px-[1em]">
    <button disabled={disabled} onClick={onClick} className='w-full min-w-[200px] max-w-[400px] bg-primary text-bgwhite text-[1em] py-[0.61em] px-[0em] text-[1.2em] font-[500] rounded-md mx-auto'>
      {value}
    </button>
    </div>
  )
}
