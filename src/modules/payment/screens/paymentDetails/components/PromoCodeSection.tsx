import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';

interface PromoCodeSectionProps {
  promoCode: string;
  onPromoCodeChange: (code: string) => void;
  onApply: () => void;
}

export default function PromoCodeSection({
  promoCode,
  onPromoCodeChange,
  onApply,
}: PromoCodeSectionProps) {
  return (
    <View
      className="w-full rounded-2xl bg-white border border-[#f3f4f7] p-4 mt-[20px]"
      style={styles.cardShadow}
    >
      <View className="flex-row items-center gap-3">
        <View className="flex-1 h-11 px-3 py-1 rounded-[14px] bg-[#f3f3f5] border border-transparent">
          <TextInput
            value={promoCode}
            onChangeText={onPromoCodeChange}
            placeholder="Promo code"
            placeholderTextColor="#979797"
            className="text-[18px] font-medium text-[#979797]"
          />
        </View>
        <TouchableOpacity
          className="w-[75px] h-11 items-center justify-center rounded-[14px] px-4 py-2 overflow-hidden"
          onPress={onApply}
        >
          <View style={StyleSheet.absoluteFill} pointerEvents="none">
            <Svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <Defs>
                <LinearGradient id="applyBtnGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <Stop offset="0%" stopColor="#07b556" />
                  <Stop offset="100%" stopColor="#36d97f" />
                </LinearGradient>
              </Defs>
              <Rect width="100" height="100" rx={14} fill="url(#applyBtnGradient)" />
            </Svg>
          </View>
          <Text className="text-sm font-semibold text-white">Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
});
