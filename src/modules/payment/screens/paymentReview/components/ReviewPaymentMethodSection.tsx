import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { usePaymentReview } from '../hooks';

export default function ReviewPaymentMethodSection() {
  const { paymentMethod, handleChangePaymentMethod } = usePaymentReview();

  if (!paymentMethod) return null;

  return (
    <View className="w-full mb-8 border-t border-[#f3f4f7] pt-2">
      <View className="flex-row justify-between items-center">
        <View className="flex-row items-center gap-4">
          <View className="w-[28px] h-[32px] relative">
            <Image
              source={paymentMethod.logo}
              className="w-full h-full"
              resizeMode="contain"
            />
            <View className="absolute inset-0 bg-[#00a551] opacity-20" />
          </View>
          <View className="gap-1">
            <Text className="text-[16px] font-semibold text-[#00a551]">{paymentMethod.name} Pay</Text>
            <Text className="text-[17px] text-[#62748e]">01•••••23</Text>
          </View>
        </View>
        <TouchableOpacity onPress={handleChangePaymentMethod}>
          <Text className="text-[15x] font-medium text-[#00a551]">Change</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
