import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

interface ToggleSectionProps {
  label: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
}

export default function ToggleSection({ label, value, onValueChange }: ToggleSectionProps) {
  return (
    <View
      className="w-full rounded-2xl bg-white border border-[#f3f4f7] px-4 py-4 mt-[20px]"
      style={styles.cardShadow}
    >
      <View className="flex-row justify-between items-center">
        <Text className="text-[18px] font-medium text-[#242424]">{label}</Text>
        <Switch
          value={value}
          onValueChange={onValueChange}
          trackColor={{ false: '#cbced4', true: '#00a551' }}
          thumbColor="#ffffff"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
});
