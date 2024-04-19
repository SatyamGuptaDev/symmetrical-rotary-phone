import React, { useState } from 'react'
import "./Rate.css"

const Rate = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIcon = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='rate-body'>

      <div className='bannerFirst'>
        <div className='bannerSecond'>
          <img src='bitcoin.png' width='25%' alt='icon' />
          <>BitCoin</>
        </div>
        <div>BTC</div>
      </div>


      <div className='rate-h1'>
        <h1>3.529020 BTC</h1>
      </div>


      <div className='usdrate'>
        <p>$3.529020 USD</p>
        <p className='redColor'>-2.32%</p>
      </div>
      <div className='centreIcon'  onClick={toggleIcon}>{isOpen ? "DownIcon" : "OpenIcon"}</div>
      {isOpen && (
        <div className='additionalButtons'>
          <div className='green'>Buy</div>
          <div className='red'>Sell</div>
        </div>
      )}
    </div>

  )
}

export default Rate