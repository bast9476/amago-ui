import React from 'react';
import { View, Text, Switch } from 'react-native';

interface RecurringToggleCardProps {
  title: string;
  subtitle: string;
  value: boolean;
  onToggle: () => void;
}

export default function RecurringToggleCard({ title, subtitle, value, onToggle }: RecurringToggleCardProps) {
  return (
    <View
      className="w-full rounded-2xl bg-white border border-[#f3f4f7] px-4 py-4 mt-11"
      style={{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
      }}
    >
      <View className="flex-row items-center justify-between">
        <View className="flex-1 pr-4">
          <Text className="text-[18px] font-medium text-[#242424]">{title}</Text>
          <Text className="text-[18px] text-[#7c7c7c] leading-7 mt-1 text-wrap max-w-[80%]">{subtitle}</Text>
        </View>
        <Switch
          value={value}
          onValueChange={onToggle}
          trackColor={{ false: '#cbced4', true: '#00a551' }}
          thumbColor="#ffffff"
        />
      </View>
    </View>
  );
}
