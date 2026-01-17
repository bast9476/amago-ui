import type { AppDispatch, RootState } from '@src/store/index';
import type { ThunkAction, AnyAction } from '@reduxjs/toolkit';
import { getInitialOnboardingSlides } from './initialData';
import { setSlides } from './slices/onboardingSlice';

type OnboardingThunk = ThunkAction<void, RootState, unknown, AnyAction>;

type OnboardingStateAccessor = RootState & { onboarding: any };

const selectOnboardingState = (state: RootState) => (state as OnboardingStateAccessor).onboarding ?? {};

export const bootstrapOnboardingData = (): OnboardingThunk => (dispatch, getState) => {
  const onboarding = selectOnboardingState(getState());
  const isHydrated = onboarding?.initialized;

  if (isHydrated) {
    return;
  }

  dispatch(setSlides(getInitialOnboardingSlides()));
};

