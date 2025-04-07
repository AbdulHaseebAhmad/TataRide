import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function TermsAndConditions() {
  return (
    <div className="font-sans text-[16px] md:text-[13px] lg:text-[15px] xl:text-[17px] pt-[1em] px-[1em] flex flex-col gap-[1.5em]">
        <div className='w-full text-center flex flex-wrap max-w-[400px] gap-[0.2em] justify-center'>
            <p className='font-sans text-[0.6em]'>I have read and agreed to the </p>
            <a className="font-sans text-darkblack text-[0.65em] underline font-[500]">Collection Statement </a>
            <a className="font-sans text-darkblack text-[0.65em] underline font-[500]">Privacy Policy  </a>
            <p className='font-sans text-[0.6em]'>and</p>
            <a className="font-sans text-darkblack text-[0.65em] underline font-[500]">Terms and Conditions</a>
        </div>      
        <div className='w-full max-w-[400px] gap-[0.2em] flex items-center justify-center'>
        <p className='font-sans text-[0.65em] font-[500]'>TaTa Ride</p> 
        <FontAwesomeIcon icon={faCopyright} className='text-[0.65em] font-sans font-[500]'/>
        <p className='font-sans text-[0.65em]'>2025</p>
        </div>
        <div className='w-full max-w-[400px] gap-[0.2em] flex items-center justify-center'>
        <a className="font-sans text-darkblack text-[0.65em] underline font-[500]">View In Desktop Mode </a>

</div>
    </div>
  )
}
