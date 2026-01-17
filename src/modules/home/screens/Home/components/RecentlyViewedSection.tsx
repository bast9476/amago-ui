import React, { useState } from 'react';
import { View, Text, Image, ScrollView, ImageSourcePropType, NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import Svg, { Rect, Path } from 'react-native-svg';
import { PaginationDots } from './shared';

const itemImage1 = require('@modules/home/assets/product10.png');
const itemImage2 = require('@modules/home/assets/product11.png');

type RecentlyViewedItem = {
  id: string;
  title: string;
  price: string;
  image: ImageSourcePropType;
  bgClass: string;
};

const HeartIcon = ({ size = 27, color = '#FF5500' }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 27 27" fill="none">
    <Rect width="27" height="27" rx="13.5" fill="white" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.70439 14.2602C7.07847 12.3061 7.81056 9.87647 9.86214 9.21613C10.9413 8.86788 12.2731 9.15838 13.0296 10.202C13.7431 9.11988 15.1133 8.87022 16.1913 9.21613C18.2423 9.87647 18.9785 12.3061 18.3531 14.2602C17.379 17.3577 13.9799 18.9712 13.0296 18.9712C12.08 18.9712 8.71122 17.3939 7.70439 14.2602Z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15.21 11.4121C15.914 11.4844 16.3545 12.0427 16.3282 12.8249"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const RecentlyViewedCard = ({
  item,
  index,
}: {
  item: RecentlyViewedItem;
  index: number;
}) => {
  return (
    <View
      className={`rounded-2xl overflow-hidden ${item.bgClass}`}
      style={{
        width: 200,
        marginLeft: index === 0 ? 0 : 12,
      }}
    >
      {/* Image area */}
      <View className="relative overflow-hidden px-2 pt-3" style={{ height: 120 }}>
        <Image source={item.image} className="w-full h-full" resizeMode="contain" />
        <View className="absolute right-2 top-2">
          <HeartIcon size={30} />
        </View>
      </View>

      {/* Text */}
      <View className="p-3">
        <Text className="text-xs font-semibold text-left text-[#242424]" numberOfLines={1}>
          {item.title}
        </Text>
        <Text className="text-sm font-medium text-left text-[#242424] opacity-70 mt-0.5">
          {item.price}
        </Text>
      </View>
    </View>
  );
};

export default function RecentlyViewedSection() {
  const [currentPage, setCurrentPage] = useState(0);

  const items: RecentlyViewedItem[] = [
    {
      id: 'rv-1',
      title: 'Huawei Matebook X13',
      price: '৳25,000',
      image: itemImage1,
      bgClass: 'bg-[#fee9e7]',
    },
    {
      id: 'rv-2',
      title: 'Alexa Home',
      price: '৳25,000',
      image: itemImage2,
      bgClass: 'bg-amber-50',
    },
    {
      id: 'rv-3',
      title: 'Sony WH/1000XM5',
      price: '৳25,000',
      image: itemImage1,
      bgClass: 'bg-[#fee9e7]',
    },
    {
      id: 'rv-4',
      title: 'iPhone 15 Pro',
      price: '৳85,000',
      image: itemImage2,
      bgClass: 'bg-amber-50',
    },
  ];

  const cardsPerPage = 2;
  const totalPages = Math.ceil(items.length / cardsPerPage);

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = e.nativeEvent.contentOffset.x;
    const cardWidth = 200;
    const gap = 12;
    const pageWidth = (cardWidth + gap) * cardsPerPage;
    const page = Math.round(offsetX / pageWidth);
    setCurrentPage(Math.min(Math.max(0, page), totalPages - 1));
  };

  return (
    <View className="px-6 mt-10">
      {/* Header */}
      <View className="flex-row justify-between items-center">
        <Text className="text-lg font-bold text-left text-[#242424]">Recently viewed</Text>
        <PaginationDots count={totalPages} activeIndex={currentPage} activeColor="#00A551" inactiveColor="#CFCFCF" />
      </View>

      {/* Cards */}
      <View className="mt-4">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingRight: 24 }}
          onScroll={handleScroll}
          scrollEventThrottle={16}
        >
          {items.map((item, index) => (
            <RecentlyViewedCard key={item.id} item={item} index={index} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}


