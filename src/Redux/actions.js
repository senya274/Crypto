export const SET_BUY = 'SET_BUY';
export const SET_SELL = 'SET_SELL';
export const SET_IS_BUY_SELECTED = 'SET_IS_BUY_SELECTED';

export const setBuy = (buy) => ({
  type: SET_BUY,
  payload: buy,
});

export const setSell = (sell) => ({
  type: SET_SELL,
  payload: sell,
});

export const setIsBuySelected = (isBuySelected) => ({
  type: SET_IS_BUY_SELECTED,
  payload: isBuySelected,
});