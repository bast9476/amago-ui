import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useAppSelector } from '@src/store/hooks';
import { selectActiveFilters } from '@modules/Flight/store';

export default function ActiveFilters() {
  const activeFilters = useAppSelector(selectActiveFilters);

  // Don't render if no active filters
  if (!activeFilters || activeFilters.length === 0) {
    return null;
  }

  return (
    <View className="w-full bg-white">
      {/* Responsive container with padding */}
      <View className="px-4 py-[15px]">
        {/* Horizontal scrollable filter chips */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: 8,
            paddingRight: 4,
          }}
        >
          {activeFilters.map((filter, index) => {
            // First filter has green background, others have light green
            const isFirst = index === 0;
            return (
              <View
                key={`${filter}-${index}`}
                className={`px-2.5 py-[5px] rounded-full flex-row items-center justify-center ${
                  isFirst ? 'bg-[#00a551]' : 'bg-[#e6f6ee]'
                }`}
              >
                <Text
                  className={`text-[14px] ${
                    isFirst ? 'text-white' : 'text-[#242424]'
                  }`}
                >
                  {filter}
                </Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}