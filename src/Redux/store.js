import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  buy: [],
  sell: [],
  isBuySelected: true,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_BUY':
      return {
        ...state,
        buy: action.payload,
      };
    case 'SET_SELL':
      return {
        ...state,
        sell: action.payload,
      };
    case 'SET_IS_BUY_SELECTED':
      return {
        ...state,
        isBuySelected: action.payload,
      };
    default:
      return state;
  }
}

export const store = configureStore({reducer});