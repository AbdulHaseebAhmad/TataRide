import React from "react";
import {useDispatch} from "react-redux";
import { setDriveNote } from "../../Store/Data/Reducer";

export default function StepFour() {

    const dispatch = useDispatch();
  
  return (
    <div className=" font-sans text-[16px] md:text-[13px] lg:text-[15px] xl:text-[17px]  px-[1em] flex flex-col gap-[1em]">
      <div className="flex gap-[0.5em] items-center">
        <p className="font-sans font-[400] text-[0.9em] tracking-[0.02em] text-[#000]">
          Step 4 of 4
        </p>
        <p className="font-sans font-[500] text-[1em] tracking-[0.02em] text-[#000]">
          Driver Instruction
        </p>
      </div>

      <div className="relative w-full max-w-[400px]">
  <textarea
    className="h-[4.5em] w-full border border-1 border-lightgrey rounded-md px-[0.5em] py-[0.5em] resize-none focus:outline-none focus:ring-2 focus:ring-primary"
    placeholder="Notes for driver"
    onChange={(e)=>dispatch(setDriveNote(e.target.value))}

  ></textarea>
      <p className="absolute right-3 top-[92%] text-[0.6em] font-sans font-[400]">320 Characters Left</p>
</div>

    </div>
  );
}