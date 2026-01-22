import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  PaymentReviewHeader,
  ReviewMerchantCard,
  ReviewAmountSection,
  ReviewTotalSection,
  ReviewPaymentMethodSection,
  ReviewPointsSection,
  AuthorizationSection,
} from './components';

export default function PaymentReviewScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <PaymentReviewHeader />

      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 25 }}
      >
        <View className="px-4 py-7">
          <View
            className="w-full rounded-2xl bg-white border border-[#f3f4f7] p-4 mb-4"
            style={styles.cardShadow}
          >
            <ReviewMerchantCard />
            <ReviewAmountSection />
            <ReviewTotalSection />
            <ReviewPaymentMethodSection />
            <ReviewPointsSection />
          </View>

          <AuthorizationSection />
        </View>
      </ScrollView>
    </SafeAreaView>
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
