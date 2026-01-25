import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop, Circle } from 'react-native-svg';

const CheckIcon = () => (
  <Svg width={35} height={35} viewBox="0 0 35 35" fill="none">
    <Path d="M29.1667 8.75L13.125 24.7917L5.83337 17.5" stroke="white" strokeWidth={4.375} />
  </Svg>
);

interface SuccessSummaryCardProps {
  title: string;
  totalPaid: string;
}

export default function SuccessSummaryCard({ title, totalPaid }: SuccessSummaryCardProps) {
  return (
    <View
      className="w-full rounded-2xl bg-white border border-[#f3f4f7] px-6 py-8 items-center"
      style={{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
      }}
    >
      <View className="items-center gap-8">
        <View className="w-[70px] h-[70px] items-center justify-center">
          <Svg width={70} height={70} viewBox="0 0 70 70" fill="none">
            <Defs>
              <LinearGradient id="checkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <Stop offset="0%" stopColor="#00c950" />
                <Stop offset="100%" stopColor="#00a63e" />
              </LinearGradient>
            </Defs>
            <Circle cx="35" cy="35" r="35" fill="url(#checkGradient)" />
          </Svg>
          <View className="absolute items-center justify-center">
            <CheckIcon />
          </View>
          <View className="absolute -z-10">
            <Svg width={103} height={103} viewBox="0 0 103 103" fill="none">
              <Circle cx="51.5" cy="51.5" r="52.5" fill="#00c950" opacity={0.1} />
            </Svg>
          </View>
        </View>
        <View className="items-center gap-3">
          <Text className="text-[27px] text-center text-[#616161]">{title}</Text>
          <Text className="text-[32px] font-semibold text-center text-[#242424]">{totalPaid}</Text>
        </View>
      </View>
    </View>
  );
}
