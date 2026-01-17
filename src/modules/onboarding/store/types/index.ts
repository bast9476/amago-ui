import { ImageSourcePropType } from 'react-native';

// Onboarding Slide Data
export interface OnboardingSlide {
  id: string;
  title: string;
  description: string;
  image: ImageSourcePropType;
}

// Onboarding State
export interface OnboardingState {
  slides: OnboardingSlide[];
  currentIndex: number;
  completed: boolean;
  initialized: boolean;
}

