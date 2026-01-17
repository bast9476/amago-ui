import { combineReducers } from '@reduxjs/toolkit';

// Lazy load reducers to avoid evaluation at module load time
// This prevents Hermes "property is not configurable" errors
let ecommerceReducer: ReturnType<typeof combineReducers> | null = null;

const createEcommerceReducer = () => {
  if (!ecommerceReducer) {
    // Import reducer getters only when needed (lazy evaluation)
    // Call the getter functions to actually create the reducers
    // This ensures createReducer (Immer) is only called when store is being created, not at module load
    const homeReducer = require('./slices/homeSlice').default;
    const productsReducer = require('./slices/productsSlice').default;
    const productDetailReducer = require('./slices/productDetailSlice').default;
    const cartReducer = require('./slices/cartSlice').default;

    // Combine all ecommerce module reducers
    // Note: RTK Query API reducers should be added at the root level, not here
    ecommerceReducer = combineReducers({
      home: homeReducer,
      products: productsReducer,
      productDetail: productDetailReducer,
      cart: cartReducer,
    }) as unknown as ReturnType<typeof combineReducers>;
  }
  return ecommerceReducer;
};

// Export getter function - reducer is created on first access
// This ensures reducer creation happens after app registration
export default createEcommerceReducer;

// Re-export everything from exports.ts for convenience
// This provides a clean API while maintaining lazy loading
// All action creators, selectors, and hooks are available from this index
export * from './exports';

