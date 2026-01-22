import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { usePaymentReview } from '../hooks';

export default function ReviewTotalSection() {
  const { total, handleChangeAmount } = usePaymentReview();

  return (
    <View className="w-full mb-6">
      <View className="border-t border-[#f3f4f7] pt-4 mb-2">
        <View className="flex-row justify-between items-center mb-2">
          <Text className="text-[16px] font-medium text-[#242424]">Total</Text>
          <Text className="text-[17px] font-semibold text-[#242424]">{total}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={handleChangeAmount}>
        <Text className="text-[16px] text-center text-[#00a551]">Change amount</Text>
      </TouchableOpacity>
    </View>
  );
}
