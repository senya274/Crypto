import React, { useEffect, useState } from "react";
import styles from "./Coins.module.css";
import { Button } from "../Button/Button";

const CoinButton = ({buy, availableCoin}) => {
  const content = buy ? `Buy ${availableCoin}` : `Sell ${availableCoin}`
  const color = buy ? "primary" : "secondary"

  return <div style={{width: "114px", marginTop: "16px", marginRight: "20px"}}><Button content={content} variant="contained" color={color} fullWidth /></div>
}

const Coins = ({className, buy, item }) => {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      <p className={styles.name}>{item.coin}</p>

      <p className={styles.price}>
        {item.price}&nbsp;
        {item.coin}
      </p>
      <div>
        <p className={styles.available}>
          <span className={styles.span}>Avaliable</span>{" "}
          {item.available}&nbsp;
          {item.availableCoin}
        </p>
        <p className={styles.limits}>
          <span className={styles.span}>Limit</span>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {item.limits[0]}-
          {item.limits[1]}&nbsp;
          {item.coin}
        </p>
      </div>
      <div style={{display: "flex"}}>
        <div className={styles.border}></div>
        <p className={styles.payment}>{item.payment}</p>
      </div>
        <CoinButton buy={buy} availableCoin={item.availableCoin} />
    </div>
  );
};
export default Coins;
