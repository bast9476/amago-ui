import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export interface OnboardingButtonsProps {
  currentIndex: number;
  totalSlides: number;
  onNext: () => void;
  onSkip: () => void;
  onGetStarted: () => void;
}

export default function OnboardingButtons({
  currentIndex,
  totalSlides,
  onNext,
  onSkip,
  onGetStarted,
}: OnboardingButtonsProps) {
  const isLastSlide = currentIndex === totalSlides - 1;

  return (
    <View className="px-6 pb-8">
      {!isLastSlide && (
        <TouchableOpacity
          onPress={onSkip}
          className="mb-4"
          activeOpacity={0.7}
        >
          <Text className="text-[16px] font-medium text-neutral-600 text-center">
            Skip
          </Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity
        onPress={isLastSlide ? onGetStarted : onNext}
        className="h-[55px] rounded-[14px] bg-[#07B556] items-center justify-center"
        activeOpacity={0.8}
      >
        <Text className="text-[16px] font-semibold text-white">
          {isLastSlide ? 'Get Started' : 'Next'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

