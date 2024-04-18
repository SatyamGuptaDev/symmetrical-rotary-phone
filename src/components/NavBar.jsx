import React from 'react'
import "./../App.css"
import { PiBellDuotone,PiGearSixDuotone,PiFolderNotchFill,PiCompassDuotone } from "react-icons/pi";
 import './NavBar.css';


const DownNavbar = () => {
  return (
    <div className='downbarparent'>
        <span ><PiFolderNotchFill size="1.5em"/></span>
        <span><PiCompassDuotone size="1.5em"/></span>
        <span><PiBellDuotone size="1.5em"/></span>
        <span><PiGearSixDuotone size="1.5em"/></span>
        

    </div>
  )
}

export default DownNavbar