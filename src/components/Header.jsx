import React from 'react'
import { FaChevronLeft,FaEllipsisV } from "react-icons/fa";
import './Header.css'

const Header = () => {
  return (
    <div className='banner'>
        <span><FaChevronLeft /></span>
        <span>BitCoin Wallet</span>
        <span><FaEllipsisV /></span>
    </div>
  )
}

export default Header