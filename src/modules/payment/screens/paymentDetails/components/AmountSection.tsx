import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

// Plus Icon
const PlusIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
    <Path
      d="M3.33113 7.99414H12.6583"
      stroke="#242424"
      strokeWidth={1.33245}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7.99472 3.33203V12.6592"
      stroke="#242424"
      strokeWidth={1.33245}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

interface AmountSectionProps {
  amount: string;
  onAmountChange: (amount: string) => void;
  onQuickAmount: (amount: string) => void;
  onMaxAmount: () => void;
  onAddNote?: () => void;
}

const quickAmounts = ['500', '1000', '2000'];

export default function AmountSection({
  amount,
  onAmountChange,
  onQuickAmount,
  onMaxAmount,
  onAddNote,
}: AmountSectionProps) {
  return (
    <View
      className="w-full rounded-2xl bg-white border border-[#f3f4f7] p-8 mt-[40px]"
      style={styles.cardShadow}
    >
      <View>
        <Text className="text-[19px] font-semibold text-[#242424] mb-3">Amount</Text>

        {/* Amount Input */}
        <View className="mb-[27px] w-full h-[80px] rounded-[14px] border border-[#f3f4f7] flex-row items-center pl-4 pr-4">
          <Text className="text-[34px] font-semibold text-[#00a551]">৳</Text>
          <TextInput
            value={amount}
            onChangeText={onAmountChange}
            className="text-[32px] font-medium text-[#0a0a0a]/50 flex-1 ml-2"
            keyboardType="numeric"
            placeholder="0.00"
            placeholderTextColor="#0a0a0a50"
          />
        </View>

        {/* Quick Amount Buttons */}
        <View className="flex-row items-center flex-wrap gap-3">
          {quickAmounts.map((value) => (
            <TouchableOpacity
              key={value}
              onPress={() => onQuickAmount(value)}
              className="h-[40px] px-3 py-1 rounded-[10px] bg-white border border-black/10 flex-row items-center gap-1.5"
            >
              <PlusIcon />
              <Text className="text-[16px] font-medium text-[#242424]">৳{value}</Text>
            </TouchableOpacity>
          ))}
          <View>
            <TouchableOpacity
              onPress={onMaxAmount}
              className="h-[40px] px-3 py-1 rounded-[10px] bg-white border border-black/10 flex-row items-center"
            >
              <Text className="text-[16px] font-medium text-[#242424]">Max</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <TouchableOpacity onPress={onAddNote}>
        <Text className="text-[16px] font-semibold text-center text-[#00a551]">Add note / invoice #</Text>
      </TouchableOpacity>
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
