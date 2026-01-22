import React from 'react';
import { View, Text } from 'react-native';
import { usePaymentReview } from '../hooks';

export default function ReviewAmountSection() {
  const { amount, fee } = usePaymentReview();

  return (
    <View className="w-full mb-5">
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-[16px] text-[#606060]">Amount</Text>
        <Text className="text-[17px] font-semibold text-[#242424]">{amount}</Text>
      </View>
      <View className="flex-row justify-between items-center">
        <Text className="text-[16px] text-[#606060]">Fee</Text>
        <Text className="text-[17px] font-semibold text-[#fb2c36]">{fee}</Text>
      </View>
    </View>
  );
}
