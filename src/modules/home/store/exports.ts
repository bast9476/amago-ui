/**
 * Centralized exports for the home module store.
 *
 * This mirrors the structure of the digital and ecommerce module stores.
 */

// Export all action creators from slices
export { setWelcomeMessage } from './slices/homeSlice';
export { hydrateHomeContent } from './slices/contentSlice';

// Export bootstrap thunks
export { bootstrapHomeData } from './bootstrap';

// Export selectors
export * from './selectors/homeSelectors';

// Export RTK Query hooks getters
// Usage: const { useGetHomeSummaryQuery } = getHomeApiHooks();
export { getHomeApiHooks } from './api/homeApi';

// Export types
export * from './types';


