import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Svg, { Path, Defs, Rect, LinearGradient, Stop } from 'react-native-svg';

export type NeedSomethingDoneCardProps = {
  onPress?: () => void;
};

const NeedSomethingDoneCard: React.FC<NeedSomethingDoneCardProps> = ({ onPress }) => (
  <View className="rounded-2xl border border-[#A4F4CF] items-center relative overflow-hidden flex-1">
    <View className="absolute top-[0] left-[0] right-[0] bottom-[0] rounded-2xl overflow-hidden">
      <Svg className="absolute top-[0] left-[0] right-[0] bottom-[0]" viewBox="0 0 100 100" preserveAspectRatio="none">
        <Defs>
          <LinearGradient id="needDoneGradient" x1="0" y1="100" x2="100" y2="0" gradientUnits="userSpaceOnUse">
            <Stop offset={0.5795} stopColor="#07B556" />
            <Stop offset={1.2421} stopColor="#36D97F" />
          </LinearGradient>
        </Defs>
        <Rect width="100" height="100" fill="url(#needDoneGradient)" />
      </Svg>
    </View>
    <View className="w-full items-center px-6 py-[50] z-[1]">
      <Text className="text-[22px] font-[500] text-white text-center">Need something done?</Text>
      <Text className="mt-4 text-[14px] font-[400] text-white text-center max-w-[330px]" style={{ lineHeight: 23 }}>
        Post a job and get proposals from skilled freelancers. Your payment is protected by escrow.
      </Text>
      <TouchableOpacity
        activeOpacity={0.85}
        className="mt-8 w-full max-w-[315px] h-[44px] bg-[#242424] rounded-[10px] justify-center items-center"
        onPress={onPress}
      >
        <View className="flex-row items-center justify-center gap-3">
          <Svg width={18} height={18} viewBox="0 0 16 16" fill="none">
            <Path d="M3.33105 7.99609H12.6583" stroke="white" strokeWidth={1.33245} strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M7.99463 3.33203V12.6592" stroke="white" strokeWidth={1.33245} strokeLinecap="round" strokeLinejoin="round" />
          </Svg>
          <Text className="text-[15px] text-white">Post a Job</Text>
        </View>
      </TouchableOpacity>
    </View>
  </View>
);

export default NeedSomethingDoneCard;



