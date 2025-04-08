import React, { useEffect, useState } from "react";
import flag from "../../assets/au-flag.png";
import {useDispatch, useSelector} from "react-redux";
import { setfare } from "../../Store/Form/Actions";
import { setName, setPhone } from "../../Store/Data/Reducer";

export default function StepTwo() {
  const dispatch = useDispatch();
  const routeData = useSelector((state)=> state.location.routeData);
  const rideTime = useSelector((state)=> state.form.rideTime);

  const [distance,setDistance] = useState(0);
  const [price,setPrice] = useState(0);
  


  useEffect(()=>{
    if(routeData){
      const distance = routeData[0]?.routes?.[0]?.legs?.[0]?.distanceMeters  / 1000 || 0;
      setDistance(distance);
    }
  },[routeData])


  useEffect(()=>{
    let fare = 0;
    console.log(rideTime);
    console.log(distance)
    const [hours] = rideTime.split(":").map(Number);
    const isDayTime = hours >= 6 && hours <= 18;
    if(isDayTime){
      fare = ((8.30 + (distance * 2.82) ) * 1.50)
    } else {
      fare = ((10.60 + (distance * 2.82) ) * 1.50)
    }
    fare = Math.round(fare)
    console.log(fare)
    if(distance != 0){
      setPrice(fare);
      dispatch(setfare(fare));
    }
  
  
  },[distance,rideTime])
  return (
   <><div className="py-[1.2em] flex gap-[1em] items-center  bg-lightgrey mb-4 bg-opacity-[0.15] w-full max-w-[420px]  border-l border-l-4 border-primary">

   <div className="h-auto">
     <img className=" max-h-[3em]" src="https://book-13cabs-cyhdf8encdbmgmgs.z01.azurefd.net/Vehicles/Sedan.png" alt="car-image"></img>
   </div>

   <div className="flex flex-col gap-[0.1em]">
     <p className="font-sans font-[500] text-[1em] tracking-[0.02em] text-[#000]">Next Available</p>
     <p className="font-sans font-[400] text-[0.8em] tracking-[0.02em] text-[#000]">1 - 4 Passengers</p>
   </div>

   <p className="text-[1.3em] font-[400] flex flex-col gap-[0.3em]">
     $ {distance > 0 ? price : "0.00"}
   </p>
 </div> <div className="font-sans text-[16px] md:text-[13px] lg:text-[15px] xl:text-[17px]  px-[1em] flex flex-col gap-[1em]">

    
      <div className="flex gap-[0.5em] items-center">
        <p className="font-sans font-[400] text-[0.9em] tracking-[0.02em] text-[#000]">
          Step 2 of 4
        </p>
        <p className="font-sans font-[500] text-[1em] tracking-[0.02em] text-[#000]">
          Contact Details
        </p>
      </div>

      <div className="flex flex-col gap-[0.8em] py-[0.2em]">
        <div className="w-full max-w-[400px] flex gap-[0.5em] items-center">
          <input
            className="px-[0.3em] w-full h-[2.5em] border border-1 border-lightgrey rounded-sm focus:border-2 focus:border-primary outline-none cursor-pointer"
            type="text"
            placeholder="Passenger Name"
            onChange={(e)=>dispatch(setName(e.target.value))}
          />
        </div>

        <div className="w-full max-w-[400px] flex gap-[0.5em] items-center">
          <div className="flex items-center gap-[0.4em] p-[0.5em] border border-1 border-lightgrey rounded-sm">
            <img
              src={flag}
              alt="Australia Flag"
              className="w-[1.5em]  object-fit"
            />
            <span className="text-lightgrey text-[0.9em]">+61</span>
          </div>
          <input
            className="px-[0.3em] w-[90%] h-[2.5em] border border-1 border-lightgrey rounded-sm focus:border-2 focus:border-primary outline-none cursor-pointer"
            type="text"
            placeholder="Contact Number"
            onChange={(e)=>dispatch(setPhone(e.target.value))}

          />
        </div>
      </div>
    </div></>
  );
}
