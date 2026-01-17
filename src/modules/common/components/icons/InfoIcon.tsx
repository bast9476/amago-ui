import React from 'react';
import Svg, { Path, G, ClipPath, Rect, Defs } from 'react-native-svg';

interface InfoIconProps {
  size?: number;
  color?: string;
}

export default function InfoIcon({ size = 17, color = '#242424' }: InfoIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 17 17" fill="none" preserveAspectRatio="none">
      <G clipPath="url(#clip0_1250_6626)">
        <Path
          d="M8.01614 14.6951C11.7054 14.6951 14.6962 11.7043 14.6962 8.01504C14.6962 4.32573 11.7054 1.33496 8.01614 1.33496C4.32683 1.33496 1.33606 4.32573 1.33606 8.01504C1.33606 11.7043 4.32683 14.6951 8.01614 14.6951Z"
          stroke={color}
          strokeWidth="1.33602"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M8.01611 10.6869V8.01489"
          stroke={color}
          strokeWidth="1.33602"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M8.01611 5.34375H8.02278"
          stroke={color}
          strokeWidth="1.33602"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1250_6626">
          <Rect width="16.0322" height="16.0322" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

