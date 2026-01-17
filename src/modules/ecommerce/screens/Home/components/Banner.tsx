import React from 'react';
import { View, Image, ImageSourcePropType } from 'react-native';

interface BannerProps {
  source: ImageSourcePropType;
  height?: number;
}

export function Banner({ source, height = 150 }: BannerProps) {
  return (
    <View className="px-4 pt-8">
      <View className="rounded-[15px] overflow-hidden mb-4">
        <Image source={source} style={{ width: '100%', height }} />
      </View>
    </View>
  );
}


