import React from 'react';
import { View, Text } from 'react-native';

export interface SummaryItem {
    label: string;
    value: string;
}

export interface SummaryCardProps {
    items: SummaryItem[];
}

export default function SummaryCard({ items }: SummaryCardProps) {
    return (
        <View className="mx-4 mt-5 mb-8 rounded-2xl border-2 border-[#00A551] bg-[#D9F2E5] py-7 px-3">
            <Text className="text-[20px] font-semibold text-[#242424] mb-5">
                Summary
            </Text>
            <View className="space-y-2">
                {items.map(item => (
                    <View key={item.label} className="flex-row items-center justify-between">
                        <Text className="text-[16px] text-[#242424]" style={{ opacity: 0.5 }}>
                            {item.label}
                        </Text>
                        <Text className="text-[16px] font-medium text-[#242424]">
                            {item.value}
                        </Text>
                    </View>
                ))}
            </View>
        </View>
    );
}

