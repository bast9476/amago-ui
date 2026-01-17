import React, { useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import {
  FlightHeader,
  FareTypeSelector,
  TripTypeSelector,
  TravelersSelector,
  RouteSelector,
  DateSelector,
  DepartureDate,
  MultiCity,
  FiltersSection,
  SearchBar,
} from './components';
import type { TripType } from './components/TripTypeSelector';
import { useAppDispatch, useAppSelector } from '@src/store/hooks';
import { bootstrapFlight, selectSearchParameters, updateSearchParameters } from '@modules/Flight/store';

export default function FlightHomeScreen() {
  const dispatch = useAppDispatch();
  const searchParameters = useAppSelector(selectSearchParameters);
  const tripType = (searchParameters.tripType ?? 'round-trip') as TripType;

  useEffect(() => {
    // Keep module behavior consistent with other modules (hydrate / ensure defaults)
    (dispatch as any)(bootstrapFlight());
  }, [dispatch]);

  const renderRouteAndDate = () => {
    if (tripType === 'one-way') {
      return (
        <>
          <RouteSelector />
          <DepartureDate />
        </>
      );
    } else if (tripType === 'multi-city') {
      return <MultiCity />;
    } else {
      return (
        <>
          <RouteSelector />
          <DateSelector />
        </>
      );
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" />
      <ScrollView className="flex-1 bg-[#f9fafb]">
        <FlightHeader />
        <View className="pt-4">
          <FareTypeSelector />
          <TripTypeSelector
            selected={tripType}
            onSelect={(type) => dispatch(updateSearchParameters({ tripType: type }))}
          />
          <TravelersSelector />
          {renderRouteAndDate()}
          <FiltersSection />
          <SearchBar />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
