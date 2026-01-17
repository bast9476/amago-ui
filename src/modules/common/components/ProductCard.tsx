import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageSourcePropType } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export interface ProductCardProps {
  id: string;
  index?: number;
  imageSource: ImageSourcePropType;
  title: string;
  description: string;
  price: string;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onPress?: (id: string) => void;
}

const FeaturedHeartIcon = ({ filled = false, size = 14 }: { filled?: boolean; size?: number }) => (
  <Svg width={size} height={(size ?? 14) * (12 / 14)} viewBox="0 0 13 12" fill="none">
    <Path
      d="M8.49388 10.0814L6.40106 8.42912L7.44747 7.32764L9.8019 9.25524L8.49388 10.0814Z"
      fill="white"
    />
    <Path
      d="M9.36719 0.49707C11.0829 0.49715 12.4227 1.83181 12.4229 3.55273C12.4229 4.60708 11.9523 5.60631 11.0215 6.74512C10.3193 7.60419 9.38492 8.50837 8.25586 9.54688L7.0625 10.6338L6.45996 11.1816L5.85742 10.6338L4.66406 9.54688C3.53501 8.50838 2.60063 7.60419 1.89844 6.74512C0.967609 5.60631 0.49707 4.60708 0.49707 3.55273C0.497215 1.83185 1.83713 0.497215 3.55273 0.49707C4.52649 0.49707 5.46978 0.952592 6.08301 1.66699L6.45996 2.10645L6.83691 1.66699C7.45014 0.952556 8.39341 0.49707 9.36719 0.49707Z"
      stroke="#F30000"
      strokeWidth={0.99385}
      fill={filled ? '#F30000' : 'none'}
    />
  </Svg>
);

export function ProductCard({
  id,
  index = 0,
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
      className={`flex-row bg-neutral-50 rounded-[20.6px] overflow-hidden ${index === 0 ? '' : 'mt-4'}`}
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


