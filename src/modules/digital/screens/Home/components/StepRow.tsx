import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Rect } from 'react-native-svg';

export interface StepRowProps {
  index: number;
  title: string;
  description: string;
  cardIndex?: number;
}

export default function StepRow({ index, title, description, cardIndex = 0 }: StepRowProps) {
  const gradientId = `howItWorksCircle_${cardIndex}_${index}`;
  return (
    <View className={`flex-row items-start gap-[15px] ${index === 0 ? '' : 'mt-2'}`}>
      <View className="w-[36px] h-[36px] rounded-full items-center justify-center overflow-hidden">
        <Svg width={36} height={36} viewBox="0 0 36 36" className="absolute left-0 top-0">
          <Defs>
            <LinearGradient id={gradientId} x1="0" y1="36" x2="36" y2="0" gradientUnits="userSpaceOnUse">
              <Stop offset="0.58" stopColor="#07b556" />
              <Stop offset="1" stopColor="#36d97f" />
            </LinearGradient>
          </Defs>
          <Rect width={36} height={36} rx={16} fill={`url(#${gradientId})`} />
        </Svg>
        <Text className="text-base text-white font-medium  z-[1]">{index + 1}</Text>
      </View>
      <View className="flex-1">
        <Text className="text-[18px] font-medium text-black" numberOfLines={1}>{title}</Text>
        <Text className="text-[16px] text-[#242424] opacity-60 mt-[1px]">{description}</Text>
      </View>
    </View>
  );
}
