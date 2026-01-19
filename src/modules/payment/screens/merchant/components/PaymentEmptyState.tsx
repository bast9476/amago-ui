import React from 'react';
import { Image, Text, View } from 'react-native';

const scanIcon = require('@modules/payment/assets/scan.png');

export default function PaymentEmptyState() {
  return (
    <View className="mt-[70px] items-center mb-[65px]">
      <View className="w-[80px] h-[80px] rounded-[18px] items-center justify-center">
        <Image source={scanIcon} resizeMode="contain" />
      </View>
      <Text className="text-[18px] font-medium text-[#8b8b8b] mt-[10px]">Search a merchant or scan QR.</Text>
    </View>
  );
}
