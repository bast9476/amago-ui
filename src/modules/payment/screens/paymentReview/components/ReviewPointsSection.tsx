import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Path, G, ClipPath, Rect, Defs } from 'react-native-svg';
import { usePaymentReview } from '../hooks';

// Info Icon Circle
const InfoIconCircle = () => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
    <G clipPath="url(#clip0_points)">
      <Path
        d="M7.99472 14.6566C11.6742 14.6566 14.657 11.6738 14.657 7.9943C14.657 4.31483 11.6742 1.33203 7.99472 1.33203C4.31526 1.33203 1.33246 4.31483 1.33246 7.9943C1.33246 11.6738 4.31526 14.6566 7.99472 14.6566Z"
        stroke="#242424"
        strokeWidth={1.33245}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.99472 10.659V7.99414"
        stroke="#242424"
        strokeWidth={1.33245}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.99472 5.33008H8.00138"
        stroke="#242424"
        strokeWidth={1.33245}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_points">
        <Rect width={15.9894} height={15.9894} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default function ReviewPointsSection() {
  const { pointsEarned } = usePaymentReview();

  return (
    <View className="w-full mb-6 p-3 rounded-[10px] bg-[#d9f2e5]">
      <View className="flex-row justify-between items-center">
        <View className="flex-row items-center gap-2">
          <Text className="text-[16px] font-medium text-[#242424]">💎 You earn</Text>
        </View>
        <View className="flex-row items-center">
          <Text className="text-[16px] font-medium mr-2 text-[#242424]">{pointsEarned}</Text>
          <InfoIconCircle />
        </View>
      </View>
    </View>
  );
}
