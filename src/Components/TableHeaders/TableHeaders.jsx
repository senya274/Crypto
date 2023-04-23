import React from "react";
import styles from "./TableHeaders.module.css";

const TableHeaders = () => {
    return (
      <div className={`${styles.text} ${styles.row}`}>
        <div>
          <p>Coin</p>
        </div>
        <div className={styles.price}>
          <p>Price</p>
        </div>
        <div className={styles.available}>
          <p>Limit/Available</p>
        </div>
        <div className={styles.payment}>
          <p>Payment</p>
        </div>
        <div className={styles.trade}>
          Trade &nbsp; <span className={styles.fee}> 0 Fee</span>
        </div>
      </div>
    );
  };

  export default TableHeaders;