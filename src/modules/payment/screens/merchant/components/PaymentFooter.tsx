import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';
import { useAppSelector } from '@src/store/hooks';
import { selectSelectedMerchant } from '@modules/payment/store';
import { merchantLogos } from '@modules/payment/store/initialData';

export default function PaymentFooter() {
  const selectedMerchant = useAppSelector(selectSelectedMerchant);
  const fallbackLogo = merchantLogos.biman;

  return (
    <View
      className="bg-white border-t border-[#f3f4f7] px-4 py-8"
      style={{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -8 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
        elevation: 8,
      }}
    >
      <View className="flex-row items-center gap-3">
        <View className="flex-1 h-[48px] rounded-[14px] bg-slate-100 px-3 justify-center">
          <View className="flex-row items-center gap-3">
            <Image
              source={selectedMerchant?.logo || fallbackLogo}
              className="w-[32px] h-[29px] rounded-[5px]"
              resizeMode="cover"
            />
            <Text className="text-[14px] font-medium text-[#242424]" numberOfLines={1}>
              {selectedMerchant?.name + ' Bangladesh Airlines' || 'Select a merchant'}
            </Text>
          </View>
        </View>
        <TouchableOpacity className="w-[106px] h-[44px] rounded-[14px] overflow-hidden" activeOpacity={0.8}>
          <View style={StyleSheet.absoluteFill} pointerEvents="none">
            <Svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <Defs>
                <LinearGradient id="payBtnGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <Stop offset="0%" stopColor="#00a63e" />
                  <Stop offset="100%" stopColor="#00c950" />
                </LinearGradient>
              </Defs>
              <Rect width="100" height="100" rx={14} fill="url(#payBtnGradient)" />
            </Svg>
          </View>
          <View className="flex-1 items-center justify-center">
            <Text className="text-[14px] font-semibold text-white">Continue</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
