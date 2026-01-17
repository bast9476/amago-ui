import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface ShareIconProps {
  size?: number;
  color?: string;
}

export default function ShareIcon({ size = 24, color = '#242424' }: ShareIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M11.9921 1.99878V14.9902"
        stroke={color}
        strokeWidth={1.99868}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.9894 5.99614L11.9921 1.99878L7.99472 5.99614"
        stroke={color}
        strokeWidth={1.99868}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.99734 11.9922V19.9869C3.99734 20.517 4.20792 21.0254 4.58274 21.4002C4.95757 21.775 5.46594 21.9856 5.99602 21.9856H17.9881C18.5182 21.9856 19.0266 21.775 19.4014 21.4002C19.7762 21.0254 19.9868 20.517 19.9868 19.9869V11.9922"
        stroke={color}
        strokeWidth={1.99868}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

