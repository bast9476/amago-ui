import React, { useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export interface ProductDetailsSectionProps {
  isExpanded: boolean;
  onToggle: () => void;
  details?: string[];
}

export function ProductDetailsSection({
  isExpanded,
  onToggle,
  details = [
    'Experience exceptional audio quality with the AirPods Pro Max. Featuring industry-leading Active Noise Cancellation, spatial audio for an immersive listening experience, and premium materials for maximum comfort.',
    'The custom-built driver delivers crisp highs and rich bass, while the computational audio combines hardware and software for breakthrough listening experiences.',
  ],
}: ProductDetailsSectionProps) {
  const rotateAnim = useRef(new Animated.Value(isExpanded ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(rotateAnim, {
      toValue: isExpanded ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [isExpanded]);

  const chevronRotation = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  return (
    <View className="flex-col items-start w-full overflow-hidden rounded-[14px] bg-gray-50 border-[1.22px] border-[#f3f4f7] mt-8">
      {/* Header */}
      <TouchableOpacity
        onPress={onToggle}
        className="flex-row justify-between items-center self-stretch px-4 py-4"
        activeOpacity={0.7}
      >
        <Text className="text-lg font-semibold text-left text-[#242424]">
          Product Details
        </Text>
        <Animated.View
          style={{
            transform: [{ rotate: chevronRotation }],
          }}
        >
          <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
            <Path
              d="M4.9967 7.49512L9.9934 12.4918L14.9901 7.49512"
              stroke="#99A1AF"
              strokeWidth={1.66557}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        </Animated.View>
      </TouchableOpacity>

      {/* Content - Collapsible */}
      {isExpanded && (
        <View className="flex-col items-start self-stretch px-4 pb-4 gap-4">
          {details.map((detail, index) => (
            <Text key={index} className="self-stretch text-base text-left text-[#6c6c6c]">
              {detail}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
}

