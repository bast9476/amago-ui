import React from 'react';
import { ScrollView, Text, TouchableOpacity, ViewStyle } from 'react-native';

export interface CategoryTabsProps {
  tabs: string[];
  activeTab: string;
  onChange: (tab: string) => void;

  /**
   * Optional: caller controls spacing/placement; keep defaults minimal.
   */
  className?: string;
  contentContainerStyle?: ViewStyle;
}

export default function CategoryTabs({
  tabs,
  activeTab,
  onChange,
  className,
  contentContainerStyle,
}: CategoryTabsProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className={`mt-4`}
      contentContainerStyle={contentContainerStyle}
    >
      {tabs.map((label, index) => {
        const isActive = label === activeTab;

        return (
          <TouchableOpacity
            key={`${label}-${index}`}
            activeOpacity={0.7}
            onPress={() => onChange(label)}
            className={`flex-row justify-center items-center relative px-4 py-1.5 rounded-full ${isActive ? 'bg-[#00a551]' : 'bg-gray-100'} ${index === 0 ? '' : 'ml-2'}`}
            style={
              isActive
                ? {
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 1,
                    shadowRadius: 6,
                    elevation: 4,
                  }
                : undefined
            }
          >
            <Text className={`text-base font-[400] text-left ${isActive ? 'text-white' : 'text-[#6a6f77]'}`}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}


