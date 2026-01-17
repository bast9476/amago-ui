import { combineReducers } from '@reduxjs/toolkit';

// Lazy load reducers to avoid evaluation at module load time
// This prevents Hermes "property is not configurable" errors
let onboardingReducer: ReturnType<typeof combineReducers> | null = null;

const createOnboardingReducer = () => {
  if (!onboardingReducer) {
    // Import reducer getters only when needed (lazy evaluation)
    // Call the getter functions to actually create the reducers
    // This ensures createReducer (Immer) is only called when store is being created, not at module load
    const onboardingSliceReducer = require('./slices/onboardingSlice').default;

    // Combine all onboarding module reducers
    onboardingReducer = combineReducers({
      onboarding: onboardingSliceReducer,
    }) as unknown as ReturnType<typeof combineReducers>;
  }
  return onboardingReducer;
};

// Export getter function - reducer is created on first access
// This ensures reducer creation happens after app registration
export default createOnboardingReducer;

// Re-export everything from exports.ts for convenience
// This provides a clean API while maintaining lazy loading
// All action creators, selectors, and hooks are available from this index
export * from './exports';

