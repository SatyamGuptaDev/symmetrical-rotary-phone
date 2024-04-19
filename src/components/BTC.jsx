import React from "react";
import styles from "./BTC.module.css";
import { FaDollarSign } from "react-icons/fa";



const BTC = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.circle}>
        <p className={styles.text}><FaDollarSign/></p>
      </div>
      <p>Buy BTC</p>
    </div>
  );
};

export default BTC;