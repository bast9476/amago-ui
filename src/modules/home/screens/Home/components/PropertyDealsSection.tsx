import React, { useMemo, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { CategoryTabs } from './shared';

const ChevronRightIcon = ({ size = 10, color = '#00A551' }: { size?: number; color?: string }) => (
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

type DealTab = 'Rent' | 'Buy' | 'PG' | 'Near me';

export default function PropertyDealsSection() {
  const [activeTab, setActiveTab] = useState<DealTab>('Rent');

  const tabs = useMemo<DealTab[]>(() => ['Rent', 'Buy', 'PG', 'Near me'], []);

  return (
    <View className="px-6 mt-10">
      {/* Header */}
      <View className="flex-row justify-between items-center">
        <View className="flex-col items-start gap-1">
          <Text className="text-[24px] font-bold text-left text-[#242424]">Property Deals</Text>
          <Text className="text-base text-left text-[#6f747a]">Verified listings near you</Text>
        </View>

        <TouchableOpacity activeOpacity={0.7} className="flex-row items-center">
          <Text className="text-base leading-[18px] font-medium text-left text-[#00a551] mr-2">See all</Text>
          <ChevronRightIcon size={13} />
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <CategoryTabs
        className="mt-4"
        tabs={tabs}
        activeTab={activeTab}
        onChange={(tab) => setActiveTab(tab as DealTab)}
        contentContainerStyle={{ paddingRight: 24 }}
      />
    </View>
  );
}


