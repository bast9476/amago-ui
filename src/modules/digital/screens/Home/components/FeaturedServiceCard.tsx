import React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export interface FeaturedServiceCardProps {
  title: string;
  price: string;
  seller: string;
  badge: string;
  badgeType: 'orange' | 'green';
  level: string;
  cardImage: any;
  profileImage: any;
}

export default function FeaturedServiceCard({
  title,
  price,
  seller,
  badge,
  badgeType,
  level,
  cardImage,
  profileImage,
}: FeaturedServiceCardProps) {
  return (
    <View className="w-[310px] h-[340px] rounded-lg bg-white border border-gray-200 overflow-hidden shadow-sm shadow-black/5">
      {/* Image with badges */}
      <ImageBackground
        source={cardImage}
        style={{ height: 180, width: '100%', backgroundColor: '#E5E7EB' }}
        imageStyle={{ resizeMode: 'cover' }}
      >
        <View className="absolute left-2.5 top-3 flex-row gap-2">
          <View className="h-[25px] px-2 rounded bg-blue-100 items-center justify-center">
            <Text className="text-[14px] text-blue-700">Verified</Text>
          </View>
          <View className={`h-[25px] px-2 rounded items-center justify-center ${badgeType === 'orange' ? 'bg-orange-100' : 'bg-[#e6f6ee]'}`}>
            <Text className={`text-[14px] ${badgeType === 'orange' ? 'text-orange-700' : 'text-[#00a551] font-medium'}`}>{badge}</Text>
          </View>
        </View>
      </ImageBackground>
      {/* Body */}
      <View className="p-4">
        <Text className="text-[17px] font-medium text-black" numberOfLines={2}>{title}</Text>
        <View className="mt-3 flex-row items-center">
          <View className="flex-row items-center gap-[1.8]">
            <Image
              source={profileImage}
              className="w-7 h-7 rounded-full bg-gray-300"
            />
            <View className="flex-row items-center gap-2 ">
              <Text className="opacity-80 text-[14px] leading-[14px] text-[#242424]">{seller}</Text>
              <View className="flex-row items-center justify-center px-1 pb-[3px]">
                <Svg width={18} height={14} viewBox="0 0 14 12" fill="none">
                  <Path d="M7.42734 0.421875C7.30312 0.164062 7.04062 0 6.75234 0C6.46406 0 6.2039 0.164062 6.07734 0.421875L4.5703 3.52266L1.20468 4.01953C0.92343 4.06172 0.689055 4.25859 0.602336 4.52812C0.515617 4.79766 0.58593 5.09531 0.787492 5.29453L3.22968 7.71094L2.65312 11.1258C2.60624 11.407 2.72343 11.693 2.95546 11.8594C3.18749 12.0258 3.49452 12.0469 3.74765 11.9133L6.75468 10.3078L9.76171 11.9133C10.0148 12.0469 10.3219 12.0281 10.5539 11.8594C10.7859 11.6906 10.9031 11.407 10.8562 11.1258L10.2773 7.71094L12.7195 5.29453C12.9211 5.09531 12.9937 4.79766 12.9047 4.52812C12.8156 4.25859 12.5836 4.06172 12.3023 4.01953L8.93437 3.52266L7.42734 0.421875Z" fill="#FACC15" />
                </Svg>
                <Text className="ml-1 opacity-90 text-[14px] text-[#242424] leading-[17px]">4.9</Text>
              </View>
            </View>
          </View>
          {level === 'Pro' ? (
            <View className="h-[28px] px-2 rounded bg-purple-100 items-center justify-center ml-1">
              <Text className="text-[14px] font-medium text-purple-700">Pro</Text>
            </View>
          ) : (
              <View className="h-[28px] px-2 rounded bg-[#e6f6ee] items-center justify-center ml-1">
              <Text className="text-[14px] leading-[25px] font-medium text-[#00a551]">{level}</Text>
            </View>
          )}
        </View>
        <Text className="mt-4 text-[18.5px] font-semibold text-[#00a551]">From {price}</Text>
      </View>
    </View>
  );
}



