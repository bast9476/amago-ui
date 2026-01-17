import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export type CategoryFilterPillProps = {
  label: string;
  isSelected: boolean;
  onPress: () => void;
};

const CategoryFilterPill: React.FC<CategoryFilterPillProps> = ({ label, isSelected, onPress }) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={onPress}
    className={`h-[35px] px-2 py-1 rounded-[10px] items-center justify-center ${isSelected ? '' : 'bg-white border border-transparent'}`}
    style={isSelected ? { backgroundColor: '#07B556' } : {}}
  >
    <Text className={isSelected ? 'text-[14px] font-[400] text-white' : 'text-text-[14px] text-[#242424]'}>
      {label}
    </Text>
  </TouchableOpacity>
);

export default CategoryFilterPill;

