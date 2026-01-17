import React from 'react';
import { View, ViewStyle } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

export interface PaginationDotsProps {
  count: number;
  activeIndex: number;

  /**
   * Optional: allow callers to position the dots.
   */
  className?: string;
  style?: ViewStyle;

  /**
   * Optional: tweak visuals if needed.
   */
  activeColor?: string; // default green
  inactiveColor?: string; // default gray
}

export default function PaginationDots({
  count,
  activeIndex,
  className,
  style,
  activeColor = '#00A551',
  inactiveColor = '#CFCFCF',
}: PaginationDotsProps) {
  const safeCount = Math.max(0, count);
  const safeActive = Math.min(Math.max(0, activeIndex), Math.max(0, safeCount - 1));

  return (
    <View className={`flex-row items-center ${className ?? ''}`} style={style}>
      {Array.from({ length: safeCount }).map((_, index) => {
        const isActive = index === safeActive;

        if (isActive) {
          return (
            <View
              key={`dot-${index}`}
              className={`${index === 0 ? 'ml-0' : 'ml-1'} rounded-sm`}
              style={{
                width: 16,
                height: 4,
                backgroundColor: activeColor,
              }}
            />
          );
        }

        return (
          <Svg
            key={`dot-${index}`}
            className={`${index === 0 ? 'ml-0' : 'ml-1'}`}
            width={6}
            height={6}
            viewBox="0 0 6 6"
            fill="none"
          >
            <Circle cx="3" cy="3" r="3" fill={inactiveColor} />
          </Svg>
        );
      })}
    </View>
  );
}


