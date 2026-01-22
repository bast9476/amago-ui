import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Path, G, ClipPath, Rect, Defs } from 'react-native-svg';
import { usePaymentDetails } from '../hooks/usePaymentDetails';

// Info Icon (Circle with i)
const InfoIconCircle = () => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
    <G clipPath="url(#clip0_info)">
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
      <ClipPath id="clip0_info">
        <Rect width={15.9894} height={15.9894} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default function BalanceAndFeeSection() {
  const { availableBalance, dailyLimitLeft, feeEstimate, total, pointsEarned } = usePaymentDetails();
  return (
    <View
      className="w-full rounded-2xl bg-white border border-[#f3f4f7] p-4 mt-[40px] shadow-sm"
      style={{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
      }}
    >
      <View className="gap-3">
        <View className="flex-row justify-between items-center">
          <Text className="text-[19px] text-[#8b8b8b]">Available balance</Text>
          <Text className="text-[18px] font-medium text-[#242424]">{availableBalance}</Text>
        </View>
        <View className="flex-row justify-between items-center">
          <Text className="text-[19px] text-[#8b8b8b]">Daily limit left</Text>
          <Text className="text-[18px] font-medium text-[#242424]">{dailyLimitLeft}</Text>
        </View>
        <View className="flex-row justify-between items-center">
          <Text className="text-[19px] text-[#8b8b8b]">Fee estimate</Text>
          <Text className="text-[18px] font-medium text-[#fb2c36]">{feeEstimate}</Text>
        </View>
      </View>

      <View className="border-t border-[#f3f4f7] mt-4 pt-4">
        <View className="flex-row justify-between items-center">
          <Text className="text-[19px] text-[#424242]">Total</Text>
          <Text className="text-[18px] font-semibold text-[#242424]">{total}</Text>
        </View>
      </View>

      <View className="mt-4 p-3 rounded-[10px] bg-[#d9f2e5]">
        <View className="flex-row justify-between items-center">
          <View className="flex-row items-center gap-2">
            
            <Text className="text-[19px] font-medium text-[#242424]">💎 You earn</Text>
          </View>
          <View className="flex-row items-center">
            <Text className="text-[19px] font-medium text-[#242424] mr-2">{pointsEarned}</Text>
            <InfoIconCircle />
          </View>
        </View>
      </View>
    </View>
  );
}
