import React, { useState } from 'react';
import { View, Text, Image, ScrollView, ImageSourcePropType } from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Rect } from 'react-native-svg';
import { PaginationDots } from './shared';

// Placeholder images - replace with actual product images
const placeholderImage1 = require('@modules/home/assets/product3.png');
const placeholderImage2 = require('@modules/home/assets/product4.png');
const placeholderImage5 = require('@modules/home/assets/product6.png');
const placeholderImage6 = require('@modules/home/assets/product7.png');

const DiscountBadge = ({ label, id }: { label: string; id: string }) => {
  const gradientId = `discount-badge-${id}`;

  return (
    <View className="absolute right-0 top-1/2 overflow-hidden rounded-[5.12px]">
      <Svg width={42} height={22} viewBox="0 0 40 17" fill="none">
        <Defs>
          <LinearGradient
            id={gradientId}
            x1="0%"
            y1="100%"
            x2="100%"
            y2="0%"
            gradientUnits="userSpaceOnUse"
          >
            <Stop offset="0.5795" stopColor="#07b556" />
            <Stop offset="1.2421" stopColor="#36d97f" />
          </LinearGradient>
        </Defs>
        <Rect width="42" height="22" rx="5.12" fill={`url(#${gradientId})`} />
      </Svg>
      <View className="absolute top-[1px] left-1 items-center justify-center">
        <Text className="text-sm font-bold text-white">{label}</Text>
      </View>
    </View>
  );
};

// Hot Sale Product Card Component
interface HotSaleProductCardProps {
  imageSource: ImageSourcePropType;
  title: string;
  price: string;
  index: number;
}

const HotSaleProductCard = ({
  imageSource,
  title,
  price,
  index,
}: HotSaleProductCardProps) => {
  return (
    <View
      className="flex-col items-start px-1 py-3 rounded-2xl bg-[#f7f7f7] overflow-hidden"
      style={{
        width: 142,
        marginLeft: index === 0 ? 0 : 8,
      }}
    >
      {/* Image Section */}
      <View className="w-full h-[88px] relative overflow-hidden items-center justify-center">
        <Image
          source={imageSource}
          className="w-full h-full"
          resizeMode="contain"
        />
      </View>

      {/* Content Section */}
      <View className="flex-col items-start self-stretch gap-2 p-3">
        {/* Title and Price */}
        <View className="flex-col items-start self-stretch gap-0.5">
          <Text className="text-xs font-semibold text-left text-[#242424]" numberOfLines={1}>
            {title}
          </Text>
          <Text className="text-sm font-medium text-left text-[#242424] opacity-70">
            {price}
          </Text>
        </View>

        {/* Free Shipping Badge */}
        <View className="flex justify-center items-center px-1.5 py-[3px] rounded-[66px] bg-[#e6f6ee]">
          <Text className="text-[10px] font-medium text-left text-[#00a551]">
            Free shipping
          </Text>
        </View>
      </View>
    </View>
  );
};

// Main Component
export default function HotSalesSection() {
  const [currentPage, setCurrentPage] = useState(0);

  const products = [
    {
      imageSource: placeholderImage1,
      title: 'Macbook Air M1',
      price: '৳25,000',
    },
    {
      imageSource: placeholderImage2,
      title: 'Sony WH/1000XM5',
      price: '৳25,000',
    },
    {
      imageSource: placeholderImage1,
      title: 'FreeBuds Huawei',
      price: '৳25,000',
    },
    {
      imageSource: placeholderImage2,
      title: 'iPhone 15 Pro',
      price: '৳85,000',
    },
  ];

  // Calculate total pages: 3 products visible per page
  const productsPerPage = 3;
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Featured Products Data
  const featuredProducts = [
    {
      id: 1,
      title: 'Harden Vol. 6',
      originalPrice: '৳25,000',
      discountedPrice: '৳20,000',
      backgroundImage: placeholderImage5,
      discountLabel: '-20%',
    },
    {
      id: 2,
      title: "Nike Air Force 1 '07 LV8",
      originalPrice: '৳25,000',
      discountedPrice: '৳20,000',
      backgroundImage: placeholderImage6,
      discountLabel: '-20%',
    },
  ];

  return (
    <View className="px-4 mt-10">
      {/* Header Section */}
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-lg font-semibold text-left text-[#242424]">
          Hot sales
        </Text>
        {/* Pagination Dots */}
        <PaginationDots
          count={totalPages}
          activeIndex={currentPage}
          activeColor="#00A551"
          inactiveColor="#CFCFCF"
        />
      </View>

      {/* Product Cards */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: 16 }}
        onScroll={(event) => {
          const offsetX = event.nativeEvent.contentOffset.x;
          const cardWidth = 142; // Updated card width
          const gap = 8;
          const pageWidth = (cardWidth + gap) * productsPerPage;
          const page = Math.round(offsetX / pageWidth);
          setCurrentPage(Math.min(Math.max(0, page), totalPages - 1));
        }}
        scrollEventThrottle={16}
      >
        {products.map((product, index) => (
          <HotSaleProductCard
            key={index}
            index={index}
            {...product}
          />
        ))}
      </ScrollView>

      {/* Featured Products Section */}
      <View className="mt-10">
        <View className="flex-row justify-between items-start gap-2">
          {featuredProducts.map((product) => (
            <View key={product.id} className="flex-1 flex-col items-start gap-2.5">
              {/* Image Container */}
              <View className="w-full relative" style={{ aspectRatio: 168.94 / 185.32 }}>
                {/* Green Background Card */}
                <View
                  className="rounded-[9.21px] bg-[#e6f6ee]"
                  style={{
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 5.12 },
                    shadowOpacity: 0.1,
                    shadowRadius: 10.24,
                    elevation: 4,
                  }}
                />
                {/* Image Container with Black Background */}
                <View className="rounded-[9.21px] bg-black overflow-hidden">
                  <Image
                    source={product.backgroundImage}
                    className="w-full h-full"
                    resizeMode="cover"
                  />
                  <DiscountBadge label={product.discountLabel} id={String(product.id)} />
                </View>
              </View>
              {/* Product Info */}
              <View className="flex-col items-start gap-[5px] w-full">
                <Text className="text-sm text-left text-[#242424]" numberOfLines={1}>
                  {product.title}
                </Text>
                <View className="flex-row items-center gap-[3px]">
                  <Text className="text-xl font-bold text-left text-[#202020] line-through">
                    {product.originalPrice}
                  </Text>
                  <Text className="text-lg font-bold text-left text-[#00a551]">
                    {product.discountedPrice}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

