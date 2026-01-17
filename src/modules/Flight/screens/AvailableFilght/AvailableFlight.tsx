import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useSelector, useDispatch } from 'react-redux';
import type { AppDispatch } from '@src/store/index';
import {
  selectAvailableFlights,
  selectSelectedFlight,
  selectSelectedFlightId,
  setSelectedFlight,
  bootstrapFlight,
} from '@modules/Flight/store';
import {
  AvailableFlightHeader,
  FlightSummaryBar,
  ActiveFilters,
  SearchDetailsBar,
  FlightCard,
  SelectedFlightFooter,
  FiltersModal,
  type Flight,
} from './components';

export default function AvailableFlight() {
  const dispatch = useDispatch<AppDispatch>();
  const availableFlights = useSelector(selectAvailableFlights);
  const selectedFlight = useSelector(selectSelectedFlight);
  const selectedFlightId = useSelector(selectSelectedFlightId);
  const [showFiltersModal, setShowFiltersModal] = useState(false);

  // Bootstrap flight data on mount
  useEffect(() => {
    (dispatch as any)(bootstrapFlight());
  }, [dispatch]);

  // Ensure a flight is selected if available
  useEffect(() => {
    if (availableFlights.length > 0 && !selectedFlightId) {
      dispatch(setSelectedFlight(availableFlights[0].id));
    }
  }, [availableFlights, selectedFlightId, dispatch]);

  const handleContinue = () => {
    // Navigate to next screen
    console.log('Continue with flight:', selectedFlight);
  };

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      <StatusBar style="dark" />

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <AvailableFlightHeader />
        {/* Search Details Bar */}
        <SearchDetailsBar />

        {/* Flight Summary Bar */}
        <FlightSummaryBar onFiltersPress={() => setShowFiltersModal(true)} />

        {/* Active Filters */}
        <ActiveFilters />

        {/* Flight Cards */}
        <View className="px-4 pt-4 pb-24">
          {availableFlights.map((flight: Flight) => (
            <FlightCard key={flight.id} flightId={flight.id} />
          ))}
        </View>
      </ScrollView>

      {/* Sticky Footer */}
      <SelectedFlightFooter onContinue={handleContinue} />

      {/* Filters Modal */}
      <FiltersModal visible={showFiltersModal} onClose={() => setShowFiltersModal(false)} />
    </SafeAreaView>
  );
}
