import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface SearchIconProps {
  size?: number;
  color?: string;
}

export default function SearchIcon({ size = 20, color = '#99A1AF' }: SearchIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        d="M17.4884 17.4893L13.8741 13.875"
        stroke={color}
        strokeWidth={1.66557}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.16062 15.8245C12.8401 15.8245 15.8229 12.8417 15.8229 9.16227C15.8229 5.4828 12.8401 2.5 9.16062 2.5C5.48115 2.5 2.49835 5.4828 2.49835 9.16227C2.49835 12.8417 5.48115 15.8245 9.16062 15.8245Z"
        stroke={color}
        strokeWidth={1.66557}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

