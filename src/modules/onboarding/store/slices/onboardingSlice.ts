import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OnboardingState } from '../types';

const initialState: OnboardingState = {
  slides: [],
  currentIndex: 0,
  completed: false,
  initialized: false,
};

const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    setSlides: (state, action: PayloadAction<OnboardingState['slides']>) => {
      state.slides = action.payload;
      state.initialized = true;
    },
    setCurrentIndex: (state, action: PayloadAction<number>) => {
      state.currentIndex = action.payload;
    },
    setCompleted: (state, action: PayloadAction<boolean>) => {
      state.completed = action.payload;
    },
    resetOnboarding: (state) => {
      state.currentIndex = 0;
      state.completed = false;
    },
  },
});

export const { setSlides, setCurrentIndex, setCompleted, resetOnboarding } = onboardingSlice.actions;

export default onboardingSlice.reducer;

