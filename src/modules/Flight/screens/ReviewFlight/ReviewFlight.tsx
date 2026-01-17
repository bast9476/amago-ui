import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ReviewFlightHeader,
  FlightSummaryCard,
  FareOptionsSection,
  BaggageAndCO2Section,
  PassengersSection,
  ContactInformationSection,
  SeatsAndExtrasSection,
  DiscountsAndOptionsSection,
  TermsAndConditionsSection,
  PriceSummaryFooter,
} from './components';

export default function ReviewFlight() {
  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <ReviewFlightHeader />
        <FlightSummaryCard />
        <FareOptionsSection />
        <BaggageAndCO2Section />
        <PassengersSection />
        <ContactInformationSection />
        <SeatsAndExtrasSection />
        <DiscountsAndOptionsSection />
        <TermsAndConditionsSection />
        <PriceSummaryFooter />
      </ScrollView>
    </SafeAreaView>
  );
}
