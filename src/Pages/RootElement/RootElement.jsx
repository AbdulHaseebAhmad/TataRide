import React, { Fragment, useState }  from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from "../../Components/Navbar/Navbar";
import MobileMenu from '../../Components/Mobile-Menu/MobileMenu';

export default function RootElement() {
  const [showMenu,setShowMenu] = useState(false);

  return (
    <Fragment>
       <Navbar showMenu={()=>setShowMenu(true)}/>
        <Outlet/>
    </Fragment>
  )
}
