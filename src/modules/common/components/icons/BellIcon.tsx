import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface BellIconProps {
  size?: number;
  color?: string;
}

export default function BellIcon({ size = 20, color = 'white' }: BellIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        d="M10 2C8.34315 2 7 3.34315 7 5V8.58579C7 9.11622 6.78929 9.62493 6.41421 10L4 12.4142V14H16V12.4142L13.5858 10C13.2107 9.62493 13 9.11622 13 8.58579V5C13 3.34315 11.6569 2 10 2Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 16H12"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

