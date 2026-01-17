import { combineReducers } from '@reduxjs/toolkit';

// Lazy load reducers to avoid evaluation at module load time
// This prevents Hermes "property is not configurable" errors
let digitalReducer: ReturnType<typeof combineReducers> | null = null;

const createDigitalReducer = () => {
  if (!digitalReducer) {
    // Import reducer getters only when needed (lazy evaluation)
    // Call the getter functions to actually create the reducers
    // This ensures createReducer (Immer) is only called when store is being created, not at module load
    const homeReducer = require('./slices/homeSlice').default;
    const categoriesReducer = require('./slices/categoriesSlice').default;
    const servicesReducer = require('./slices/servicesSlice').default;
    const providersReducer = require('./slices/providersSlice').default;
    const projectsReducer = require('./slices/projectsSlice').default;
    const projectsPageReducer = require('./slices/projectsPageSlice').default;
    const postJobReducer = require('./slices/postJobSlice').default;
    const messagesReducer = require('./slices/messagesSlice').default;
    const chatReducer = require('./slices/chatSlice').default;
    const becomeProviderReducer = require('./slices/becomeProviderSlice').default;

    // Combine all digital module reducers
    // Note: RTK Query API reducers should be added at the root level, not here
    digitalReducer = combineReducers({
      home: homeReducer,
      categories: categoriesReducer,
      services: servicesReducer,
      providers: providersReducer,
      projects: projectsReducer,
      projectsPage: projectsPageReducer,
      messages: messagesReducer,
      postJob: postJobReducer,
      chat: chatReducer,
      becomeProvider: becomeProviderReducer,
    }) as unknown as ReturnType<typeof combineReducers>;
  }
  return digitalReducer;
};

// Export getter function - reducer is created on first access
// This ensures reducer creation happens after app registration
export default createDigitalReducer;

// Re-export everything from exports.ts for convenience
// This provides a clean API while maintaining lazy loading
// All action creators, selectors, and hooks are available from this index
export * from './exports';

