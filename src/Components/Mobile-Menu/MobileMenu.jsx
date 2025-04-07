import React from "react";
import { NavLink } from "react-router-dom";
import ButtonFilled from '../Buttons/ButtonFilled';

export default function MobileMenu() {
  return (
    <div className="w-full h-[60vh] bg-white mb-[4em] text-[16px] sm:text-[16px] ">
      <ul className="w-full h-full flex flex-col gap-[1.5em] items-center justify-center">
        <li>
          <NavLink
            to=""
            className=" font-sans text-[400] text-[1.4em] teacking-[0.002em]"
          >
            Fare estimate
          </NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink
            to=""
            className=" font-sans text-[400] text-[1.4em] teacking-[0.002em]"
          >
            Book a taxi
          </NavLink>
        </li>
        <li>
          <NavLink
            to=""
            className=" font-sans text-[400] text-[1.4em] teacking-[0.002em]"
          >
            Company website
          </NavLink>
        </li>
        <li>
          <NavLink
            to=""
            className=" font-sans text-[400] text-[1.4em] teacking-[0.002em]"
          >
            Contact us
          </NavLink>
        </li>{" "}
      </ul>
      <div className="mx-auto w-[20em]">
      <ButtonFilled value="Sign up"/>
      </div>
    </div>
  );
}
