import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Rect } from 'react-native-svg';

const discountBackground = require('@modules/home/assets/discount.png');

export default function PromotionalCard() {
  return (
    <View className="px-6 mt-6">
      <View
        className="relative rounded-[17.59px] overflow-hidden w-full"
        style={{
          aspectRatio: 343 / 166.28,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 6.16 },
          shadowOpacity: 0.14,
          shadowRadius: 13.19,
          elevation: 4,
        }}
      >
        {/* Gradient Background */}
        <Svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <Defs>
            <LinearGradient
              id="cardGradient"
              x1="0%"
              y1="100%"
              x2="100%"
              y2="0%"
              gradientUnits="userSpaceOnUse"
            >
              <Stop offset="0%" stopColor="#07b556" />
              <Stop offset="100%" stopColor="#013a1a" />
            </LinearGradient>
          </Defs>
          <Rect width="100" height="100" fill="url(#cardGradient)" />
        </Svg>

        {/* Background Image */}
        <Image
          source={discountBackground}
          className="absolute w-full h-full right-0 top-0 rounded-[17.59px]"
          resizeMode="cover"
        />

        {/* Content Container */}
        <View className="flex-1 flex-row items-center justify-between px-10 pt-2">
          {/* Left: Text Content */}
          <View className="flex-col items-start flex-1">
            <View className="flex-col items-start mb-6">
              <Text className="text-white text-[12px] font-bold mb-1">
                BLACK FRIYAY
              </Text>
              <Text className="text-3xl text-[#06b555] font-bold mb-1">
                20% off
              </Text>
              <Text className="text-white text-[15px] font-semibold">
                all products
              </Text>
            </View>

            {/* Button */}
            <TouchableOpacity
              activeOpacity={0.8}
              className="px-3.5 rounded-[8px] items-center justify-center overflow-hidden relative"
              style={{ minWidth: 68, minHeight: 36, borderRadius: 7.04 }}
            >
              <Svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <Defs>
                  <LinearGradient
                    id="buttonGradient"
                    x1="0%"
                    y1="100%"
                    x2="100%"
                    y2="0%"
                    gradientUnits="userSpaceOnUse"
                  >
                    <Stop offset="57.95%" stopColor="#07b556" />
                    <Stop offset="124.21%" stopColor="#36d97f" />
                  </LinearGradient>
                </Defs>
                <Rect
                  width="100"
                  height="100"
                  fill="url(#buttonGradient)"
                />
              </Svg>
              <Text className="text-white text-[15px] font-semibold relative z-10">
                Get
              </Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </View>
  );
}

