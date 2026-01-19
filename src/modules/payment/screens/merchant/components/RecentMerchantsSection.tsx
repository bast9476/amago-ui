import React, { useMemo } from 'react';
import { ScrollView, Text, TouchableOpacity, View, Image } from 'react-native';
import { useAppDispatch, useAppSelector } from '@src/store/hooks';
import {
  selectPaymentSearchQuery,
  selectRecentMerchants,
  selectSelectedMerchantId,
  setSelectedMerchant,
} from '@modules/payment/store';

export default function RecentMerchantsSection() {
  const dispatch = useAppDispatch();
  const query = useAppSelector(selectPaymentSearchQuery);
  const recentMerchants = useAppSelector(selectRecentMerchants);
  const selectedId = useAppSelector(selectSelectedMerchantId);

  const filteredMerchants = useMemo(() => {
    if (!query.trim()) return recentMerchants;
    const lowered = query.toLowerCase();
    return recentMerchants.filter((merchant) => merchant.name.toLowerCase().includes(lowered));
  }, [query, recentMerchants]);

  if (!filteredMerchants.length) {
    return null;
  }

  return (
    <View className="mt-[22px]">
      <Text className="text-[20px] font-semibold text-[#242424] mb-[18px]">Recent</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row">
        <View className="flex-row mb-[10px]">
          {filteredMerchants.map((merchant) => {
            const isSelected = selectedId === merchant.id;
            return (
              <TouchableOpacity
                key={merchant.id}
                onPress={() => dispatch(setSelectedMerchant(merchant.id))}
                className={`w-[120px] mr-[9px] h-[120px] rounded-[16px] bg-white border ${
                  isSelected ? 'border-[#00c950]' : 'border-[#f3f4f7]'
                }`}
                style={{
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 1 },
                  shadowOpacity: 0.1,
                  shadowRadius: 3,
                  elevation: 2,
                }}
              >
                <View className="flex-1 items-center justify-center gap-2">
                  <Image source={merchant.logo} className="w-[50px] h-[45px] rounded-[8px]" resizeMode="cover" />
                  <Text className="text-[18px] font-medium text-[#242424]">{merchant.name}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
