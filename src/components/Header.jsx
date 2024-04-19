import React from 'react'
import { FaChevronLeft,FaEllipsisV } from "react-icons/fa";
import './Header.css'

const Header = () => {
  return (
    <div className='banner'>
        <button><FaChevronLeft  /></button>
        <span>Bitcoin Wallet</span>
        <button><FaEllipsisV /></button>
    </div>
  )
}

export default Header