/**
 * Centralized exports for the onboarding module store
 * 
 * This file provides a clean, organized way to import Redux Toolkit features
 * while maintaining Hermes compatibility through lazy loading.
 * 
 * Usage:
 *   import { setCurrentIndex, selectOnboardingSlides } from '@modules/onboarding/store';
 */

// Export all action creators from slices
export { setSlides, setCurrentIndex, setCompleted, resetOnboarding } from './slices/onboardingSlice';

// Export all selectors
export * from './selectors/onboardingSelectors';

// Export bootstrap functions
export { bootstrapOnboardingData } from './bootstrap';

// Export types
export * from './types';

