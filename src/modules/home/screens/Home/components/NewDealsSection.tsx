import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Svg, { Path, G, Defs, ClipPath, Rect, LinearGradient, Stop } from 'react-native-svg';
import { CategoryTabs } from './shared';

// Placeholder images - replace with actual product images
const placeholderImage1 = require('@modules/home/assets/product1.png');
const placeholderImage2 = require('@modules/home/assets/product2.png');

// Chevron Right Icon
const ChevronRightIcon = ({ size = 6, color = '#00A551' }: { size?: number; color?: string }) => (
  <Svg width={size} height={size * 1.67} viewBox="0 0 6 10" fill="none">
    <Path
      d="M0.666229 8.66073L4.66359 4.66338L0.666229 0.666016"
      stroke={color}
      strokeWidth="1.33245"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

// Heart Icon
const HeartIcon = ({ size = 16 }: { size?: number }) => (
  <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <Path
      d="M1.33246 6.32931C1.33247 5.58793 1.55737 4.864 1.97745 4.25312C2.39754 3.64224 2.99304 3.17316 3.68531 2.90783C4.37758 2.6425 5.13405 2.5934 5.85481 2.76702C6.57557 2.94064 7.22671 3.32881 7.72224 3.88026C7.75714 3.91757 7.79933 3.94732 7.84621 3.96766C7.89308 3.988 7.94363 3.9985 7.99472 3.9985C8.04582 3.9985 8.09637 3.988 8.14324 3.96766C8.19011 3.94732 8.23231 3.91757 8.26721 3.88026C8.76118 3.32522 9.41247 2.93379 10.1344 2.75806C10.8563 2.58234 11.6147 2.63065 12.3085 2.89656C13.0023 3.16248 13.5986 3.63339 14.0182 4.24662C14.4377 4.85984 14.6605 5.5863 14.657 6.32931C14.657 7.85496 13.6576 8.99421 12.6583 9.99355L8.99939 13.5332C8.87525 13.6758 8.7222 13.7903 8.55039 13.8692C8.37858 13.9481 8.19195 13.9895 8.00291 13.9907C7.81387 13.9919 7.62673 13.9528 7.45394 13.8761C7.28115 13.7994 7.12665 13.6869 7.00071 13.5459L3.33114 9.99355C2.3318 8.99421 1.33246 7.86163 1.33246 6.32931Z"
      stroke="#737373"
      strokeWidth="1.33245"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

// Star Icon
const StarIcon = ({ size = 16 }: { size?: number }) => (
  <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <G>
      <Path
        d="M7.67826 1.52899C7.70746 1.47 7.75256 1.42035 7.80848 1.38563C7.86439 1.35092 7.9289 1.33252 7.99472 1.33252C8.06053 1.33252 8.12504 1.35092 8.18096 1.38563C8.23688 1.42035 8.28198 1.47 8.31118 1.52899L9.85016 4.64626C9.95154 4.85144 10.1012 5.02895 10.2863 5.16355C10.4714 5.29816 10.6864 5.38585 10.9128 5.41908L14.3545 5.92275C14.4197 5.9322 14.481 5.95971 14.5314 6.00216C14.5818 6.04462 14.6193 6.10033 14.6397 6.163C14.6601 6.22566 14.6625 6.29278 14.6467 6.35675C14.6309 6.42073 14.5976 6.47902 14.5504 6.52502L12.0614 8.94875C11.8972 9.10871 11.7744 9.30617 11.7035 9.52412C11.6326 9.74208 11.6157 9.974 11.6543 10.1999L12.2419 13.6243C12.2534 13.6895 12.2464 13.7566 12.2216 13.818C12.1968 13.8794 12.1553 13.9325 12.1017 13.9714C12.0481 14.0103 11.9847 14.0334 11.9187 14.038C11.8527 14.0426 11.7867 14.0285 11.7283 13.9974L8.65162 12.3798C8.4489 12.2734 8.22335 12.2178 7.99438 12.2178C7.76542 12.2178 7.53987 12.2734 7.33715 12.3798L4.26118 13.9974C4.20278 14.0283 4.13686 14.0422 4.07094 14.0376C4.00502 14.0329 3.94174 14.0098 3.88829 13.9709C3.83485 13.932 3.79338 13.879 3.76861 13.8177C3.74385 13.7564 3.73677 13.6894 3.74819 13.6243L4.33513 10.2006C4.37391 9.97456 4.35711 9.74249 4.28619 9.5244C4.21528 9.30631 4.09237 9.10875 3.92807 8.94875L1.43905 6.52568C1.39148 6.47974 1.35776 6.42135 1.34175 6.35718C1.32574 6.29301 1.32808 6.22563 1.34849 6.16272C1.36891 6.09981 1.40658 6.0439 1.45722 6.00135C1.50786 5.95881 1.56943 5.93134 1.63492 5.92208L5.07598 5.41908C5.30267 5.3861 5.51795 5.29853 5.70329 5.16391C5.88863 5.02928 6.03848 4.85164 6.13994 4.64626L7.67826 1.52899Z"
        fill="#FDC700"
        stroke="#FDC700"
        strokeWidth="1.33245"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);

// Plus Icon
const PlusIcon = ({ size = 16 }: { size?: number }) => (
  <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <Path
      d="M3.33115 7.99463H12.6583"
      stroke="white"
      strokeWidth="1.33245"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7.99472 3.33105V12.6582"
      stroke="white"
      strokeWidth="1.33245"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

// Points Icon (Gift Box)
const PointsIcon = ({ size = 15 }: { size?: number }) => (
  <Svg width={size} height={size} viewBox="0 0 15 15" fill="none">
    <G clipPath="url(#clip0_points)">
      <Path
        d="M7.19952 14.3998C10.9551 14.3998 13.9995 11.3553 13.9995 7.5998C13.9995 3.84427 10.9551 0.799805 7.19952 0.799805C3.44398 0.799805 0.399521 3.84427 0.399521 7.5998C0.399521 11.3553 3.44398 14.3998 7.19952 14.3998Z"
        fill="#F4900C"
      />
      <Path
        d="M7.19952 13.6C10.9551 13.6 13.9995 10.5555 13.9995 6.8C13.9995 3.04446 10.9551 0 7.19952 0C3.44398 0 0.399521 3.04446 0.399521 6.8C0.399521 10.5555 3.44398 13.6 7.19952 13.6Z"
        fill="#FFCC4D"
      />
      <Path
        d="M7.20051 12.7996C10.2933 12.7996 12.8005 10.2924 12.8005 7.19961C12.8005 4.10681 10.2933 1.59961 7.20051 1.59961C4.10772 1.59961 1.60051 4.10681 1.60051 7.19961C1.60051 10.2924 4.10772 12.7996 7.20051 12.7996Z"
        fill="#FFE8B6"
      />
      <Path
        d="M7.20051 12.3997C10.2933 12.3997 12.8005 9.8925 12.8005 6.79971C12.8005 3.70691 10.2933 1.19971 7.20051 1.19971C4.10772 1.19971 1.60051 3.70691 1.60051 6.79971C1.60051 9.8925 4.10772 12.3997 7.20051 12.3997Z"
        fill="#FFAC33"
      />
      <Path
        d="M3.81737 4.34184C3.81737 4.12384 4.03137 4.03664 4.03137 4.03664L7.18257 2.55664L10.3638 4.03664C10.3638 4.03664 10.583 4.08544 10.583 4.34344V4.59984H3.81737V4.34184Z"
        fill="#FFE8B6"
      />
      <Path
        d="M10.3713 5.13374C10.3713 4.90014 10.1693 4.71094 9.92053 4.71094H4.45133C4.20213 4.71094 4.02853 4.90014 4.02853 5.13374C4.02853 5.29254 4.11013 5.42934 4.24013 5.50174V5.76814H5.08573V5.55654H5.93133V5.76814H6.77693V5.55654H7.62253V5.76814H8.46813V5.55654H9.31373V5.76814H10.1597V5.49094C10.2865 5.41574 10.3713 5.28414 10.3713 5.13374ZM11.0053 9.59934C11.0053 9.68346 10.9719 9.76414 10.9124 9.82363C10.8529 9.88312 10.7723 9.91654 10.6881 9.91654H3.71133C3.62721 9.91654 3.54653 9.88312 3.48704 9.82363C3.42755 9.76414 3.39413 9.68346 3.39413 9.59934C3.39413 9.51521 3.42755 9.43453 3.48704 9.37504C3.54653 9.31556 3.62721 9.28214 3.71133 9.28214H10.6885C10.8633 9.28214 11.0053 9.42414 11.0053 9.59934Z"
        fill="#F4900C"
      />
      <Path
        d="M10.5827 4.87957C10.5826 4.93566 10.5602 4.98942 10.5206 5.02908C10.4809 5.06874 10.4272 5.09106 10.3711 5.09117H4.02827C3.9744 5.08786 3.92382 5.06412 3.88684 5.0248C3.84987 4.98548 3.82928 4.93354 3.82928 4.87957C3.82928 4.8256 3.84987 4.77366 3.88684 4.73434C3.92382 4.69502 3.9744 4.67128 4.02827 4.66797L10.3711 4.66917C10.3988 4.66906 10.4262 4.67443 10.4519 4.68495C10.4775 4.69547 10.5008 4.71094 10.5205 4.73049C10.5402 4.75003 10.5558 4.77326 10.5664 4.79884C10.5771 4.82442 10.5826 4.85185 10.5827 4.87957ZM4.87427 5.12517H9.52587V5.59957H4.87427V5.12517Z"
        fill="#F4900C"
      />
      <Path
        d="M5.08553 8.33104C5.08553 8.56464 4.95913 8.75384 4.80353 8.75384H4.52153C4.36593 8.75384 4.23953 8.56464 4.23953 8.33104V5.12544C4.23953 4.89184 4.36593 4.70264 4.52153 4.70264H4.80353C4.95913 4.70264 5.08553 4.89184 5.08553 5.12544V8.33104ZM10.1599 8.33104C10.1599 8.56464 10.0339 8.75384 9.87793 8.75384H9.59593C9.44033 8.75384 9.31393 8.56464 9.31393 8.33104V5.12544C9.31393 4.89184 9.43993 4.70264 9.59593 4.70264H9.87793C10.0335 4.70264 10.1599 4.89184 10.1599 5.12544V8.33104ZM6.77713 8.33104C6.77713 8.56464 6.65073 8.75384 6.49513 8.75384H6.21313C6.05753 8.75384 5.93113 8.56464 5.93113 8.33104V5.12544C5.93113 4.89184 6.05753 4.70264 6.21313 4.70264H6.49513C6.65073 4.70264 6.77713 4.89184 6.77713 5.12544V8.33104ZM8.46833 8.33104C8.46833 8.56464 8.34193 8.75384 8.18633 8.75384H7.90473C7.74913 8.75384 7.62273 8.56464 7.62273 8.33104V5.12544C7.62273 4.89184 7.74913 4.70264 7.90473 4.70264H8.18633C8.34193 4.70264 8.46833 4.89184 8.46833 5.12544V8.33104Z"
        fill="#FFD983"
      />
      <Path
        d="M10.3718 8.54194C10.3718 8.77554 10.1826 8.96474 9.94899 8.96474H4.45179C4.33966 8.96474 4.23212 8.9202 4.15283 8.84091C4.07354 8.76162 4.02899 8.65407 4.02899 8.54194C4.02899 8.42981 4.07354 8.32227 4.15283 8.24298C4.23212 8.16369 4.33966 8.11914 4.45179 8.11914H9.94899C10.1822 8.11914 10.3718 8.30834 10.3718 8.54194Z"
        fill="#FFCC4D"
      />
      <Path
        d="M10.794 8.96528C10.794 9.19888 10.6048 9.38808 10.3712 9.38808H4.02801C3.91588 9.38808 3.80834 9.34354 3.72904 9.26424C3.64975 9.18495 3.60521 9.07741 3.60521 8.96528C3.60521 8.85315 3.64975 8.74561 3.72904 8.66632C3.80834 8.58703 3.91588 8.54248 4.02801 8.54248H10.3708C10.6044 8.54248 10.794 8.73168 10.794 8.96528Z"
        fill="#FFD983"
      />
      <Path
        d="M11.0053 9.28302C11.0053 9.36715 10.9719 9.44783 10.9124 9.50732C10.8529 9.5668 10.7723 9.60022 10.6881 9.60022H3.71133C3.66968 9.60022 3.62843 9.59202 3.58995 9.57607C3.55146 9.56013 3.5165 9.53677 3.48704 9.50732C3.45759 9.47786 3.43422 9.44289 3.41828 9.40441C3.40234 9.36592 3.39413 9.32468 3.39413 9.28302C3.39413 9.24137 3.40234 9.20012 3.41828 9.16163C3.43422 9.12315 3.45759 9.08818 3.48704 9.05873C3.5165 9.02927 3.55146 9.00591 3.58995 8.98997C3.62843 8.97403 3.66968 8.96582 3.71133 8.96582H10.6885C10.8633 8.96582 11.0053 9.10782 11.0053 9.28302Z"
        fill="#FFD983"
      />
      <Path
        d="M10.3718 4.91352C10.3718 4.67992 10.1698 4.49072 9.92099 4.49072H4.45179C4.20259 4.49072 4.02899 4.67992 4.02899 4.91352C4.02899 5.07232 4.11059 5.20912 4.24059 5.28152V5.54792H5.08619V5.33632H5.93179V5.54792H6.77739V5.33632H7.62299V5.54792H8.46859V5.33632H9.31419V5.54792H10.1602V5.27072C10.287 5.19552 10.3718 5.06392 10.3718 4.91352Z"
        fill="#FFCC4D"
      />
      <Path
        d="M3.81737 4.58452C3.81737 4.36652 4.03137 4.27932 4.03137 4.27932L7.18257 2.79932L10.3638 4.27932C10.3638 4.27932 10.583 4.32812 10.583 4.58612V4.70252H3.81737V4.58452Z"
        fill="#FFD983"
      />
      <Path
        d="M7.19987 3.33691C7.19987 3.33691 5.01787 4.36531 4.80027 4.45811C4.58227 4.55051 4.65507 4.70251 4.80067 4.70251H9.58867C9.81347 4.70251 9.76027 4.53091 9.58187 4.43811C9.40347 4.34571 7.19987 3.33691 7.19987 3.33691Z"
        fill="#FFAC33"
      />
      <Path
        d="M10.5827 4.70232C10.5826 4.75841 10.5602 4.81217 10.5206 4.85183C10.4809 4.89149 10.4272 4.91382 10.3711 4.91392H4.02827C3.9744 4.91061 3.92382 4.88687 3.88684 4.84755C3.84987 4.80824 3.82928 4.7563 3.82928 4.70232C3.82928 4.64835 3.84987 4.59641 3.88684 4.55709C3.92382 4.51777 3.9744 4.49404 4.02827 4.49072L10.3711 4.49192C10.3988 4.49182 10.4262 4.49718 10.4519 4.5077C10.4775 4.51822 10.5008 4.5337 10.5205 4.55324C10.5402 4.57278 10.5558 4.59601 10.5664 4.62159C10.5771 4.64717 10.5826 4.67461 10.5827 4.70232Z"
        fill="#FFD983"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_points">
        <Rect width="14.4" height="14.4" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

// CategoryTabs is shared in @modules/home/components/shared

// Product Card Component
interface DealProductCardProps {
  imageSource: any;
  title: string;
  currentPrice: string;
  originalPrice: string;
  discount: string;
  points: string;
  rating: string;
  reviewCount: string;
  index: number;
}

const DealProductCard = ({
  imageSource,
  title,
  currentPrice,
  originalPrice,
  discount,
  points,
  rating,
  reviewCount,
  index,
}: DealProductCardProps) => {
  const gradientId = `pointsGradient-${index}`;

  return (
    <View
      className="bg-white rounded-2xl border border-gray-100 overflow-hidden w-[300px]"
      style={{
        marginLeft: index === 0 ? 0 : 18,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 1 },
        // shadowOpacity: 0.1,
        // shadowRadius: 3,
        // elevation: 2,
      }}
    >
      {/* Image Section */}
      <View className="relative h-[192px]">
        <Image
          source={imageSource}
          className="w-full h-full"
          resizeMode="cover"
        />
        {/* Discount Badge */}
        <View className="absolute left-2 top-2 px-2 py-0.5 rounded-[10px] bg-[#fb2c36]">
          <Text className="text-sm font-semibold text-white">{discount}</Text>
        </View>
        {/* Favorite Icon */}
        <TouchableOpacity
          activeOpacity={0.7}
          className="absolute right-2 top-2 w-9 h-9 rounded-full bg-white/80 items-center justify-center"
        >
          <HeartIcon size={20} />
        </TouchableOpacity>
      </View>

      {/* Content Section */}
      <View className="px-3 pt-3.5 pb-8">
        {/* Title */}
        <Text
          className="text-[16.5px] font-semibold text-[#242424] mb-3"
          numberOfLines={2}
        >
          {title}
        </Text>

        {/* Price Row */}
        <View className="flex-row items-center mb-3 gap-2">
          <Text className="text-lg font-bold text-[#242424]">{currentPrice}</Text>
          <Text className="text-base text-[#999]">
            <Text className="font-bold">৳</Text>
            {originalPrice}
          </Text>
        </View>

        {/* Points Badge */}
        <View
          className="self-start px-2.5 py-1 rounded-full mb-3 relative overflow-hidden"
          style={{
            minHeight: 22.4,
          }}
        >
          <View pointerEvents="none" style={StyleSheet.absoluteFill}>
            <Svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <Defs>
                <LinearGradient
                  id={gradientId}
                  x1="0%"
                  y1="100%"
                  x2="100%"
                  y2="0%"
                  gradientUnits="objectBoundingBox"
                >
                  <Stop offset="0.5795" stopColor="#07b556" />
                  <Stop offset="1" stopColor="#36d97f" />
                </LinearGradient>
              </Defs>
              <Rect x="0" y="0" width="100" height="100" fill={`url(#${gradientId})`} />
            </Svg>
          </View>
          <View className="flex-row items-center space-x-1 relative z-10">
            <PointsIcon size={18} />
            <Text className="text-sm text-white">{points}</Text>
          </View>
        </View>

        {/* Rating and Add Button Row */}
        <View className="flex-row items-center justify-between">
          {/* Rating */}
          <View className="flex-row items-center space-x-1">
            <StarIcon size={20} />
            <Text className="text-lg leading-[22px] font-medium text-[#242424]">{rating}</Text>
            <Text className="text-base leading-[18px] text-[#999]">({reviewCount})</Text>
          </View>

          {/* Add Button */}
          <TouchableOpacity
            activeOpacity={0.8}
            className="px-4 py-1 rounded-full bg-[#00a551]"
          >
            <View className="flex-row items-center space-x-1">
              <PlusIcon size={20} />
              <Text className="text-base font-semibold text-white">Add</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// Main Component
export default function NewDealsSection() {
  const [selectedCategory, setSelectedCategory] = useState('Electronics');

  const categories = ['Electronics', 'Fashion', 'Home', 'Beauty', 'More'];

  const products = [
    {
      imageSource: placeholderImage1,
      title: 'Wireless Bluetooth Headphones with Noise Cancellation',
      currentPrice: '৳2,499',
      originalPrice: '3,999',
      discount: '-38%',
      points: '100 Points',
      rating: '4.6',
      reviewCount: '1250',
    },
    {
      imageSource: placeholderImage2,
      title: 'Headphones with Noise Cancellation',
      currentPrice: '৳1,499',
      originalPrice: '2,999',
      discount: '-38%',
      points: '100 Points',
      rating: '4.3',
      reviewCount: '1247',
    },
  ];

  return (
    <View className="px-6 mt-10">
      {/* Header Section */}
      <View className="mb-4.5">
        <View className="flex-row justify-between items-center mb-4.5">
          <View className="flex-col space-y-1">
            <Text className="text-[26px] font-bold text-[#242424]">New Deals</Text>
            <Text className="text-base text-[#6f747a]">Today's picks for you</Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            className="flex-row items-center"
          >
            <Text className="text-base leading-[18px] font-medium text-[#00a551] mr-2">See all</Text>
            <ChevronRightIcon size={8} />
          </TouchableOpacity>
        </View>

        {/* Category Tabs */}
        <CategoryTabs
          tabs={categories}
          activeTab={selectedCategory}
          onChange={setSelectedCategory}
        />
      </View>

      {/* Product Cards */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className='mt-10'
      >
        {products.map((product, index) => (
          <DealProductCard key={index} index={index} {...product} />
        ))}
      </ScrollView>
    </View>
  );
}

