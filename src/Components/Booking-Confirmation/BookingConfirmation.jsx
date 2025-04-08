import { faArrowRight, faEnvelope, faMobile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import ButtonFilled from '../Buttons/ButtonFilled'
// import { useNavigate } from 'react-router-dom'
export default function BookingConfirmation({onClose}) {
  return (
    <div className='mx-auto bg-white font-sans w-[90%] sm:w-[70%] md:w-[50%] xl:w-[350px] p-8 flex flex-col gap-[1.5em] rounded-[20px]'>
        <div className='w-full flex flex-col gap-0 items-center'>
            <h1 className='font-sans text-center text-[2em] text-primary font-[600] m-0 p-0 leading-[-50px] tracking-0 '>
                Booking <br/> Scheduled
            </h1>
        </div>

        <div className='flex justify-centerr text-center w-[80%] mx-auto'>
            <p className='font-sans text-[1em] text-darkblack font-[400]'>We’ve sent an SMS to your mobile with all your booking details.</p>
        </div>

        <div className='flex gap-[1em] w-auto mx-auto items-center'>
            <FontAwesomeIcon icon={faEnvelope} className='text-gray text-2xl'/>
            <FontAwesomeIcon icon={faArrowRight} className='text-primary text-2xl font-[700]'/>
            <FontAwesomeIcon icon={faMobile} className='text-gray text-4xl'/>
        </div>
        <div>
            <ButtonFilled value='OK' onClick={()=>window.location.reload()}></ButtonFilled>
        </div>
    </div>
  )
}
