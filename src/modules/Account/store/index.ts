import { combineReducers } from '@reduxjs/toolkit';

let accountReducer: ReturnType<typeof combineReducers> | null = null;

const createAccountReducer = () => {
  if (!accountReducer) {
    const accountSliceReducer = require('./slices/accountSlice').default;

    accountReducer = combineReducers({
      account: accountSliceReducer,
    }) as unknown as ReturnType<typeof combineReducers>;
  }
  return accountReducer;
};

export default createAccountReducer;

export * from './exports';

