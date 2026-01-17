import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useAppSelector } from '@src/store/hooks';
import { selectHomeCategorySections } from '@modules/home/store';
import type { HomeCategorySection } from '@modules/home/store/types';

// Chevron Right Icon
const ChevronRightIcon = ({ size = 24, color = '#999999' }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M8.97519 17.9502L14.9586 11.9668L8.97519 5.9834"
      stroke={color}
      strokeWidth={1.99447}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

// Section Header Component
interface SectionHeaderProps {
  title: string;
  onSeeAll?: () => void;
}

const SectionHeader = ({ title, onSeeAll }: SectionHeaderProps) => {
  return (
    <View className="flex-row justify-between items-center self-stretch">
      <View className="flex-row items-center">
        <ChevronRightIcon size={28} />
        <Text
          className="text-2xl font-[600] text-left text-[#242424] ml-2.5"
        >
          {title}
        </Text>
      </View>
      <TouchableOpacity activeOpacity={0.7} onPress={onSeeAll}>
        <Text className="text-base font-medium text-left text-[#00a551]">
          See all
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// Category Item Component
interface CategoryItemProps {
  label: string;
  icon?: React.ReactNode;
  imageSource?: any;
  onPress?: () => void;
}

const CategoryItem = ({ label, icon, imageSource, onPress }: CategoryItemProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="flex-col items-center"
      style={{ flex: 1, minWidth: 0 }}
      onPress={onPress}
    >
      <View
        className="items-center justify-center rounded-full bg-[#f1f7f5]"
        style={{
          width: 58,
          height: 58,
          padding: 16,
        }}
      >
        {icon ? (
          <View style={{ width: 19, height: 19 }}>
            {icon}
          </View>
        ) : (
          <Image
            source={imageSource}
            style={{ width: 19, height: 19 }}
            resizeMode="contain"
          />
        )}
      </View>
      <Text 
        className="text-sm font-semibold text-center text-[#242424] mt-2.5"
        numberOfLines={1}
        ellipsizeMode="tail"
        style={{ width: '100%' }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

// Category Section Component
interface CategorySectionProps {
  index: number;
  title: string;
  items: Array<{
    id: string;
    label: string;
    icon?: React.ReactNode;
    imageSource?: any;
  }>;
  onSeeAll?: () => void;
  onItemPress?: (itemId: string) => void;
}

const CategorySection = ({ index, title, items, onSeeAll, onItemPress }: CategorySectionProps) => {
  return (
    <View className={`flex-col items-start self-stretch ${index === 0 ? '' : 'mt-4'}`}>
      <SectionHeader title={title} onSeeAll={onSeeAll} />
      <View className="flex-row items-center self-stretch py-8" style={{ gap: 8 }}>
        {items.map((item, index) => (
          <CategoryItem
            key={index}
            label={item.label}
            icon={item.icon}
            imageSource={item.imageSource}
            onPress={() => onItemPress?.(item.id)}
          />
        ))}
      </View>
    </View>
  );
};

export type HomeCategorySectionId = 'finance' | 'travel' | 'health' | 'socials';

export interface CategorySectionsProps {
  onSeeAllSection?: (sectionId: HomeCategorySectionId) => void;
  onItemPress?: (itemId: string) => void;
}

export default function CategorySections({ onSeeAllSection, onItemPress }: CategorySectionsProps = {}) {
  const sections = useAppSelector(selectHomeCategorySections) as HomeCategorySection[];

  return (
    <View className="flex-col px-6 pt-36 items-start">
      {sections.map((section: HomeCategorySection, index: number) => (
        <CategorySection
          index={index}
          key={section.id}
          title={section.title}
          items={section.items.map((i) => ({ id: i.id, label: i.label, imageSource: i.iconSource }))}
          onSeeAll={() => onSeeAllSection?.(section.id)}
          onItemPress={onItemPress}
        />
      ))}
    </View>
  );
}

