import React from "react";
import styles from "./Main.module.css";
import Coins from "../Coins/Coins";
import { useState, useEffect } from "react";
import { Button } from "../Button/Button";
const Main = () => {
  const [buy, setBuy] = useState([]);
  const [sell, setSell] = useState([]);
  const [isBuySelected, setIsBuySelected] = useState(true);

  useEffect(() => {
    const fetchBuyData = async () => {
      const response = await fetch(
        "https://test-d85ac-default-rtdb.europe-west1.firebasedatabase.app/buy.json"
      );
      const buy = await response.json();
      setBuy(buy);
    };

    const fetchSellData = async () => {
      const response = await fetch(
        "https://test-d85ac-default-rtdb.europe-west1.firebasedatabase.app/sell.json"
      );
      const sell = await response.json();
      setSell(sell);
    };

    fetchSellData();
    fetchBuyData();
  }, []);

  console.log(buy);
  console.log(sell);
  function handleToggle(isBuy) {
    setIsBuySelected(isBuy);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Button onClick={() => handleToggle(true)} content="Buy" variant="contained"/>
        <Button onClick={() => handleToggle(false)} content="Sell" variant="contained" color="secondary" />
        <h2>{isBuySelected ? "Buy from the User" : "Sell to the User"}</h2>
        <div className={styles.table}>
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
              Trade <span className={styles.fee}> 0 Fee</span>
              
            </div>
          </div>
          {isBuySelected
            ? buy.map((item) => <Coins className={styles.row} buy item={item} />)
            : sell.map((item) => <Coins className={styles.row} item={item} />)}
        </div>
      </div>
    </div>
  );
};

export default Main;
