import React from "react";
import BTC from "./BTC";
import "./BuySell.css";

const BuySell = () => {
  return (
    <div className="buysell-parent">
      <BTC text="Buy" color="blue" />
      <BTC text="Sell" color="pink" />
    </div>
  );
};

export default BuySell;
