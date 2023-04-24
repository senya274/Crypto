import React, { useEffect, useState } from "react";
import styles from "./Coins.module.css";
import { Button } from "../Button/Button";

export const getPrice = (price) => {
  if (price < 1000) return price
  
  const splittedPrice = price.toString().split('').reverse()
  let priceString = ''
  for (let i = splittedPrice.length - 1; i >= 0; i--) {
    priceString += splittedPrice[i]
    if (!(i % 3) && i) {
      priceString += ","
    }
  }

  return priceString
}

const CoinButton = ({buy, availableCoin}) => {
  const content = buy ? `Buy ${availableCoin}` : `Sell ${availableCoin}`
  const color = buy ? "primary" : "secondary"

  return <div className={styles.coinbutton}><Button content={content} variant="contained" color={color} fullWidth /></div>
}

const Coins = ({ className, buy, item }) => {
  return (
    <div className={`${styles.wrapper}`}>
      <div className={className}>
      <p className={styles.name}>{item.coin}</p>

      <p className={styles.price}>
        {getPrice(item.price)}
        &nbsp;
        {item.coin}
      </p>
      <div>
        <p className={styles.available}>
          <span className={styles.spanAvaliable}>Avaliable</span>{" "}
          {getPrice(item.available)} {" "}
          {item.availableCoin}
        </p>
        <p className={styles.limits}>
          <span className={styles.spanLimit}>Limit</span>{" "}
         
          {item.limits[0]}-
          {item.limits[1]}{" "}
          {item.coin}
        </p>
      </div>
      <div className={styles.payment}>
        <div className={styles.border}></div>
        <p className={styles.payment}>{item.payment}</p>
      </div>
        <CoinButton buy={buy} availableCoin={item.availableCoin}  key={item}/>
        </div>
    </div>
  );
};
export default Coins;
