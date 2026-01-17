import React from 'react';
import { View } from 'react-native';

export interface PaginationDotsProps {
  totalSlides: number;
  currentIndex: number;
}

export default function PaginationDots({ totalSlides, currentIndex }: PaginationDotsProps) {
  return (
    <View className="flex-row items-center justify-center gap-2 mb-6">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <View
          key={index}
          className={`h-2 rounded-full ${
            index === currentIndex
              ? 'w-8 bg-[#07B556]'
              : 'w-2 bg-neutral-300'
          }`}
        />
      ))}
    </View>
  );
}

