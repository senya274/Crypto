import React from "react";
import styles from "./MobileCard.module.css";
import Divider from "../Divider/Divider";
import { getPrice } from "../Coins/Coins";

const Coin = () => {
  return <img src="coin.png" />;
};

const MobileCard = ({ action, item }) => {
  const { available, limits, payment, coin, price } = item;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Coin />
        <p className={styles.headerText}>
          {getPrice(price)} {coin}
        </p>
      </div>
      <div className={styles.dividerContainer}>
        <Divider />
      </div>
      <div className={styles.dataActionsContainer}>
        <div className={styles.dataContainer}>
          <div className={styles.rowContainer}>
            <p className={styles.subtitle}> Amount</p>
            <p className={styles.text}>{getPrice(available)}</p>
          </div>
          <div className={styles.rowContainer}>
            <p className={styles.subtitle}>Limit</p>
            <p className={styles.text}>{limits.join(" - ")}</p>
          </div>
        </div>
        <div className={styles.actionContainer}>{action}</div>
      </div>
    </div>
  );
};
export default MobileCard;
