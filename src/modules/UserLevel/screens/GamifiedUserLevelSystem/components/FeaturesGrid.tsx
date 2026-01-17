/* eslint-disable react-native/no-raw-text */
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { cardShadow } from './cardShadow';

type Feature = { label: string; highlight?: boolean; locked?: boolean };

type Props = {
  features: Feature[];
  onPressFeature?: (feature: Feature) => void;
};

// Map labels to local asset icons
const iconMap: Record<string, any> = {
  Hotel: require('../../../assets/hotel.png'),
  Car: require('../../../assets/car.png'),
  Tour: require('../../../assets/tour.png'),
  Doctor: require('../../../assets/doctor.png'),
  Fees: require('../../../assets/hand.png'),
  Flight: require('../../../assets/flight.png'),
  Services: require('../../../assets/hotel.png'),
};

const lockIcon = require('../../../assets/key.png');
const palette = {
  borderActive: '#36d97f',
  borderNeutral: '#f3f4f7',
  bgLocked: 'rgba(65,65,65,0.25)',
  bgDefault: '#ffffff',
  iconBgLocked: '#C5C5C5',
  iconBg: '#f1f7f5',
};

export default function FeaturesGrid({ features, onPressFeature }: Props) {
  return (
    <View className="mb-6">
      <Text className="text-[24px] font-bold text-[#242424] mb-[30px]">App Features</Text>
      <View className="flex-row flex-wrap justify-between">
        {features.map((f, idx) => {
          const locked = !!f.locked;
          const borderColor = f.highlight ? palette.borderActive : palette.borderNeutral;
          const backgroundColor = palette.bgDefault;
          const iconBg = locked ? palette.iconBgLocked : palette.iconBg;
          const iconOpacity = locked ? 0.8 : 1;

          return (
            <TouchableOpacity
              key={f.label + idx}
              activeOpacity={0.8}
              onPress={() => onPressFeature?.(f)}
              className="w-[48%] mb-4 rounded-[14px] border py-[18px] items-center"
              style={{
                borderColor: locked ? palette.bgLocked : borderColor,
                backgroundColor: locked ? palette.bgLocked : backgroundColor,
                ...cardShadow,
              }}
            >
              {locked && (
                <View className="absolute inset-0 rounded-[14px]" style={{ backgroundColor: 'rgba(65,65,65,0.25)' }} pointerEvents="none" />
              )}
              <View className="w-12 h-12 rounded-full mb-2 items-center justify-center" style={{ backgroundColor: iconBg }}>
                {iconMap[f.label] ? (
                  <Image source={iconMap[f.label]} className="w-8 h-8" resizeMode="contain" style={{ opacity: iconOpacity }} />
                ) : (
                  <Text className="text-base text-[#242424]" style={{ opacity: iconOpacity }}>
                    ★
                  </Text>
                )}
              </View>
              <Text className="text-[17px] font-semibold text-[#242424]" style={{ opacity: iconOpacity }}>
                {f.label}
              </Text>
              {locked && (
                <Image source={lockIcon} className="w-5 h-5 absolute right-3 top-3" resizeMode="contain" />
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}