import React from 'react';
import { View, Text, Image, ImageSourcePropType } from 'react-native';

export interface PopularCategoryCardProps {
  title: string;
  jobs: string;
  color: string;
  icon: ImageSourcePropType;
}

export default function PopularCategoryCard({ title, jobs, color, icon }: PopularCategoryCardProps) {
  return (
    <View className="w-1/2 px-2 mb-4">
      <View
        className="rounded-2xl bg-white border border-neutral-100 px-6 py-10 shadow shadow-black/10"
      >
        <View className="w-[55px] h-[55px] rounded-[14px] items-center justify-center overflow-hidden" style={{ backgroundColor: color }}>
          <Image source={icon} className="w-full h-full" resizeMode="contain" />
        </View>
        <View className="mt-4">
          <Text className="text-[18px] font-medium text-black">{title}</Text>
          <Text className="text-[16px] text-neutral-500 mt-2">{jobs}</Text>
        </View>
      </View>
    </View>
  );
}



