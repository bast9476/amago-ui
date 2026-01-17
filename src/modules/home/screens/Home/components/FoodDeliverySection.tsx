import React, { useMemo, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { CategoryTabs } from './shared';

const ChevronRightIcon = ({ size = 13, color = '#00A551' }: { size?: number; color?: string }) => (
  <Svg width={(size * 6) / 10} height={size} viewBox="0 0 6 10" fill="none">
    <Path
      d="M0.66626 8.66073L4.66362 4.66338L0.66626 0.666016"
      stroke={color}
      strokeWidth="1.33245"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

type QuickTab = 'Order again' | 'Offers' | 'Free delivery' | '30–45 min';
type CuisineTab = 'Biryani' | 'Pizza' | 'Burgers' | 'Desserts' | 'More';

export default function FoodDeliverySection() {
  const [quickActive, setQuickActive] = useState<QuickTab>('Order again');
  const [cuisineActive, setCuisineActive] = useState<CuisineTab>('Biryani');

  const quickTabs = useMemo<QuickTab[]>(() => ['Order again', 'Offers', 'Free delivery', '30–45 min'], []);
  const cuisineTabs = useMemo<CuisineTab[]>(() => ['Biryani', 'Pizza', 'Burgers', 'Desserts', 'More'], []);

  return (
    <View className="px-6 mt-10">
      {/* Header */}
      <View className="flex-row justify-between items-center">
        <View className="flex-col items-start gap-[5px]">
          <Text className="text-2xl font-bold text-left text-[#242424]">Food Delivery</Text>
          <Text className="text-base text-left text-[#6f747a]">Order again in one tap</Text>
        </View>

        <TouchableOpacity activeOpacity={0.7} className="flex-row items-center">
          <Text className="text-base font-medium text-left text-[#00a551] mr-2">See all</Text>
          <ChevronRightIcon size={13} />
        </TouchableOpacity>
      </View>

      {/* Quick tabs */}
      <CategoryTabs
        className="mt-[22px]"
        tabs={quickTabs}
        activeTab={quickActive}
        onChange={(t) => setQuickActive(t as QuickTab)}
        contentContainerStyle={{ paddingRight: 24 }}
      />

      {/* Cuisines */}
      <View className="mt-6">
        <Text className="text-base font-medium text-left text-[#242424]">Cuisines</Text>
        <CategoryTabs
          className="mt-3.5"
          tabs={cuisineTabs}
          activeTab={cuisineActive}
          onChange={(t) => setCuisineActive(t as CuisineTab)}
          contentContainerStyle={{ paddingRight: 24 }}
        />
      </View>
    </View>
  );
}


