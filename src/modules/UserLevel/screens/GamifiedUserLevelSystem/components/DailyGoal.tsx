import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Rect, Path } from 'react-native-svg';

type Props = {
  onAddPoints: () => void;
};

const TrendUpIcon = () => (
  <Svg width={42} height={42} viewBox="0 0 42 42" fill="none">
    <Path
      d="M28.0005 12.25H38.5007V22.7502"
      stroke="white"
      strokeWidth={3.50007}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M38.5007 12.25L23.6254 27.1253L14.8753 18.3751L3.50006 29.7503"
      stroke="white"
      strokeWidth={3.50007}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default function DailyGoal({ onAddPoints }: Props) {
  return (
    <Pressable
      onPress={onAddPoints}
      className="rounded-[14px] overflow-hidden mb-4"
      android_ripple={{ color: 'rgba(255,255,255,0.12)' }}
    >
      <View className="w-full">
        <Svg width="100%" height={140} viewBox="0 0 342 140" preserveAspectRatio="none" className="absolute inset-0 px-[17px] py-[20px]">
          <Defs>
            <LinearGradient id="dailyGoalBg" x1="0%" y1="100%" x2="100%" y2="0%">
              <Stop offset="57.95%" stopColor="#07B556" />
              <Stop offset="124.21%" stopColor="#36D97F" />
            </LinearGradient>
          </Defs>
          <Rect width="100%" height="100%" rx={14} fill="url(#dailyGoalBg)" />
        </Svg>

        <View className="items-center gap-1 px-[17px] py-[20px] flex-row">
          <View className="w-[42px] h-[42px] items-center justify-center mr-2">
            <TrendUpIcon />
          </View>
          <View className="flex-1">
            <Text className="text-xl font-bold text-white">Daily Goal</Text>
            <Text className="text-[14px] text-white/80 mt-1">
              Just 1 more outlet to become Platinum Introducer!
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}