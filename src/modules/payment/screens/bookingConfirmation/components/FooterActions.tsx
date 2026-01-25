import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';

interface FooterActionsProps {
  onBackToHome: () => void;
  onNewPayment: () => void;
}

export default function FooterActions({ onBackToHome, onNewPayment }: FooterActionsProps) {
  return (
    <View className="w-full border-t border-[#f3f4f7] px-4 pt-4 pb-6 bg-white">
      <View className="gap-y-3">
        <TouchableOpacity className="w-full h-[46px] rounded-[14px] overflow-hidden" activeOpacity={0.8} onPress={onBackToHome}>
          <View style={{ flex: 1 }}>
            <View style={{ ...StyleSheet.absoluteFillObject }} pointerEvents="none">
              <Svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                <Defs>
                  <LinearGradient id="footerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <Stop offset="0%" stopColor="#00a63e" />
                    <Stop offset="100%" stopColor="#00c950" />
                  </LinearGradient>
                </Defs>
                <Rect width="100" height="100" rx="7" fill="url(#footerGradient)" />
              </Svg>
            </View>
            <View className="flex-1 items-center justify-center">
              <Text className="text-sm font-semibold text-white">Back to Home</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          className="w-full h-[46px] rounded-[14px] bg-white border border-black/10 items-center justify-center"
          activeOpacity={0.8}
          onPress={onNewPayment}
        >
          <Text className="text-sm font-medium text-[#242424]">New Payment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
