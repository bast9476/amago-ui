import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BackIcon, InfoIcon, ICON_SIZES } from '@modules/common/components/icons';

export default function PaymentHeader() {
  const navigation = useNavigation();

  return (
    <View className="bg-white border-b border-[#f3f4f7] h-[65px] px-4">
      <View className="flex-1 justify-center">
        <Text className="absolute left-0 right-0 text-center text-[18px] font-semibold text-[#242424]">
          Merchant
        </Text>
        <View className="flex-row items-center justify-between">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="w-[30px] h-[30px] items-center justify-center rounded-full bg-white"
            style={{
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 3 },
              shadowOpacity: 0.1,
              shadowRadius: 4.5,
              elevation: 3,
            }}
          >
            <BackIcon size={ICON_SIZES.HEADER_BACK_ICON} color="#242424" />
          </TouchableOpacity>
          <TouchableOpacity className="w-10 h-10 items-center justify-center rounded-[8px]">
            <InfoIcon size={ICON_SIZES.HEADER_RIGHT_ICON} color="#242424" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
