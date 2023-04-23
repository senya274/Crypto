import React from "react";
import styles from "./Main.module.css";
import Coins from "../Coins/Coins";
import { useEffect } from "react";
import { Button } from "../Button/Button";
import TableHeaders from "../TableHeaders/TableHeaders";
import MobileViewTable from "../MobileViewTable/MobileViewTable";
import { useDispatch, useSelector } from "react-redux";
import { setBuy, setIsBuySelected, setSell } from "../../Redux/actions";

const Main = () => {
  const dispatch = useDispatch();
  const { buy, sell, isBuySelected } = useSelector((state) => state);

  useEffect(() => {
    const fetchData = async () => {
      const buyResponse = await fetch(
        "https://test-d85ac-default-rtdb.europe-west1.firebasedatabase.app/buy.json"
      );
      const sellResponse = await fetch(
        "https://test-d85ac-default-rtdb.europe-west1.firebasedatabase.app/sell.json"
      );

      const buyData = await buyResponse.json();
      const sellData = await sellResponse.json();

      dispatch(setBuy(buyData));
      dispatch(setSell(sellData));
    };

    fetchData();
  }, [dispatch]);

  const handleBuyClick = () => {
    dispatch(setIsBuySelected(true));
  };

  const handleSellClick = () => {
    dispatch(setIsBuySelected(false));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Button
          onClick={() => handleBuyClick(true)}
          content="Buy"
          variant={isBuySelected ? "contained" : "outlined"}
        />
        <Button
          onClick={() => handleSellClick(false)}
          content="Sell"
          variant={isBuySelected ? "outlined" : "con"}
          color="secondary"
        />
        <h2>{isBuySelected ? "Buy from the User" : "Sell to the User"}</h2>
        <div className={styles.table}>
          <TableHeaders />
          {isBuySelected
            ? buy.map((item) => (
                <Coins className={styles.row} buy item={item} key={item.coin} />
              ))
            : sell.map((item) => (
                <Coins className={styles.row} item={item} key={item.coin} />
              ))}
        </div>
        <div className={styles.mobileTable}>
          {isBuySelected ? (
            <MobileViewTable currencies={buy} isBuy />
          ) : (
            <MobileViewTable currencies={sell} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
