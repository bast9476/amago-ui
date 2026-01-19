import React from 'react';
import { View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  FavoriteMerchantsSection,
  PaymentEmptyState,
  PaymentFooter,
  PaymentHeader,
  PaymentSearchBar,
  ProtectionNote,
  RecentMerchantsSection,
  ScanQrButton,
} from '@modules/payment/screens/merchant/components';

export default function MerchantScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <PaymentHeader />

      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
      >
        <View className="px-4">
          <PaymentSearchBar />
          <RecentMerchantsSection />
          <FavoriteMerchantsSection />
          <ScanQrButton />
          <ProtectionNote />
          <PaymentEmptyState />
        </View>
        <PaymentFooter />
      </ScrollView>

    </SafeAreaView>
  );
}
