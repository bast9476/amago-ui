import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface BackIconProps {
  size?: number;
  color?: string;
}

export default function BackIcon({ size = 18, color = '#242424' }: BackIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <Path
        d="M8.99864 14.2484L3.74945 8.99919L8.99864 3.75"
        stroke={color}
        strokeWidth={1.49977}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.2478 9H3.74945"
        stroke={color}
        strokeWidth={1.49977}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

