import React from "react";
import styles from "./Checkout.module.css";
import scootyGif from "../../assets/deliveryGif-unscreen.gif";

export default function Checkout({ onClose }) {
  
  return (
    <div className={styles.overlay}>
      <div className={styles.dialog}>
        <img src={scootyGif} className={styles.scootyGif} />
        <p className={styles.successMsg}>Order placed successfully!</p>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
}
