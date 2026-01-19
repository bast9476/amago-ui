import { combineReducers } from '@reduxjs/toolkit';

let paymentReducer: ReturnType<typeof combineReducers> | null = null;

const createPaymentReducer = () => {
  if (!paymentReducer) {
    const paymentSliceReducer = require('./slices/paymentSlice').default;

    paymentReducer = combineReducers({
      payment: paymentSliceReducer,
    }) as unknown as ReturnType<typeof combineReducers>;
  }
  return paymentReducer;
};

export default createPaymentReducer;

export * from './exports';
