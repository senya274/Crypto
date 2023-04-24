import React from "react";
import MobileCard from "../MobileCard/MobileCard";
import { Button } from "../Button/Button";
import Divider from "../Divider/Divider";
import styles from "./MobileViewTable.module.css";
const MobileViewTable = ({ currencies, isBuy }) => {

  const getMobileCards = () => {
      return currencies.map((item) => (
        <div className={styles.mobileCardContainer}>
          <p className={styles.mobileCardContainerCoinName}>{item.coin}</p>
        <MobileCard
          key={item.coin}
          item={item}
          action={
            isBuy ? (
              <Button content="Buy USDT" fullWidth/>
            ) : (
              <Button content="Sell USDT" color="secondary" fullWidth />
            )
          }
        />
          <p className={styles.mobileCardsPayment}>{item.payment}</p>
          <Divider />
        </div>
      ));
    };
    
    return (
      <div className={styles.mobileCards}>
        {getMobileCards()}
      </div>
    );
  };
  export default MobileViewTable;