import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@src/store/index';

// Base selectors
type OnboardingStateAccessor = RootState & { onboarding: any };

const selectOnboardingState = (state: RootState) => (state as OnboardingStateAccessor).onboarding;

// Onboarding Selectors
export const selectOnboardingSlides = createSelector(
  [selectOnboardingState],
  (onboarding) => onboarding?.slides ?? []
);

export const selectCurrentIndex = createSelector(
  [selectOnboardingState],
  (onboarding) => onboarding?.currentIndex ?? 0
);

export const selectIsOnboardingCompleted = createSelector(
  [selectOnboardingState],
  (onboarding) => onboarding?.completed ?? false
);

export const selectIsOnboardingInitialized = createSelector(
  [selectOnboardingState],
  (onboarding) => onboarding?.initialized ?? false
);

