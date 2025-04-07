import React from 'react'

export default function ButtonShallow({value,onClick}) {
  return (
    <div className="font-sans text-[16px] md:text-[13px] lg:text-[15px] xl:text-[17px]  px-[1em]">
    <button onClick={onClick} className='w-full max-w-[400px] border border-1 border-primary text-primary text-[1em] py-[0.61em] px-[0em] text-[1.2em] font-[500] rounded-md mx-auto'>
      {value}
    </button>
    </div>
  )
}
