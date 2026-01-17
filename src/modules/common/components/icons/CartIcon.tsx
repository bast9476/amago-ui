import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

interface CartIconProps {
  size?: number;
  color?: string;
}

/**
 * Cart icon component matching Figma design
 * 
 * From Figma:
 * - SVG size: 29.66px × 29.66px (viewBox: 0 0 30 30)
 * - Container: 30.15px × 35px (includes space for badge)
 * - White circle background
 * - Cart paths with stroke
 */
export default function CartIcon({ size = 29.66, color = '#242424' }: CartIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 30 30" fill="none" preserveAspectRatio="none">
      <Circle cx="14.8311" cy="14.8311" r="14.8311" fill="white" />
      <Path
        d="M18.9258 17.5935H12.8027L11.0018 9.74951H9.92123M11.362 11.2436H20.0064L18.9258 16.0994H12.4425L11.362 11.2436Z"
        stroke={color}
        strokeWidth="0.711893"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.2055 19.8344C18.6033 19.8344 18.9258 19.5 18.9258 19.0874C18.9258 18.6748 18.6033 18.3403 18.2055 18.3403C17.8076 18.3403 17.4851 18.6748 17.4851 19.0874C17.4851 19.5 17.8076 19.8344 18.2055 19.8344Z"
        stroke={color}
        strokeWidth="0.711893"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.5231 19.8344C13.921 19.8344 14.2435 19.5 14.2435 19.0874C14.2435 18.6748 13.921 18.3403 13.5231 18.3403C13.1253 18.3403 12.8028 18.6748 12.8028 19.0874C12.8028 19.5 13.1253 19.8344 13.5231 19.8344Z"
        stroke={color}
        strokeWidth="0.711893"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

