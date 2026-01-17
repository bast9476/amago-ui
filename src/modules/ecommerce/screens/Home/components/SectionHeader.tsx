import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface SectionHeaderProps {
  title: string;
  actionLabel?: string;
  onActionPress?: () => void;
  titleClassName?: string;
  actionClassName?: string;
}

export function SectionHeader({
  title,
  actionLabel = 'View all',
  onActionPress,
  titleClassName = 'text-lg font-medium text-[#242424]',
  actionClassName = 'text-base font-medium text-[#00a551]',
}: SectionHeaderProps) {
  return (
    <View className="flex-row items-center justify-between">
      <Text className={titleClassName}>{title}</Text>
      <TouchableOpacity onPress={onActionPress} activeOpacity={0.7}>
        <Text className={actionClassName}>{actionLabel}</Text>
      </TouchableOpacity>
    </View>
  );
}


