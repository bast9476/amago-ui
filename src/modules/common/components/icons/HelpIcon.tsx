import React from 'react';
import Svg, { Path, G, ClipPath, Rect, Defs } from 'react-native-svg';

interface HelpIconProps {
  size?: number;
  color?: string;
}

export default function HelpIcon({ size = 19, color = 'white' }: HelpIconProps) {
  return (
    <Svg width={'100%'} height={'100%'} viewBox="0 0 19 19" fill="none">
      <G clipPath="url(#clip0_1060_5012)">
        <Path
          d="M9.50004 17.4154C13.8723 17.4154 17.4167 13.871 17.4167 9.4987C17.4167 5.12644 13.8723 1.58203 9.50004 1.58203C5.12779 1.58203 1.58337 5.12644 1.58337 9.4987C1.58337 13.871 5.12779 17.4154 9.50004 17.4154Z"
          stroke={color}
          strokeWidth={1.58333}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M7.19623 7.12203C7.38235 6.59294 7.74972 6.14678 8.23328 5.8626C8.71683 5.57841 9.28535 5.47453 9.83816 5.56935C10.391 5.66417 10.8924 5.95157 11.2536 6.38066C11.6148 6.80975 11.8125 7.35282 11.8116 7.9137C11.8116 9.49703 9.43664 10.2887 9.43664 10.2887"
          stroke={color}
          strokeWidth={1.58333}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M9.5 13.4531H9.50792"
          stroke={color}
          strokeWidth={1.58333}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1060_5012">
          <Rect width={19} height={19} fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

