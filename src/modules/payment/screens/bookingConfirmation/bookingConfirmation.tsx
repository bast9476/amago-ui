import React from 'react';
import { View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useBookingConfirmation } from './hooks/useBookingConfirmation';
import {
  BookingConfirmationHeader,
  SuccessSummaryCard,
  TransactionDetailsCard,
  ActionGrid,
  RecurringToggleCard,
  QuickActionsSection,
  FooterActions,
} from './components';

export default function BookingConfirmationScreen() {
  const {
    bookingConfirmation,
    handleBack,
    handleInfo,
    handleToggleRecurring,
    handleCategorize,
    handleReportIssue,
    handleBackToHome,
    handleNewPayment,
  } = useBookingConfirmation();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <BookingConfirmationHeader title="Booking Confirmation" onBack={handleBack} onInfo={handleInfo} />
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 24 }}>
        <View className="px-4 pt-11 pb-4 mb-10">
          <SuccessSummaryCard title={bookingConfirmation.statusTitle} totalPaid={bookingConfirmation.totalPaid} />

          <TransactionDetailsCard />

          <ActionGrid />

          <RecurringToggleCard
            title="Set as recurring?"
            subtitle="Automatically pay this merchant monthly"
            value={bookingConfirmation.isRecurring}
            onToggle={handleToggleRecurring}
          />

          <QuickActionsSection onCategorize={handleCategorize} onReportIssue={handleReportIssue} />
        </View>

        <FooterActions onBackToHome={handleBackToHome} onNewPayment={handleNewPayment} />
      </ScrollView>
    </SafeAreaView>
  );
}