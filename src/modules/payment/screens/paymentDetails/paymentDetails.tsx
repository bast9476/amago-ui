import React from 'react';
import { View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  PaymentDetailsHeader,
  MerchantCard,
  AmountSection,
  PaymentMethodSection,
  BalanceAndFeeSection,
  PromoCodeSection,
  ToggleSection,
  PaymentDetailsFooter,
} from './components';
import { usePaymentDetails } from './hooks';

export default function PaymentDetailsScreen() {
  const {
    amount,
    promoCode,
    schedulePayment,
    saveAsTemplate,
    selectedPaymentMethod,
    total,
    handleAmountChange,
    handleQuickAmount,
    handleMaxAmount,
    handlePromoCodeChange,
    handleApplyPromoCode,
    handleSchedulePaymentChange,
    handleSaveAsTemplateChange,
    handlePaymentMethodSelect,
    handleContinue,
  } = usePaymentDetails();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <PaymentDetailsHeader />

      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View className="px-4 py-5">
          <MerchantCard />

          <AmountSection
            amount={amount}
            onAmountChange={handleAmountChange}
            onQuickAmount={handleQuickAmount}
            onMaxAmount={handleMaxAmount}
          />

          <PaymentMethodSection />

          <BalanceAndFeeSection />

          <PromoCodeSection
            promoCode={promoCode}
            onPromoCodeChange={handlePromoCodeChange}
            onApply={handleApplyPromoCode}
          />

          <ToggleSection
            label="Schedule payment"
            value={schedulePayment}
            onValueChange={handleSchedulePaymentChange}
          />

          <ToggleSection
            label="Save as template"
            value={saveAsTemplate}
            onValueChange={handleSaveAsTemplateChange}
          />
        </View>
      </ScrollView>

      <PaymentDetailsFooter />

    </SafeAreaView>
  );
}
