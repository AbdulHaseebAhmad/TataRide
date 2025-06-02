import React, { useState } from "react";
import logo from "../../assets/tataRideLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEdit, faMap, faPhone, faTh, faThunderstorm } from "@fortawesome/free-solid-svg-icons";
import MenuModal from "../../Portal/MenuModal/MenuModal";
import MobileMenu from "../Mobile-Menu/MobileMenu";

export default function Navbar() {

    const [showMenu,setShowMenu] = useState(false);
    const hideButtons = ["/place-order"].includes(location.pathname)

  return (
    <>
    {showMenu && <MenuModal onClose={()=>setShowMenu(false)}><MobileMenu/></MenuModal>}
      <div className="w-full bg-[#FFFFFF] px-[16px] py-4 flex justify-between items-center">
      <div className=" ">
        <img
          src={logo}
          alt="tata-ride-logo"
          className="object-contain h-auto max-h-[40px] md:max-h-[50px] lg:max-h-[60px]"
        />
      </div>

      <div className="hidden md:flex md:gap-[1.5em] lg:gap-[2.5em] py-[3px] text-3 md:text-4 lg:text-[18px] justify-around ">
        <a
          to="/"
          className="font-sans font-[400] text-[1em] tracking-[0.25px] text-#000 cursor-pointer"
        >
          Fare Estimate
        </a>
        <a
          to="/"
          className="font-sans font-[400] text-[1em] tracking-[0.25px] text-#000 cursor-pointer"
        >
          Book a taxi
        </a>
        <a
          to="/"
          className="font-sans font-[400] text-[1em] tracking-[0.25px] text-#000 cursor-pointer"
        >
          Company website
        </a>
        <a
          to="/"
          className="font-sans font-[400] text-[1em] tracking-[0.25px] text-#000 cursor-pointer"
        >
          Contact us
        </a>
      </div>

      {!hideButtons && (
      <div className="flex items-center justify-end gap-[1.4em] md:gap-[1.2em] lg:gap-5 text-[14px] md:text-4 lg:text-[18px]">
        <button className="py-[0.5em] md:px-[0.8em] px-[1em] lg:px-[1em] font-[500] border border-2 border-primary tracking-[0.25px] rounded-[4px] text-primary shadow-xl cursor-pointer">
          Log in
        </button>
        <FontAwesomeIcon icon={faBars} className="text-[1.5em] md:hidden" onClick={()=>setShowMenu(true)} />
        <button className="hidden md:block py-[0.5em] px-[1em] md:px-[0.8em] lg:px-[1em] font-[500] border border-2 border-primary bg-primary tracking-[0.25px] rounded-[4px] text-white shadow-xl cursor-pointer">
          Sign up
        </button>
      </div>
      )}
    </div>
    <div className="hidden md:flex md:justify-between text-[16px] md:text-[13px] lg:text-[15px] xl:text-[16px] md:bg-lightblack md:px-12 md:py-[0.6em]">
      <div className="text-[1em] flex gap-[1.25em] items-center">
        <div className="flex gap-[0.6em] text-bgwhite items-center">
          <FontAwesomeIcon icon={faPhone} className=" text-[1em]"/>
          <p className="text-[1em] font-sans  font-[400] tracking-[0.025em]">08 6117 5802</p>
        </div>
 
        <div className="flex gap-[6em] items-center py-[0.3em] px-[0.4em] bg-bgwhite rounded-md">
          <p className="font-sans font-[400] text-darkblack text-[1.1em] md:text-[1.2em] lg:text-[1.1em]">Australia</p>
          <FontAwesomeIcon icon={faEdit} className="text-primary text-[1em]"/>
        </div>
      </div>

      <div className="flex gap-[1.3em] items-center ">
      <button className="w-auto  flex items-center gap-[1.4em]">
        <FontAwesomeIcon icon={faMap} className="text-[1.4em] text-bgwhite"/>
       <p className="text-[1.4em] font-sans  font-[400] tracking-[0.025em] text-bgwhite"> Map View</p>
      </button>

      <button className="w-auto  flex items-center gap-[1.4em]">
        <FontAwesomeIcon icon={faTh} className="text-[1.4em] text-bgwhite"/>
       <p className="text-[1.4em] font-sans  font-[400] tracking-[0.025em] text-bgwhite">Schedule View</p>
      </button>
      </div>

      <button className="w-auto flex items-center gap-[1.4em]">
        <FontAwesomeIcon icon={faThunderstorm} className="text-[1.4em] text-bgwhite"/>
       <p className="text-[1.4em] font-sans  font-[400] tracking-[0.025em] text-bgwhite">What's New</p>
      </button>

    </div>
    </>
  );
}

{
  /**
  <div className="hidden md:block md:w-3/6 lg:3/5 py-[3px] md:flex  justify-around border">
        <a
          to="/"
          className="font-sans font-[400] text-2 tracking-[0.25px] text-#000"
        >
          Fare Estimate
        </a>
        <a
          to="/"
          className="font-sans font-[400] text-2 tracking-[0.25px] text-#000"
        >
          Book a taxi
        </a>
        <a
          to="/"
          className="font-sans font-[400] text-4 tracking-[0.25px] text-#000"
        >
          Company website
        </a>
        <a
          to="/"
          className="font-sans font-[400] text-4 tracking-[0.25px] text-#000"
        >
          Contact us
        </a>
      </div>
      {/* <div className="hidden py-[3px] flex gap-[24px] ">
          <a to="/" style={({isActive})=>isActive? "font-sans font-[400] text-5 tracking-[0.25px] text-primary": "font-sans font-[400] text-5 tracking-[0.25px] text-#000"}>Fare Estimate</a>
          <a to="/" style={({isActive})=>isActive? "font-sans font-[400] text-5 tracking-[0.25px] text-primary": "font-sans font-[400] text-5 tracking-[0.25px] text-#000"}>Book a taxi</a>
          <a to="/" style={({isActive})=>isActive? "font-sans font-[400] text-5 tracking-[0.25px] text-primary": "font-sans font-[400] text-5 tracking-[0.25px] text-#000"}>Company website</a>
          <a to="/" style={({isActive})=>isActive? "font-sans font-[400] text-5 tracking-[0.25px] text-primary": "font-sans font-[400] text-5 tracking-[0.25px] text-#000"}>Contact us</a>
      </div> */
}
{
  /* <div className="hidden py-[3px] flex gap-[24px] ">
          <a to="/" style={({isActive})=>isActive? "font-sans font-[400] text-5 tracking-[0.25px] text-primary": "font-sans font-[400] text-5 tracking-[0.25px] text-#000"}>Fare Estimate</a>
          <a to="/" style={({isActive})=>isActive? "font-sans font-[400] text-5 tracking-[0.25px] text-primary": "font-sans font-[400] text-5 tracking-[0.25px] text-#000"}>Book a taxi</a>
          <a to="/" style={({isActive})=>isActive? "font-sans font-[400] text-5 tracking-[0.25px] text-primary": "font-sans font-[400] text-5 tracking-[0.25px] text-#000"}>Company website</a>
          <a to="/" style={({isActive})=>isActive? "font-sans font-[400] text-5 tracking-[0.25px] text-primary": "font-sans font-[400] text-5 tracking-[0.25px] text-#000"}>Contact us</a>
      </div> */
}
