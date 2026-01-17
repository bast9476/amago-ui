import { combineReducers } from '@reduxjs/toolkit';

let userLevelReducer: ReturnType<typeof combineReducers> | null = null;

const createUserLevelReducer = () => {
  if (!userLevelReducer) {
    const reducer = require('./slices/userLevelSlice').default;
    userLevelReducer = combineReducers({
      userLevel: reducer,
    }) as unknown as ReturnType<typeof combineReducers>;
  }
  return userLevelReducer;
};

export default createUserLevelReducer;

export * from './exports';
