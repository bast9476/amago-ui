import { combineReducers } from '@reduxjs/toolkit';

// Lazy load reducers to avoid evaluation at module load time
// This prevents Hermes "property is not configurable" errors
let flightReducer: ReturnType<typeof combineReducers> | null = null;

const createFlightReducer = () => {
  if (!flightReducer) {
    // Import reducer getters only when needed (lazy evaluation)
    // Call the getter functions to actually create the reducers
    // This ensures createReducer (Immer) is only called when store is being created, not at module load
    const flightSliceReducer = require('./slices/flightSlice').default;

    // Combine all flight module reducers
    // Note: RTK Query API reducers should be added at the root level, not here
    flightReducer = combineReducers({
      flight: flightSliceReducer,
    }) as unknown as ReturnType<typeof combineReducers>;
  }
  return flightReducer;
};

// Export getter function - reducer is created on first access
// This ensures reducer creation happens after app registration
export default createFlightReducer;

// Re-export everything from exports.ts for convenience
// This provides a clean API while maintaining lazy loading
// All action creators, selectors, and hooks are available from this index
export * from './exports';
