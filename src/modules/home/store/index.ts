import { combineReducers } from '@reduxjs/toolkit';

// Lazy load reducers to avoid evaluation at module load time
// This matches the pattern used in the digital and ecommerce modules.
let homeReducer: ReturnType<typeof combineReducers> | null = null;

const createHomeReducer = () => {
  if (!homeReducer) {
    const homeSliceReducer = require('./slices/homeSlice').default;
    const contentSliceReducer = require('./slices/contentSlice').default;

    homeReducer = combineReducers({
      home: homeSliceReducer,
      content: contentSliceReducer,
    }) as unknown as ReturnType<typeof combineReducers>;
  }

  return homeReducer;
};

export default createHomeReducer;

// Re-export everything from exports.ts for convenience
// This provides a clean API while maintaining lazy loading
export * from './exports';


