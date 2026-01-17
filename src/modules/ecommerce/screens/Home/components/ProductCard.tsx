import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageSourcePropType } from 'react-native';
import { FeaturedHeartIcon } from './HeartIcon';

export interface ProductCardProps {
  id: string;
  imageSource: ImageSourcePropType;
  title: string;
  description: string;
  price: string;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onPress?: (id: string) => void;
}

export function ProductCard({
  id,
  imageSource,
  title,
  description,
  price,
  isFavorite,
  onToggleFavorite,
  onPress,
}: ProductCardProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={() => onPress?.(id)}
      className="flex-row bg-neutral-50 rounded-[20.6px] mb-[17px] overflow-hidden"
    >
      {/* Product Image */}
      <View className="w-[100px] h-[108px] rounded-l-[20.6px] overflow-hidden">
        <Image source={imageSource} className="w-full h-full" resizeMode="cover" />
      </View>

      {/* Product Content */}
      <View className="flex-1 pl-3 pr-5 py-3 justify-between">
        <View className="flex-1">
          <Text className="text-[15px] font-bold text-[#242424] mb-1" numberOfLines={1}>
            {title}
          </Text>
          <Text className="text-xs opacity-80 text-[#242424] mb-2" numberOfLines={2}>
            {description}
          </Text>
        </View>

        {/* Price and Heart Icon Row */}
        <View className="flex-row items-center justify-between">
          <Text className="text-base font-medium text-[#242424]">{price}</Text>
          <TouchableOpacity
            className="w-[14px] h-[14px] items-center justify-center"
            onPress={() => onToggleFavorite(id)}
            activeOpacity={0.7}
          >
            <FeaturedHeartIcon size={17} filled={isFavorite} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}


