import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageSourcePropType } from 'react-native';
import { FeaturedHeartIcon } from './HeartIcon';

export interface FeaturedProductCardProps {
  id: string;
  index: number;
  imageSource: ImageSourcePropType;
  title: string;
  price: string;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onPress?: (id: string) => void;
}

export function FeaturedProductCard({
  id,
  index,
  imageSource,
  title,
  price,
  isFavorite,
  onToggleFavorite,
  onPress,
}: FeaturedProductCardProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={() => onPress?.(id)}
      className={`w-[115px] ${index === 0 ? '' : 'ml-4'}`}
    >
      <View>
        {/* Product Image Container */}
        <View className="w-[115px] h-[115px] rounded-2xl overflow-hidden bg-white">
          <Image source={imageSource} className="w-full h-full" resizeMode="cover" />
        </View>

        {/* White bottom section */}
        <View className="space-x-2 bg-white rounded-b-[16px] px-3 py-2">
          <View className="flex-1">
            <Text className="text-xs font-semibold text-[#242424] mb-1" numberOfLines={1}>
              {title}
            </Text>
            <View className='flex-row items-center justify-between'>
              <Text className="text-sm font-medium opacity-90 text-[#242424]">{price}</Text>
              <TouchableOpacity
                className="w-[14px] h-[14px] items-center justify-center"
                onPress={() => onToggleFavorite(id)}
                activeOpacity={0.7}
              >
                <FeaturedHeartIcon size={17} filled={isFavorite} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}


